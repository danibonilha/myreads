import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const AddBook = (props) => (
	<Link
		to='/search'
		onClick={props.onNavigate}
		className='open-search'
	>Add a book</Link>
);

export { AddBook };

