import React from 'react';
import { BookShelf } from './../components';
import { PropTypes } from 'prop-types';
import '../styles/App.css';

const CURRENTLY_READING = 'currentlyReading';
const WANT_TO_READ = 'wantToRead';
const READ = 'read';

const Shelfs = (props) => {
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

Shelfs.propTypes = {
	books: PropTypes.array.isRequired,
	onUpdateShelf: PropTypes.func.isRequired
};

export default Shelfs;
