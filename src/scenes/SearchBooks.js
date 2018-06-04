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
	* @description Updates query while typing and 
	* searches for books that matches it, keeping shelves
	* of already added books.
	* @param {string} query - To search for
	*/
	updateQuery = (query) => {
		this.setState({ query: query.trim() });
		if (query) {
			BooksAPI.search(query).then((searchBooks) => {
				if (searchBooks.length > 0) {
					searchBooks.forEach((book) => {
						const alreadyInShelves = this.props.booksInShelves.find(
							(shelvesBooks) => shelvesBooks.id === book.id
						);
						if (alreadyInShelves) {
							book.shelf = alreadyInShelves.shelf;
						}
					});
					this.setState({ searchBooks, notFound: false });
				}
				else {
					this.setState({ searchBooks: [], notFound: true });
				}
			}).catch(() => this.setState({ searchBooks: [], notFound: true }));
		}
		else {
			this.setState({ searchBooks: [], notFound: false });
		}
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
