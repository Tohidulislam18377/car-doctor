import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div className="mb-4 mt-4">
           <div className="text-center space-y-3">
           <h3 className="text-3xl text-orange-600">Services</h3>
            <p className="text-4xl font-bold ">Our Services Area</p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
            {
               services.map(service=><ServicesCard
                key={service._id}
                service={service}
                ></ServicesCard>)
            }
           </div>
        </div>
    );
};

export default Services;

