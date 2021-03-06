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
    return(
      <div className="return-all">
        <BookingList bookings={this.state.bookings}/>
      </div>
    );
  }
}

export default BookingContainer;
