import React from 'react';
import { Link } from 'react-router-dom';

const DisplayCategories = (props) => {

	let categoryTable = [];

	if(props.data) {

		props.data.forEach(category => {

			categoryTable.push(<tr><td>{category._id}</td><td>{category.categoryName}</td><td><Link to={`/editCategory/${category._id}&${category.categoryName}`}>edit</Link></td><td><Link to={`/deleteCategory/${category._id}`}>delete</Link></td></tr>)

		})
	}

	return(
		
		<tbody>
			{categoryTable}
		</tbody>
		
	)
}

export default DisplayCategories;