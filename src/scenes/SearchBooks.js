import React from 'react';
import * as BooksAPI from '../services/BooksAPI';
import './App.css';
import { SearchBar, ListBooks } from './../components';


class SearchBooks extends React.Component {
	constructor(props){
		super(props);
		this.updateQuery = this.updateQuery.bind(this);
	}
	
	state = {
		query: '',
		books: []
	}

	updateQuery = (query) => {
		this.setState({query: query.trim()});
		BooksAPI.search(query).then((books) => this.setState({ books }));
	}
	render() {
		return (
			<div className="search-books">
				<SearchBar 
					placeholder="Search by title or author"
					updateQuery={this.updateQuery} />
				<div className="search-books-results">
					<ListBooks books={this.state.books}/>
				</div>
			</div>
		);
	}
}


export default SearchBooks;
