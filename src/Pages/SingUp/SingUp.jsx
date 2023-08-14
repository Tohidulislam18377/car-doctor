import { Link } from "react-router-dom";
import logo from "../../assets/images/login/login.svg"
import { AuthContact } from "../../Providers/AuthProviders";
import { useContext } from "react";

const SingUp = () => {
const {createUser} = useContext(AuthContact)

    const handelSingUp =(event)=>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        createUser(email,password,name)
      .then((result)=>{
        const user = result.user;
        console.log(user);
      })
      .catch((error)=>{
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
           <form onSubmit={handelSingUp}> 
           <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sing Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Conform Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sing UP" />
              </div>
            </div>
           </form>
            <p className="text-center my-5">Already Have Account <Link className="text-orange-600 font-bold" to="/login">Login</Link> </p>   
          </div>
        </div>
      </div>
    );
};

export default SingUp;