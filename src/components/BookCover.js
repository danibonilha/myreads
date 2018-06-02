import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import '../styles/App.css';
import { Dimmer, Image } from 'semantic-ui-react';


class BookCover extends Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
		children: PropTypes.element
	};

	state = {}

	handleShow = () => this.setState({ active: true })
	handleHide = () => this.setState({ active: false })

	render() {
		const { book, children } = this.props;
		const { active } = this.state;

		const coverStyle = {
			width: 128,
			height: 183,
			backgroundImage: `url(${book.imageLinks ?
				book.imageLinks.thumbnail : require('../icons/no-cover.svg')})`,
		};
		return (
			<div className="book-top">
				<Dimmer.Dimmable blurring
					as={Image}
					dimmed={active}
					dimmer={{ active, content: children }}
					onMouseEnter={this.handleShow}
					onMouseLeave={this.handleHide}
					style={coverStyle}
				/>
			</div>
		);
	}
}

export { BookCover };
