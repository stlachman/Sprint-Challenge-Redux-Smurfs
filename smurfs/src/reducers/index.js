import {
	FETCH_SMURFS_START,
	FETCH_SMURFS_SUCCESS,
	FETCH_SMURFS_FAILURE,
	ADD_SMURF_START,
	ADD_SMURF_SUCCESS,
	ADD_SMURF_FAILURE,
	DELETE_SMURF_START,
	DELETE_SMURF_SUCCESS,
	DELETE_SMURF_FAILURE
} from '../actions';

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
		case ADD_SMURF_START:
			return {
				...state,
				addingSmurf: true
			};
		case ADD_SMURF_SUCCESS:
			return {
				...state,
				smurfs: action.payload,
				addingSmurf: false
			};
		case ADD_SMURF_FAILURE:
			return {
				...state,
				addingSmurf: false,
				error: action.payload
			};
		case DELETE_SMURF_START:
			return {
				...state,
				deletingSmurf: true
			};
		case DELETE_SMURF_SUCCESS:
			return {
				...state,
				smurfs: action.payload,
				deletingSmurf: false
			};
		case DELETE_SMURF_FAILURE:
			return {
				...state,
				deletingSmurf: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
