import React, { useContext, useMemo } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import checkout from '../../assets/images/checkout/checkout.png'
import { AuthContact } from '../../Providers/AuthProviders';

const CheckOut = () => {
    const service = useLoaderData()
    const {_id,title,price,img} = service;
    const {user} = useContext(AuthContact)

    const handelCheckOut = (event)=>{
      event.preventDefault();

      const form = event.target;

      const name = form.name.value;
      const date = form.date.value;
      const email = user?.email;

      const order = {
        customerName:name,
        date:date,
       email:email,
        price:price,
        img:img,
      service:title,
      service_id:_id 
    }

    console.log(order);

    fetch('http://localhost:5000/checkOuts',{
      method:'POST',
      headers:{
     'content-type':'application/json',
      },

      body:JSON.stringify(order)

    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);

      if(data.insertedId){
        alert('Booking SuccessFully')
      }
      
    })
  
  }
    return (
        <div className='my-6'>
           <div>
           <img className='rounded mb-6' src={checkout} alt="" />
           </div>
           <h3 className='mb-5 text-center text-5xl'>Book Server: {title}</h3>
      <div className="card-body bg-base-200 rounded-xl">
       <form onSubmit={handelCheckOut}>
       <div className='grid md:grid-cols-1 gap-4 lg:grid-cols-2 '>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name='date' className="input input-bordered" />
        </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" defaultValue={'$'+price} className="input input-bordered" />
        </div>
       </div>
        <div className="form-control mt-6">
          <input className='btn btn-primary btn-block' type="submit" value="Order Confirm" />
        </div>
       </form>
      </div>
    </div>
    );
};

export default CheckOut;