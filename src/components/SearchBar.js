import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/App.css';


const SearchBar = (props) => (
	<div className="search-books-bar">
		<Link className="close-search" to="/"> Close</Link>
		<div className="search-books-input-wrapper">
			<input
				type="text"
				placeholder={props.placeholder}
				onChange={(event) => props.updateQuery(event.target.value)} />
		</div>
	</div>
);

SearchBar.propTypes = {
	placeholder: PropTypes.string,
	updateQuery: PropTypes.func.isRequired
};

export { SearchBar };
