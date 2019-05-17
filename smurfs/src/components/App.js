import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';
import AddSmurfForm from './AddSmurfForm';
import './App.css';

class App extends Component {
	componentDidMount() {
		this.props.getSmurfs();
	}

	render() {
		if (this.props.fetchingSmurfs) {
			return (
				<div className="container">
					<h1>Loading</h1>
				</div>
			);
		}
		return (
			<div className="container">
				<h1>Smurfs Redux</h1>
				{this.props.smurfs.map((smurf) => (
					<div className="tile" key={smurf.id}>
						<h3>Name: {smurf.name}</h3>
						<p>Age: {smurf.age}</p>
						<p>Height: {smurf.height}</p>
					</div>
				))}
				<AddSmurfForm />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
		fetchingSmurfs: state.fetchingSmurfs
	};
};

export default connect(mapStateToProps, { getSmurfs })(App);
