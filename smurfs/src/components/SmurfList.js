import React from 'react';
import { connect } from 'react-redux';
import EditSmurfForm from './EditSmurfForm';
import { getSmurfs, deleteSmurf, editSmurf } from '../actions';

class SmurfList extends React.Component {
	constructor() {
		super();
		this.state = {
			editingSmurfId: null
		};
	}

	componentDidMount() {
		this.props.getSmurfs();
	}

	editSmurf = (event) => {
		this.props.editSmurf(event, this.state.smurf);
	};

	delete = (id) => {
		this.props.deleteSmurf(id);
	};

	render() {
		if (this.props.fetchingSmurfs) {
			return <h1>Loading</h1>;
		}

		return (
			<div>
				{this.props.smurfs.map((smurf) => {
					if (this.state.editingSmurfId === smurf.id) {
						return (
							<div className="tile" key={smurf.id}>
								<EditSmurfForm
									smurf={smurf}
									editSmurf={this.editSmurf}
									editingSmurf={this.props.editingSmurf}
								/>
							</div>
						);
					}
					return (
						<div className="tile" key={smurf.id}>
							<h3>Name: {smurf.name}</h3>
							<p>Age: {smurf.age}</p>
							<p>Height: {smurf.height}</p>
							<button onClick={() => this.setState({ editingSmurfId: smurf.id })}>Edit Smurf</button>
							<button onClick={() => this.delete(smurf.id)}>Delete Smurf</button>
						</div>
					);
				})}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
		fetchingSmurfs: state.fetchingSmurfs,
		deletingSmurf: state.deletingSmurf,
		updatingSmurf: state.updatingSmurf
	};
};

export default connect(mapStateToProps, { getSmurfs, deleteSmurf, editSmurf })(SmurfList);
