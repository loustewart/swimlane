import React  from 'react';
import {Link} from 'react-router-dom';

const Child = (props) => {
  if(!props.child){
  return null;
}

  return (
    <div className="component">
        <Link to={"/children/" + props.child.id}>
        {props.child.name}</Link>
        <p>Age: {props.child.age}</p>
    </div>
  )
}

export default Child;
