import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddSmurfForm extends React.Component {
	constructor() {
		super();

		this.state = {
			name: '',
			age: '',
			height: ''
		};
	}

	handleChange = (event) => {
		let value = event.target.value;
		if (event.target.name === 'age') {
			value = parseInt(10, value);
		}
		this.setState({
			...this.state,
			[event.target.name]: value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addSmurf(this.state);
	};

	render() {
		return (
			<div>
				<h2>Add a smurf</h2>
				<form onSubmit={this.handleSubmit}>
					<input
						onChange={this.handleChange}
						value={this.state.name}
						placeholder="Name"
						name="name"
						type="text"
					/>
					<input
						onChange={this.handleChange}
						value={this.state.age}
						placeholder="Age"
						name="age"
						type="number"
					/>
					<input
						onChange={this.handleChange}
						value={this.state.height}
						placeholder="Height"
						name="height"
						type="text"
					/>
					<button>Add Smurf</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		addingSmurf: state.addingSmurf
	};
};

export default connect(mapStateToProps, { addSmurf })(AddSmurfForm);
