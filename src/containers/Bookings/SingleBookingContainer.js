import React, { Component } from 'react';
import SingleBooking from '../../components/bookings/SingleBooking.js';
import Request from '../../helpers/Request.js';

class SingleBookingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {booking: null}
    this.handleDelete = this.handleDelete.bind(this);
  }

componentDidMount() {
  const request = new Request();
  const url = '/api/bookings/' + this.props.id;
  request.get(url).then((data) => {
    this.setState({booking: data})
  })
}

  handleDelete(id){
    const request = new Request();
    const url = '/api/bookings/' + id;
    request.delete(url).then(() => {
      window.location = "/bookings";
    });
  }

  render() {
    return (
      <SingleBooking booking = {this.state.booking}
      handleDelete = {this.handleDelete}/>
    )
  }

}


export default SingleBookingContainer;
