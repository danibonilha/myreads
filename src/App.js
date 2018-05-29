import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './services/BooksAPI';
import { NavBar, AddBook } from './components';
import Shelfs from './scenes/Shelfs';
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
		BooksAPI.getAll()
			.then((books) => this.setState({ books }));
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
						<Shelfs 
							books={this.state.books} 
							onUpdateShelf={this.onUpdateShelf}
						/>
						<AddBook />
					</div>
				)}/>
			</div>
		);
	}
}

export default BooksApp;
