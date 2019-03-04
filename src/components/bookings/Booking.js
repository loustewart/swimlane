import React  from 'react';

const Booking = (props) => {

  return (
    <div className="component">
      <p>Lesson: {props.booking.lesson}</p>
        <p className="when">
          {props.booking.day}
          {props.booking.date}
          {props.booking.time}
        </p>
      <p>Customer: {props.booking.customer.name}</p>
    </div>
  )
}

export default Booking;
