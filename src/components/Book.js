import React from 'react';
import { PropTypes } from 'prop-types';
import { Select } from './';
import '../scenes/App.css';

const coverStyle = {
	width: 128,
	height: 193
};

const Book = ({ backgroundImage, bookTitle, bookAuthor }) => (
	<div className="book">
		<div className="book-top">
			<div 
				className="book-cover" 
				style={Object.assign(coverStyle, {backgroundImage: `url(${backgroundImage})`})}>
			</div>
			<div className="book-shelf-changer">
				<Select />
			</div>
		</div>
		<div className="book-title">{bookTitle}</div>
		<div className="book-authors">{bookAuthor}</div>
	</div>
);

Book.propTypes = {
	backgroundImage: PropTypes.string.isRequired,
	bookTitle: PropTypes.string.isRequired,
	bookAuthor: PropTypes.string.isRequired
};

export { Book };