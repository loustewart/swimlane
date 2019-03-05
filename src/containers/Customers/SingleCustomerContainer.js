import React from 'react';

const SingleCustomerContainer = (props) => {

  if(props.customer) {
    return null;
  }

  return (
    <div className="full-customer-info">
    <p>{props.customer.name}</p>
    <ul>
      <li className="phone"> Phone Number: {props.customer.phone}</li>
      <li className="proficieny"> Proficiency: {props.customer.proficieny}</li>
      <li className="contact"> Parent/Contact: {props.customer.contact}</li>
    </ul>
    </div>
  )
}
