import React  from 'react';

const SingleeEsson = (props) => {

  if(!props.lesson){
    return null;
  }

  const onDelete = () => {
    props.handleDelete(props.lesson.id)
  }

  return (
    <div className="component">
      <p>{props.lesson.type}</p>
      <p>Location: {props.lesson.location}</p>
      <p>Instructor: {props.lesson.instructor}</p>
      <button onClick={onDelete}>Delete Lesson</button>
    </div>
  )
}

export default SingleLesson;
