import React from 'react';

const SingleBooking = (props) => {

    if(!props.booking){
      retun null;
    }

    return (
      <div className="full-booking">
      <p>{props.booking._embedded.customer.name}</p>
      <p>{props.booking._embedded.lesson.type}</p>
      <ul className="booking:when">
      <li className="day"> Day: {props.booking.day}</li>
      <li className="date"> Date: {props.booking.date}</li>
      <li className="time"> Time: {props.booking.time}</li>
      </ul>
      </div>
    )
}

export default SingleBooking;
