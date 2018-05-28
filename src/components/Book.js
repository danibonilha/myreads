import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { SelectShelf } from './';
import * as BooksAPI from './../services/BooksAPI';
import '../styles/App.css';

const coverStyle = {
	width: 128,
	height: 193
};

class Book extends Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
		onUpdateShelf: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.changeShelf = this.changeShelf.bind(this);
	}

	state = {
		book: this.props.book
	};

	changeShelf(shelf) {
		BooksAPI.update(this.state.book, shelf)
			.then(() => this.props.onUpdateShelf(this.state.book.id));
	}

	render() {
		const { book } = this.state;
		const backgroundImage = book.imageLinks ? 
			book.imageLinks.thumbnail : require("../icons/no-cover.svg");
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
							changeShelf={this.changeShelf} 
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
	}
}



export { Book };