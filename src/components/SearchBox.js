import React from 'react'

const searchBox = ({searchfield, searchChange}) => {
	return (
			<div className='center'> 
				<input
					className="pa2 w5 ml3 fc"
					type="search"
					placeholder = "look out, the dogs are here!" 
					onChange = {searchChange} 
				/>
			</div>
		)
}

export default searchBox
