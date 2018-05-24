import React from 'react';
import '../scenes/App.css';

const SearchBar = (props) => (
	<div className="search-books-bar">
		<a className="close-search" >Close</a>
		<div className="search-books-input-wrapper">
			<input type="text" placeholder={props.placeholder} />
		</div>
	</div>
);

export  {SearchBar};
