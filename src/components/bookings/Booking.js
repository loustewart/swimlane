import React  from 'react';
import {Link} from 'react-router-dom';

const Booking = (props) => {
  if(!props.booking){
    return null;
  }
  return (
    <div className="component">
    <Link to={"/bookings/" + props.booking.id}>
    {props.booking._embedded.customer.name}</Link>
      <p>Lesson: {props.booking._embedded.lesson.type}</p>
          <ul className="booking:when">
          <li className="day"> Day: {props.booking.day}</li>
          <li className="date"> Date: {props.booking.date}</li>
          <li className="time"> Time: {props.booking.time}</li>
          </ul>
    </div>
  )
}

export default Booking;
