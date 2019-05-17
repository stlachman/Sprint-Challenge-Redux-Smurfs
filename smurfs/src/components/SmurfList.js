import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

class SmurfList extends React.Component {
	componentDidMount() {
		this.props.getSmurfs();
	}
	render() {
		console.log(this.props);
		if (this.props.fetchingSmurfs) {
			return (
				<div className="container">
					<h1>Loading</h1>
				</div>
			);
		}

		return (
			<div>
				{this.props.smurfs.map((smurf) => {
					return (
						<div className="tile" key={smurf.id}>
							<h3>Name: {smurf.name}</h3>
							<p>Age: {smurf.age}</p>
							<p>Height: {smurf.height}</p>
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
		fetchingSmurfs: state.fetchingSmurfs
	};
};

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
