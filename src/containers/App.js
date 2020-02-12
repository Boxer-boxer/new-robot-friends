import React from 'react'
import {connect} from 'react-redux';
import CardArray from '../components/CardList'
import Cards from '../components/Card'
import SearchBox from '../components/SearchBox'
import {robots} from '../robots'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';
import '../index.css';

import {setSearchField, getDogsRequest} from '../actions'


const mapStateToProps = state => {
	return {
		searchField: state.searchDogs.searchField, //state.searchDogs.searchField
		dogs: state.requestDogs.dogs,
		isPending: state.requestDogs.isPending,
		error: state.requestDogs.error
	}
} 

// dispatch = triggers the action (dispatches an action into a reducer)
const mapDispatchToProps = (dispatch)  => {
	return {
		//Here it is...dispaching an action! Which is setSearchField
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestDogs: () => dispatch(getDogsRequest())
	} 	
}

class App extends React.Component {

/*	//lifecycle hooks -> automatically triggered when APP is loaded.
	// Components : Mounting, Update and Unmounting	


	constructor() {
		super()
		// Smart components (Has State) usually come in Class format
		this.state = {
			cards: [],
			date: new Date()
		}
	}*/

	componentDidMount() {
/*		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			return response.json();
		})
		.then(dogs => {	
			this.setState({cards: dogs});
		})*/
		this.props.onRequestDogs();
	}


	render() {

		const { searchField, onSearchChange, dogs, isPending, error } = this.props;
		const filteredDogs = dogs.filter(dog => {
			return dog.name.toLowerCase().includes(searchField.toLowerCase())
			})

		if(isPending) {
			return <h1> Loading </h1>
		} else {
			return (
			<div>
				<h1> These are cards with dogs. </h1>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardArray cards={filteredDogs} />
					</ErrorBoundary>
					
				</Scroll>

			</div>
		)}
	}


} 

export default connect(mapStateToProps, mapDispatchToProps)(App);