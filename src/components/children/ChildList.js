import React from 'react';
import Child from './Child.js';

const ChildList = (props) => {
	console.log('children', props.children);
	const children = props.children.map((child) => {
		 	return (<li key={child.id}
        className="component-item">
				<Child child={child} />
			</li>
		)
		})

	return (
		<ul className="component-list">
			{children}
		</ul>

	)
}
 export default ChildList;
