import React, { Component } from 'react';

import SmurfList from './SmurfList';
import AddSmurfForm from './AddSmurfForm';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="container">
				<h1>Smurfs Redux</h1>
				<SmurfList />
				<AddSmurfForm />
			</div>
		);
	}
}

export default App;
