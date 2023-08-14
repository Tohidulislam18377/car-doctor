import React, { useState } from 'react';



const BookingRow = ({booking,handelDelete,handelUpdateConfirm}) => {
    const {_id,price,service,img,date,status} = booking
  


 
    // deletedCount
    return (
        <div className="overflow-x-auto mb-6">
        <table className="table">
          {/* head */}
          
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
              <button onClick={()=>handelDelete(_id)} className="btn btn-sm btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
              </th>
              <td>
               
                  <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24 rounded">
                      <img src={img}alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
              </td>
              <td>
              {service}
              </td>
              <td>${price}</td>
              <td>{date}</td>
              <th>
               { status=== 'Confirm' ? <span className='text-primary font-bold'>Confirmed</span>:
                 <button onClick={()=>handelUpdateConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
               }
              </th>
            </tr>
          </tbody>
        </table>
      </div>

    );
};

export default BookingRow;