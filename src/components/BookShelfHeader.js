import React from 'react';
import { PropTypes } from 'prop-types';
import '../styles/App.css';


const BookShelfHeader = (props) => (
	<div className="bookshelf-title-container">
		<h2 className="bookshelf-title">{props.title}</h2>
	</div>
);

BookShelfHeader.propTypes = {
	title: PropTypes.string.isRequired
};

export { BookShelfHeader };
