import React from 'react';
import { PropTypes } from 'prop-types';
import { Book } from './../components';

const ListBooks = ({ books }) => (
	<ol className="books-grid">
		{books.map((book) => (
			<li key={book.id}>
				<Book
					backgroundImage={book.imageLinks.thumbnail}
					bookTitle={book.title}
					bookAuthor={book.authors[0]}
				/>                 
			</li>))
		}
	</ol>
);

ListBooks.propTypes = {
	books: PropTypes.arrayOf(PropTypes.object)
};

export { ListBooks };
