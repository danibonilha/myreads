import React from 'react';
import { PropTypes } from 'prop-types';
import '../scenes/App.css';
import { BookShelfHeader, ListBooks } from './../components';


const BookShelf = ({ shelfTitle, books }) => (
	<div className="bookshelf">
		<BookShelfHeader title={shelfTitle}/>
		<div className="bookshelf-books">
			<ListBooks books={books}/>
		</div> 
	</div>   
);

BookShelf.propTypes = {
	shelfTitle: PropTypes.string.isRequired,
	books: PropTypes.arrayOf(PropTypes.object)
};

export { BookShelf };
