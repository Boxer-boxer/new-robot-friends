import React from 'react';
import Card from './Card';


const cardArray = ({cards}) => {

	return(
		cards.map((dogs, i) => {
			return(
				<Card
				key = {[i]}
				name = {cards[i].name}
				email = {cards[i].email}
				/>
			)}
		)
	)} 

export default cardArray