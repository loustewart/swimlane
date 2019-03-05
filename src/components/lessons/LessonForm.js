import React from 'react';

const LessonForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const lesson = {
      "type": event.target.type.value,
      "location": event.target.type.value,
      "instructor": event.target.type.value
    }
    props.onSubmit(lesson);
  }

  return(
    <div className="add-lesson">
      <form onSubmit={handleSubmit} >
        <br/>
        <p>Lesson Type</p><input type="text" name="type"/>
        <br/><br/>
        <p>Location</p><input type="text" name="location"/>
        <br/><br/>
        <p>Instructor</p><input type="text" name="instructor"/>
        <br/><br/><br/>
        <button type="submit">Save</button>
      </form>
    </div>
  )

}

export default LessonForm;
