import React from 'react';
import * as BooksAPI from '../services/BooksAPI';
import '../styles/App.css';
import { SearchBar, ListBooks } from './../components';
import { PropTypes } from 'prop-types';


class SearchBooks extends React.Component {
	static propTypes = {
		booksInShelfs: PropTypes.array.isRequired,
		onUpdateShelf: PropTypes.func.isRequired
	}
	state = {
		query: '',
		searchBooks: []
	}
	updateQuery = (query) => {
		this.setState({ query: query.trim() });
		if (query) {
			BooksAPI.search(query).then((searchBooks) => {
				if (searchBooks.length > 0) {
					searchBooks.forEach((book) => {
						const alreadyInShelfs = this.props.booksInShelfs.find(
							(shelfsBooks) => shelfsBooks.id === book.id
						);
						if (alreadyInShelfs) {
							book.shelf = alreadyInShelfs.shelf;
						}
					});
					if (this.state.query) {
						return this.setState({ searchBooks });
					}
				}
			});
		}
		return this.setState({ searchBooks: [] });
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
