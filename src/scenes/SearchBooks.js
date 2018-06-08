import React from 'react';
import { PropTypes } from 'prop-types';
import { debounce } from 'throttle-debounce';
import { SearchBar, ListBooks } from './../components';
import * as BooksAPI from '../services/BooksAPI';
import '../styles/App.css';

class SearchBooks extends React.Component {
	static propTypes = {
		booksInShelves: PropTypes.array.isRequired,
		onUpdateShelf: PropTypes.func.isRequired
	}
	constructor(props) {
		super(props);
		this.updateQuery = debounce(250, this.updateQuery);
	}
	state = {
		query: '',
		searchBooks: [],
		notFound: false
	}

	/**
	* @description Updates shelves of searchedBooks
	* if books are already in shelves
	* @param {object} books - books from search
	* @param {object} booksInShelves - books currently on shelves
	*/
	updateShelves = (books, booksInShelves) => {
		return books.map(book => {
			const existingBook = booksInShelves.find(b => b.id === book.id);
			return existingBook ? existingBook : book;
		});
	};

	/**
	* @description Updates query while typing and 
	* searches for books that matches it
	* @param {string} query - To search for
	*/
	updateQuery = (query) => {
		this.setState({ query: query.trim() });
		if (!query) {
			this.setState({ searchBooks: [], notFound: false });
			return;
		}
		BooksAPI.search(query)
			.then(books => {
				const searchBooks = this.updateShelves(books, this.props.booksInShelves);
				this.setState({ searchBooks, notFound: false });
			})
			.catch(() => this.setState({ searchBooks: [], notFound: true }));
	}

	render() {
		return (
			<div className="search-books">
				<SearchBar
					placeholder="Search by title or author"
					updateQuery={this.updateQuery} />
				{!this.state.notFound &&
					<div className="search-books-results">
						<ListBooks
							books={this.state.searchBooks}
							onUpdateShelf={this.props.onUpdateShelf}
						/>
					</div>}
				{this.state.notFound &&
					<img className="book-not-found"
						src={require('../assets/book-not-found.png')}
						alt="Book not found"
					/>}
			</div>
		);
	}
}


export default SearchBooks;
