import React from 'react';
import '../scenes/App.css';
import { PropTypes } from 'prop-types';

const SearchBar = (props) => (
	<div className="search-books-bar">
		<a className="close-search" >Close</a>
		<div className="search-books-input-wrapper">
			<input 
				type="text" 
				placeholder={props.placeholder} 
				onChange={(event) => props.updateQuery(event.target.value)}/>
		</div>
	</div>
);

SearchBar.propTypes = {
	placeholder: PropTypes.string,
	updateQuery: PropTypes.func.isRequired
};

export  { SearchBar };
