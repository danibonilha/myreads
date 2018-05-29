import React  from 'react';
import '../styles/App.css';
import { PropTypes } from 'prop-types';


class SelectShelf extends React.Component {
	static propTypes = {
		shelf: PropTypes.string,
		changeShelf: PropTypes.func.isRequired		
	};
	
	static defaultProps = {
		shelf: 'none'
	};

	constructor(props) {
		super(props);    
		this.handleChange = this.handleChange.bind(this);
	}
	state = {
		currentShelf: this.props.shelf
	}
	handleChange(event) {
		const shelf = event.target.value;
		this.setState({currentShelf: shelf});
		this.props.changeShelf(shelf);
	}

	render() {
		return (
			<select 
				value={this.state.currentShelf} 
				onChange={this.handleChange}
			>
				<option disabled>Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		);
	}
}

export { SelectShelf };
