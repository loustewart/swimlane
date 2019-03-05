import React  from 'react';
import {Link} from 'react-router-dom';

const Adult = (props) => {
  if(!props.adult){
  return null;
}

  return (
    <div className="component">
        <Link to={"/adults/" + props.adult.id}>
        {props.adult.name}</Link>
        <p>Phone: {props.adult.phone}</p>
    </div>
  )
}

export default Adult;
