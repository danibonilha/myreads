import React from 'react';
import { PropTypes } from 'prop-types';
import { SelectShelf } from './';
import '../styles/App.css';

const coverStyle = {
	width: 128,
	height: 193
};

const Book = ({ book, onUpdateShelf }) => {
	const changeShelf = (shelf) => {
		onUpdateShelf(book, shelf);
	};
	const backgroundImage = book.imageLinks ?
		book.imageLinks.thumbnail : require('../icons/no-cover.svg');

	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={Object.assign(coverStyle,
						{ backgroundImage: `url(${backgroundImage})` })
					}>
				</div>
				<div className="book-shelf-changer">
					<SelectShelf
						shelf={book.shelf}
						changeShelf={changeShelf}
					/>
				</div>
			</div>
			{!!book.title &&
				<div className="book-title">{book.title}</div>
			}
			{!!book.authors &&
				<div className="book-authors">{book.authors[0]}</div>
			}
		</div>
	);
};

Book.propTypes = {
	book: PropTypes.object.isRequired,
	onUpdateShelf: PropTypes.func.isRequired
};

export { Book };
