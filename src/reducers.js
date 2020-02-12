import {CHANGE_SEARCH_FIELD,
		REQUEST_DOGS_PENDING,
		REQUEST_DOGS_SUCCESS,
		REQUEST_DOGS_FAILED} from './constants.js' 

const initialStateSearch = {
	searchField: ''
}

export const searchDogs = (state=initialStateSearch, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, { searchField: action.payload });
		default:
			return state;
	}	
}

const initialStateRequest = {
	isPending: false,
	dogs: [],
	error: ''
}

export const requestDogs = (state=initialStateRequest, action={}) => {
	switch(action.type) {
		case REQUEST_DOGS_PENDING:
			return Object.assign({}, state, { isPending: true})
		case REQUEST_DOGS_SUCCESS:
			return Object.assign({}, state, { isPending: false, dogs: action.payload})
		case REQUEST_DOGS_FAILED:
			return Object.assign({}, state, {isPending: false, error: action.payload})
	default: 
		return state;
	}
}