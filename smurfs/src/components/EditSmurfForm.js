import React from 'react';

class EditSmurfForm extends React.Component {
	state = {
		smurf: this.props.smurf
	};

	handleChange = (event) => {
		let value = event.target.value;
		if (event.target.name === 'age') {
			value = parseInt(value, 10);
		}
		this.setState({
			smurf: {
				...this.state.smurf,
				[event.target.name]: value
			}
		});
	};

	handleSubmit = (event) => {
		this.props.editSmurf(this.state.smurf);
	};

	render() {
		return (
			<div className="form-container">
				<h2>Edit Smurf</h2>
				<form className="main-form" onSubmit={this.handleSubmit}>
					<input
						onChange={this.handleChange}
						value={this.state.smurf.name}
						placeholder="Name"
						name="name"
						type="text"
					/>
					<input
						onChange={this.handleChange}
						value={this.state.smurf.age}
						placeholder="Age"
						name="age"
						type="number"
					/>
					<input
						onChange={this.handleChange}
						value={this.state.smurf.height}
						placeholder="Height"
						name="height"
						type="text"
					/>
					<button>Edit Smurf</button>
				</form>
			</div>
		);
	}
}

export default EditSmurfForm;
