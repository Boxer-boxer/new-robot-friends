import React from 'react';

function Card({id, name, email}) {
	return(
		<div className="tc grow ma5">
			<img src="https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940?50x50" /> 
			<h1> {name} </h1>
			<p> {email} </p>
		</div>

	)
}

export default Card