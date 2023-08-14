import { Link } from "react-router-dom";


const ServicesCard = ({service}) => {
    const {_id,title,img,price} = service
    return (
        <div className="card mb-4 w-full bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            Title: {title}
          </h2>
          <p c>Price: ${price}</p>
          <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
          <button className="badge badge-outline bg-purple-200">product</button>
          </Link>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;

