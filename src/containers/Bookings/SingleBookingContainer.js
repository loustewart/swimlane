import React, { Component } from 'react';
import SingleBooking from '../components/bookings/SingleBooking.js';
import Request from '../helpers.Request.js';

class SingleBookingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {booking: null}
  }

componentDidMount() {
  const request = new Request();
  const url = ('/api/bookings' + this.props.id).then((data) => {
    this.setState({booking: data._embedded.bookings})
  })
}

  render() {
    return (
      <SingleBooking booking = {this.state.booking}/>
    )
  }

}


export default SingleBookingContainer;
