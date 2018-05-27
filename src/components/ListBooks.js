import React from 'react';
import { PropTypes } from 'prop-types';
import { Book } from './../components';

const ListBooks = ({ books, onUpdateShelf }) => (
	<ol className="books-grid">
		{books.map((book) => (
			<li key={book.id}>
				<Book book={book}	onUpdateShelf={onUpdateShelf}/>           
			</li>))
		}
	</ol>
);

ListBooks.propTypes = {
	books: PropTypes.arrayOf(PropTypes.object),
	onUpdateShelf: PropTypes.func.isRequired
};

export { ListBooks };
