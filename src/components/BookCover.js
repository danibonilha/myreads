import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import '../styles/App.css';
import { Dimmer, Image } from 'semantic-ui-react';
import { isMobile } from 'react-device-detect';


class BookCover extends Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
		children: PropTypes.element
	};

	state = { active: false }

	handleShow = () => {
		if (!isMobile) {
			this.setState({ active: true });
		}
	}
	handleHide = () => {
		if (!isMobile) {
			this.setState({ active: false });
		}
	}
	handleClick = () => {
		if (isMobile) {
			this.setState({ active: !this.state.active });
		}
	}

	render() {
		const { book, children } = this.props;
		const { active } = this.state;

		const coverStyle = {
			width: 128,
			height: 183,
			backgroundImage: `url(${book.imageLinks ?
				book.imageLinks.thumbnail : require('../assets/no-cover.png')})`,
		};
		return (
			<div className="book-top">
				<Dimmer.Dimmable blurring
					as={Image}
					dimmed={active}
					dimmer={{ active, content: children }}
					onClick={this.handleClick}
					onMouseEnter={this.handleShow}
					onMouseLeave={this.handleHide}
					style={coverStyle}
				/>
			</div>
		);
	}
}

export { BookCover };
