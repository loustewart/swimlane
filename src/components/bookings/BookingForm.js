import React from 'react';

const BookingForm = (props) => {

  if (!props.lessons) return <p>Loading...</p>

  const options = props.lessons.map((lesson, index) => {
    return <option key={index} value={lesson._links.self.href}>{lesson.type}</option>
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const booking = {
      "day": event.target.day.value,
      "date": event.target.date.value,
      "time": event.target.time.value,
      "lesson": event.target.lesson.value,
    }
    props.onSubmit(booking);
  }

  return(
    <div className="component">
      <form onSubmit={handleSubmit} >
        <h2>New Booking Form</h2>
        <p>Date</p><input type="text" name="date"/>
        <br/><br/>
        <p>Day</p><input type="text" name="day"/>
        <br/><br/>
        <p>Time</p><input type="text" name="time"/>
        <br/><br/><br/>
        <p>Lesson</p><input type="text" name="lesson"/>
        <br/><br/><br/>
        <button type="submit">Save</button>
      </form>
    </div>
  )

}

export default BookingForm;
