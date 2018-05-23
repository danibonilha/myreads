import React from 'react';
import { PropTypes } from 'prop-types';
import '../scenes/App.css';

const NavBar = (props) => (
	<div className="list-books-title">
		<h1>{props.title}</h1>
	</div>
);

NavBar.propTypes = {
	title: PropTypes.string.isRequired
};

export { NavBar }; 