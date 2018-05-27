import React from 'react';
import '../scenes/App.css';
import { PropTypes } from 'prop-types';


const SelectShelf = ({ shelf, changeShelf}) => (
	<select 
		value={shelf} 
		onChange={(event) => changeShelf(event.target.value)}
	>
		<option disabled>Move to...</option>
		<option value="currentlyReading">Currently Reading</option>
		<option value="wantToRead">Want to Read</option>
		<option value="read">Read</option>
		<option value="none">None</option>
	</select>
);

SelectShelf.propTypes = {
	shelf: PropTypes.string,
	changeShelf: PropTypes.func.isRequired		
};

SelectShelf.defaultProps = {
	shelf: 'none'
};


export { SelectShelf };