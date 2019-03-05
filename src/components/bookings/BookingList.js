import React from 'react';
import Booking from './Booking.js';


const BookingList = (props) => {
	console.log('bookings', props.bookings);
	const bookings = props.bookings.map((booking) => {
		 	return (<li key={booking.id} className="component-item">
				<Booking booking={booking} />
			</li>
		)
		})

	return (
		<ul className="component-list">
			{bookings}
		</ul>

	)
}
 export default BookingList;
