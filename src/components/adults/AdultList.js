import React from 'react';
import Adult from './Adult.js';

const AdultList = (props) => {
	console.log('adults', props.adults);
	const adults = props.adults.map((adult) => {
		 	return (<li key={adult.id}
        className="component-item">
				<Adult adult={adult} />
			</li>
		)
		})

	return (
		<ul className="component-list">
			{adults}
		</ul>

	)
}
 export default AdultList;
