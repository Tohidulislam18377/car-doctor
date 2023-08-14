
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/login/login.svg"
import { AuthContact } from "../../Providers/AuthProviders";
import { useContext } from "react";

const Login = () => {

  const { singIn } = useContext(AuthContact)
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const navigate = useNavigate()

  const handelLogin = (event) => {

    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password);

    singIn(email, password)
      .then((result) => {
        const user = result.user;
        const loggedUser = {
          email: user.email
          
        }
        console.log(loggedUser);

        fetch('http://localhost:5000/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(loggedUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log('jwt response', data);

            // set localStorage

            localStorage.setItem('car-access-token', data.token);
            navigate(from, { replace: true })
          })
      })
      .catch((error) => {
        console.log(error);
      })

  }

  return (
    <div className="hero bg-base-200 mb-5 rounded-xl">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={logo} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelLogin}>
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </div>
          </form>
          <p className="text-center my-5">New Cars Doctor <Link className="text-orange-600 font-bold" to="/singup">Sing Up</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;