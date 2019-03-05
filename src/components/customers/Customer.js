import React  from 'react';
import {Link} from 'react-router-dom';

const Customer = (props) => {
  if(!props.customer){
  return null;
}

  return (
    <div className="component">
        <Link to={"/customers/" + props.customer.id}>
        {props.customer.name}</Link>
        <p>Phone: {props.customer.phone}</p>
    </div>
  )
}

export default Customer;
