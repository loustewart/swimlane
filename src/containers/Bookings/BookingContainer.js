import React, {Component} from 'react';
import BookingList from '../../components/bookings/BookingList.js';
import Request from '../../helpers/Request.js';


class BookingContainer extends Component {
  constructor(props){
    super(props);
    this.state = {bookings: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/bookings').then((data) => {
      this.setState({bookings: data._embedded.bookings})
    })
    }

  render(){
    if (this.state.bookings.length === 0) return null;
    return (
        <BookingList bookings={this.state.bookings}/>
    );
  }
}

export default BookingContainer;
