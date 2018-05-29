import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const AddBook = () => (
	<Link
		to='/search'
		className='open-search'
	>Add a book</Link>
);

export { AddBook };

