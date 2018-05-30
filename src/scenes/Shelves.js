import React from 'react';
import { BookShelf } from './../components';
import { PropTypes } from 'prop-types';
import '../styles/App.css';

const CURRENTLY_READING = 'currentlyReading';
const WANT_TO_READ = 'wantToRead';
const READ = 'read';

const Shelves = (props) => {

	/**
	* @description Handles which books belongs to specific shelves
	* @param {string} shelf - which shelf to filter
	* @return {array} - Array of filtered objects
	*/
	const handleShelf = (shelf) => (
		props.books.filter((book) => book.shelf === shelf)
	);

	return (
		<div>
			<BookShelf
				shelfTitle="Currently Reading"
				books={handleShelf(CURRENTLY_READING)}
				onUpdateShelf={props.onUpdateShelf}
			/>
			<BookShelf
				shelfTitle="Want to Read"
				books={handleShelf(WANT_TO_READ)}
				onUpdateShelf={props.onUpdateShelf} />
			<BookShelf
				shelfTitle="Read"
				books={handleShelf(READ)}
				onUpdateShelf={props.onUpdateShelf} />
		</div>
	);
};

Shelves.propTypes = {
	books: PropTypes.array.isRequired,
	onUpdateShelf: PropTypes.func.isRequired
};

export default Shelves;
