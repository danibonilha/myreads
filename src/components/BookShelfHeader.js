import React from 'react';
import { PropTypes } from 'prop-types';
import '../scenes/App.css';


const BookShelfHeader = (props) => (
	<h2 className="bookshelf-title">{props.title}</h2>
);

BookShelfHeader.propTypes = {
	title: PropTypes.string.isRequired
};

export { BookShelfHeader };
