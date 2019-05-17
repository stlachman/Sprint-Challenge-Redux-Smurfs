import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE } from '../actions';

const initialState = {
	smurfs: [],
	fetchingSmurfs: false,
	addingSmurf: false,
	updatingSmurf: false,
	deletingSmurf: false,
	error: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SMURFS_START:
			return {
				...state,
				fetchingSmurfs: true
			};
		case FETCH_SMURFS_SUCCESS:
			return {
				...state,
				fetchingSmurfs: false,
				smurfs: action.payload
			};
		case FETCH_SMURFS_FAILURE:
			return {
				...state,
				fetchingSmurfs: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
