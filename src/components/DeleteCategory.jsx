import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const DeleteCategory = (props) => {

		const deleteCat = (id) => {
			if(id) {
				axios({
					method: "delete",
					url: `https://bookstoreappapi.herokuapp.com/api/v1/category/${id}`,
					data: null
				})
				.then(response => {
					console.log(response);
					if(response) {
						return <Redirect to='/categories'/>
					}
				})
				.catch(err => {
					console.log(err);
				})
			}
		}

		let catId = props.match.params.id;

		catId = catId.charAt(0);
		let data = deleteCat(catId);
		console.log(data);
		
		return (
			<div>
				{data}
			</div>
		)
	
}

export default DeleteCategory;