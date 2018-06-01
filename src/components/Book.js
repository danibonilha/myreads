import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { SelectShelf } from './';
import '../styles/App.css';
import { Dimmer, Image } from 'semantic-ui-react';


class Book extends Component {
	state = {}
	
	changeShelf = (shelf) => {
		this.props.onUpdateShelf(this.props.book, shelf);
	};
	handleShow = () => this.setState({ active: true })
	handleHide = () => this.setState({ active: false })

	render() {
		const { book } = this.props;
		const { active } = this.state;
		const shelfSelector = (
			<SelectShelf
				shelf={book.shelf}
				changeShelf={this.changeShelf}
			/>);
		const coverStyle = {
			width: 128,
			height: 183,
			backgroundImage: `url(${book.imageLinks ?
				book.imageLinks.thumbnail : require('../icons/no-cover.svg')})`,

		};
		return (
			<div className="book">
				<div className="book-top">
					<Dimmer.Dimmable blurring
						as={Image}
						dimmed={active}
						dimmer={{ active, content: shelfSelector }}
						onMouseEnter={this.handleShow}
						onMouseLeave={this.handleHide}
						style={coverStyle}
					/>
				</div>
				<div className="book-info-container">
					{!!book.title &&
						<div className="book-title">{book.title}</div>
					}
					{!!book.authors &&
						<div className="book-authors">{book.authors[0]}</div>
					}
				</div>
			</div>
		);
	}
}

Book.propTypes = {
	book: PropTypes.object.isRequired,
	onUpdateShelf: PropTypes.func.isRequired
};

export { Book };
