import React from 'react';
import Lesson from './Lesson.js';

const LessonList = (props) => {

	const lessons = props.lessons.map((lesson) => {
		 	return (<li key={lesson.id}
        className="component-item">
				<Lesson lesson={lesson} />
			</li>
		)
		})

	return (
		<ul className="component-list">
			{lessons}
		</ul>

	)
}
 export default LessonList;
