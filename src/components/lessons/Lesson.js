import React  from 'react';


const Lesson = (props) => {
  if(!props.lesson){
  return null;
}

  return (
    <div>
    <ul className="lesson-info">
      <li className="lesson-info">Lesson Type: {props.lesson.type}</li>
    </ul>
    </div>
  )
}

export default Lesson;
