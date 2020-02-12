import {CHANGE_SEARCH_FIELD,
		REQUEST_DOGS_PENDING,
		REQUEST_DOGS_SUCCESS,
		REQUEST_DOGS_FAILED} from './constants.js' //fetchs constant so it'll ring an error if it fails

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD, 
	payload: text
})

export const getDogsRequest = () => (dispatch) => {
	dispatch({ type: REQUEST_DOGS_PENDING });
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(data => dispatch({ type: REQUEST_DOGS_SUCCESS, payload: data }))
	.catch(error => dispatch({ type: REQUEST_DOGS_FAILED, payload: error }))
}
