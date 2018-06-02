import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import '../styles/App.css';
import {  Button } from 'semantic-ui-react';


class BookInfo extends Component {

	render() {
		const { book } = this.props;
		return (
			<div className="book-info-container-button">
				<div className="book-info-container">
					{!!book.title &&
					<div className="book-title">{book.title}</div>
					}
					{!!book.authors &&
					<div className="book-authors">{book.authors[0]}</div>
					}
				</div>
				<Button icon='bars'inverted compact secondary size="tiny" color="brown" onClick={() => alert(book.description)}/>
			</div>
		);
	}
}

BookInfo.propTypes = {
	book: PropTypes.object.isRequired
};

export { BookInfo };
