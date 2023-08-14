import { useContext, useEffect, useState } from "react";
import { AuthContact } from "../../Providers/AuthProviders";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";


const Bookings = () => {
    const {user} = useContext(AuthContact);
    const [bookings,setBookings] = useState([])
    const navigate = useNavigate();
   

const url = `http://localhost:5000/checkOuts?email=${user?.email}`
   useEffect(()=>{
    fetch(url, {
        method:'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('car-access-token')}`
        },
    })
    .then(res => res.json())
    .then(data=>{
      
        if(!data.error){
            setBookings(data)
        }

        else{
            navigate('/')
        }
    })
  
   },[url,navigate])

       
   const handelDelete = (id)=>{
    const proceed = confirm('I want to delete')
   if(proceed){
    fetch(`http://localhost:5000/checkOuts/${id}`,{
        method:'DELETE',
    })
    .then(res=>res.json())
    .then(date =>{
        console.log(date);
        if(date.deletedCount>0){
            alert('Delete successfully')
        }
        const remaining = bookings.filter(b=>b._id !==id)
        setBookings(remaining)
    })
   }
}


const handelUpdateConfirm =id =>{
fetch(`http://localhost:5000/checkOuts/${id}`,{
    method:'PATCH',
    headers:{
        'content-type':'application/json'
    },

    body:JSON.stringify({status:'confirm'})
})
.then(res=>res.json())
.then (data=>{
    console.log(data)
    if(data.modifiedCount>0){
        // update state
        const remaining = bookings.filter(booking=>booking._id !==id)
        const updated = bookings.find(booking=>booking._id ===id)
        updated.status = 'Confirm'
        const newBooking = [updated,...remaining]
        setBookings(newBooking)
    }

})
}

    return (
        <div>
           
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
        </th>
     <div className="grid grid-cols-5 w-full text-2xl">
     <th className="ml-16">Image</th>
        <th className="ml-24">Service</th>
        <th className="ml-28">Price</th>
        <th className="ml-16">Date</th>
        <th className="ml-11">Status</th>
     </div>
       
      </tr>
    </thead>
    <tbody>
    </tbody>
  
    
  </table>
</div>




            {
                bookings.map(booking=><BookingRow
                key={booking._id}
                booking={booking}
                handelDelete={handelDelete}
                handelUpdateConfirm={handelUpdateConfirm}    
                ></BookingRow>)
            }
        </div>
    );
};

export default Bookings;