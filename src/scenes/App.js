import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from '../services/BooksAPI';
import { NavBar, BookShelf, AddBook } from './../components';
import SearchBooks from './SearchBooks';
import '../styles/App.css';

const CURRENTLY_READING = 'currentlyReading';
const WANT_TO_READ = 'wantToRead';
const READ = 'read';

class BooksApp extends React.Component {
	state = {
		books: []
	}
	constructor() {
		super();
		this.onUpdateShelf = this.onUpdateShelf.bind(this);
	}

	componentDidMount() {
		BooksAPI.getAll()
			.then((books) => this.setState({ books }));
	}
	handleShelf(shelf) {
		return this.state.books.filter((book) => book.shelf === shelf);
	}

	onUpdateShelf(book) {
		BooksAPI.get(book).then((book) => {
			this.setState((prevState) => ({
				books: prevState.books.filter(
					(prevBook) => prevBook.id !== book.id
				).concat(book)
			}));
		});
	}
	render() {
		return (
			<div className="app">
				<Route path="/search"  render={() => (
					<SearchBooks 
						booksInShelfs={this.state.books} 
						onUpdateShelf={this.onUpdateShelf}
					/>
				)}/>
				<Route exact path="/" render={() => (
					<div className="list-books">
						<NavBar title="My Reads" />
						<div className="list-books-content">
							<div>
								<BookShelf
									shelfTitle="Currently Reading"
									books={this.handleShelf(CURRENTLY_READING)}
									onUpdateShelf={this.onUpdateShelf}
								/>
								<BookShelf
									shelfTitle="Want to Read"
									books={this.handleShelf(WANT_TO_READ)}
									onUpdateShelf={this.onUpdateShelf} />
								<BookShelf
									shelfTitle="Read"
									books={this.handleShelf(READ)}
									onUpdateShelf={this.onUpdateShelf} />
							</div>
						</div>
						<AddBook />
					</div>
				)}/>
			</div>
		);
	}
}

export default BooksApp;
