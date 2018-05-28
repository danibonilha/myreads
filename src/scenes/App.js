import React from 'react';
import * as BooksAPI from '../services/BooksAPI';
import { NavBar, BookShelf } from './../components';
import SearchBooks from './SearchBooks';
import '../styles/App.css';

const CURRENTLY_READING = 'currentlyReading';
const WANT_TO_READ = 'wantToRead';
const READ = 'read';

class BooksApp extends React.Component {
	state = {
		/**
	 * TODO: Instead of using this state variable to keep track of which page
	 * we're on, use the URL in the browser's address bar. This will ensure that
	 * users can use the browser's back and forward buttons to navigate between
	 * pages, as well as provide a good URL they can bookmark and share.
	 */
		showSearchPage: false,
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
				{this.state.showSearchPage ? (
					<SearchBooks 
						booksInShelfs={this.state.books} 
						onUpdateShelf={this.onUpdateShelf}
					/>
				) : (
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
						<div className="open-search">
							<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default BooksApp;
