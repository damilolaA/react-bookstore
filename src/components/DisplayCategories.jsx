import React from 'react';

const DisplayCategories = (props) => {

	let categoryTable;

	if(props.data) {

		props.data.map(category => {

			categoryTable = <tr><td>{category._id}</td><td>{category.categoryName}</td><td><a href="">edit</a></td><td><a href="">delete</a></td></tr>
		})
	}

	return(
		
		<tbody>
			{categoryTable}
		</tbody>
		
	)
}

export default DisplayCategories;