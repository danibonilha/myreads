import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { BookCover, SelectShelf, BookInfo} from './';
import '../styles/App.css';

class Book extends Component {
	
	changeShelf = (shelf) => {
		this.props.onUpdateShelf(this.props.book, shelf);
	};

	render() {
		const { book } = this.props;
	
		return (
			<div className="book">
				<BookCover book={book}>
					<SelectShelf
						shelf={book.shelf}
						changeShelf={this.changeShelf}
					/>
				</BookCover>
				<BookInfo book={book}/>
			</div>
		);
	}
}

Book.propTypes = {
	book: PropTypes.object.isRequired,
	onUpdateShelf: PropTypes.func.isRequired
};

export { Book };
