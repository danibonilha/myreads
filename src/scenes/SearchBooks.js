import React from 'react';
import { PropTypes } from 'prop-types';
import { SearchBar, ListBooks } from './../components';
import * as BooksAPI from '../services/BooksAPI';
import '../styles/App.css';



class SearchBooks extends React.Component {
	static propTypes = {
		booksInShelves: PropTypes.array.isRequired,
		onUpdateShelf: PropTypes.func.isRequired
	}
	state = {
		query: '',
		searchBooks: []
	}
	/**
	* @description Updates query while typing and 
	* searches for books that matches it, keeping shelves
	* of already added books.
	* @param {srting} query - To search for
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
					if (this.state.query) {
						this.setState({ searchBooks });
					}
				}
			});
		}
		else {
			this.setState({ searchBooks: [] });
		}
	}

	render() {
		return (
			<div className="search-books">
				<SearchBar
					placeholder="Search by title or author"
					updateQuery={this.updateQuery} />
				<div className="search-books-results">
					<ListBooks
						books={this.state.searchBooks}
						onUpdateShelf={this.props.onUpdateShelf}
					/>
				</div>
			</div>
		);
	}
}


export default SearchBooks;
