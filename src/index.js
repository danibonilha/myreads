import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';

ReactDOM.render(
	<BrowserRouter basename='/myreads'>
		<App />
	</BrowserRouter>, 
	document.getElementById('root')
);
