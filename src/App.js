import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './services/BooksAPI';
import { NavBar, AddBook } from './components';
import Shelves from './scenes/Shelves';
import SearchBooks from './scenes/SearchBooks';
import './styles/App.css';

class BooksApp extends React.Component {
	state = {
		books: []
	}
	constructor() {
		super();
		this.onUpdateShelf = this.onUpdateShelf.bind(this);
	}

	componentDidMount() {
		this.getBooks();
	}

	/**
	* @description Fetches API to get all books and set state
	*/
	getBooks() {
		BooksAPI.getAll()
			.then((books) => this.setState({ books }));
	}

	/**
	* @description Updates shelf on backend and in the application
	* @param {object} book - That should be updated
	* @param {string} shelf - which shelf update to
	*/
	onUpdateShelf(book, shelf) {
		BooksAPI.update(book, shelf)
			.then(() => this.getBooks());
	}

	render() {
		return (
			<div className="app">
				<Route path="/search" render={() => (
					<SearchBooks
						booksInShelves={this.state.books}
						onUpdateShelf={this.onUpdateShelf}
					/>
				)} />
				<Route exact path="/" render={() => (
					<div className="list-books">
						<NavBar title="My Reads" />
						<Shelves
							books={this.state.books}
							onUpdateShelf={this.onUpdateShelf}
						/>
						<AddBook />
					</div>
				)} />
			</div>
		);
	}
}

export default BooksApp;
