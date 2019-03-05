import React  from 'react';
import {Link} from 'react-router-dom';

const Lesson = (props) => {
  if(!props.lesson){
  return null;
}

  return (
    <div className="component">
      <Link to={"/lessons/" + props.lesson.id}> {props.lesson.type}</Link>

    </div>
  )
}

export default Lesson;
