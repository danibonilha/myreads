import React from 'react';
import * as BooksAPI from '../services/BooksAPI';
import './App.css';
import { SearchBar } from './../components';

class SearchBooks extends React.Component {
	render() {
		return (
			<div className="search-books">
				<SearchBar placeholder="Search by title or author" />
				<div className="search-books-results">
					<ol className="books-grid"></ol>
				</div>
			</div>
		);
	}
}


export default SearchBooks;
