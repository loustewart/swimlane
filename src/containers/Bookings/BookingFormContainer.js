import React, { Component } from 'react';
import Request from '../../helpers/Request.js';
import BookingForm from '../../components/bookings/BookingForm.js';

class BookingFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {lessons: []}
    this.handleBookingPost = this.handleBookingPost.bind(this);

  }

  componentDidMount() {
    const request = new Request();
    const url = "/api/lessons";
    request.get(url).then((data) => {
      this.setState({lessons: data._embedded.lessons})
    });
  }


  handleBookingPost(booking) {
    const request = new Request();
    request.post('/api/bookings', booking).then(() => {
      window.location = '/bookings';
    });
  }

  render() {
    return(
      <div className="return-all">
      <BookingForm lessons={this.state.lessons} onSubmit={this.handleBookingPost} />
    </div>
  )}

}

export default BookingFormContainer;
