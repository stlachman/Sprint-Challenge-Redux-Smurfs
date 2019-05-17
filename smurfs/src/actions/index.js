import axios from 'axios';
// Action Types
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () => (dispatch) => {
	dispatch({ type: FETCH_SMURFS_START });

	return axios
		.get(`http://localhost:3333/smurfs`)
		.then((res) => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: FETCH_SMURFS_FAILURE, payload: err }));
};

export const addSmurf = (smurf) => (dispatch) => {
	dispatch({ type: ADD_SMURF_START });

	return axios
		.post(`http://localhost:3333/smurfs`, smurf)
		.then((res) => dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: ADD_SMURF_FAILURE, payload: err }));
};
