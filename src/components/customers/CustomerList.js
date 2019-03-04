import React from 'react';
import Customer from './Customer.js';


const CustomerList = (props) => {

	const customers = props.customers.map((customer) => {
		 	return (<li key={customer.id}
        className="component-item">
				<Customer customer={customer} />
			</li>
		)
		})

	return (
		<ul className="component-list">
			{customers}
		</ul>

	)
}
 export default CustomerList;
