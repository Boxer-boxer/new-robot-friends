import React from 'react';


//Children =/= props and state 

const Scroll = (props) => {

	return (
		<div style={{overflowY:'scroll', border:'1px solid green', height: '900px'}}>
		{props.children}
		</div>
	);
}

export default Scroll