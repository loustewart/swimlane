import React from 'react';
import Booking from './Booking.js';


const BookingList = (props) => {

	const bookings = props.bookings.map((booking) => {
		 	return (<li key={booking.id} className="component-item">
				<Booking booking={booking} />
			</li>
		)
		})

console.log(props.bookings);
	return (
		<ul className="component-list">
			{bookings}
		</ul>

	)
}
 export default BookingList;
