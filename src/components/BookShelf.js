import React from 'react';
import { PropTypes } from 'prop-types';
import '../styles/App.css';
import { BookShelfHeader, ListBooks } from './../components';


const BookShelf = ({ shelfTitle, books, onUpdateShelf }) => (
	<div className="bookshelf">
		<BookShelfHeader title={shelfTitle}/>
		<div className="bookshelf-books">
			<ListBooks 
				books={books} 
				onUpdateShelf={onUpdateShelf}
			/>
		</div> 
	</div>   
);

BookShelf.propTypes = {
	shelfTitle: PropTypes.string.isRequired,
	books: PropTypes.arrayOf(PropTypes.object),
	onUpdateShelf: PropTypes.func.isRequired
};

export { BookShelf };
