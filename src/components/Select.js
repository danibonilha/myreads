import React from 'react';
import '../scenes/App.css';

const Select = () => (
	<select>
		<option value="none" disabled>Move to...</option>
		<option value="currentlyReading">Currently Reading</option>
		<option value="wantToRead">Want to Read</option>
		<option value="read">Read</option>
		<option value="none">None</option>
	</select>
);

export { Select };