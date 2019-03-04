import React  from 'react';
import {Link} from 'react-router-dom';

const Lesson = (props) => {
  if(!props.lesson){
  return null;
}

  return (
    <div className="component">
        <Link to={"/lesson/" + props.lesson.id}>
        {props.lesson.type}</Link>
        <p>Location: {props.lesson.location}</p>
        <p>Instructor: {props.lesson.instructor}</p>
    </div>
  )
}

export default Lesson;
