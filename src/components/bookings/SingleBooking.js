import React from 'react';

const SingleBooking = (props) => {

    if(!props.booking){
      return null;
    }

    const onDelete = () => {
      props.handleDelete(props.booking.id)
    }

    return (
      <div className="component">
      <p>{props.booking._embedded.customer.name}</p>
      <p>{props.booking._embedded.lesson.type}</p>
      <p className="day"> Day: {props.booking.day}</p>
      <p className="date"> Date: {props.booking.date}</p>
      <p className="time"> Time: {props.booking.time}</p>
      <br/>
      <button onClick={onDelete}>Delete Booking</button>
      </div>
    )
}

export default SingleBooking;
