import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs, deleteSmurf } from '../actions';

class SmurfList extends React.Component {
	componentDidMount() {
		this.props.getSmurfs();
	}

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
					return (
						<div className="tile" key={smurf.id}>
							<h3>Name: {smurf.name}</h3>
							<p>Age: {smurf.age}</p>
							<p>Height: {smurf.height}</p>
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
		deletingSmurf: state.deletingSmurf
	};
};

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(SmurfList);
