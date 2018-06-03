import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import '../styles/App.css';
import { Button } from 'semantic-ui-react';
import { DescriptionModal } from './';


class BookInfo extends Component {
	static propTypes = {
		book: PropTypes.object.isRequired
	};

	state = { openModal: false }

	handleOpenModal = () => this.setState({ openModal: true })
	handleCloseModal = () => this.setState({ openModal: false })

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
				<Button icon='bars' inverted compact 
					secondary size="tiny" color="brown" 
					onClick={this.handleOpenModal} 
				/>
				<DescriptionModal book={book} isOpen={this.state.openModal}>
					<Button onClick={this.handleCloseModal}>Close</Button>
				</DescriptionModal>
			</div>
		);
	}
}



export { BookInfo };
