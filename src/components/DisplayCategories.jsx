import React from 'react';

const DisplayCategories = (props) => {

	let categoryTable = [];

	if(props.data) {

		props.data.forEach(category => {

			categoryTable.push(<tr><td>{category._id}</td><td>{category.categoryName}</td><td><a href="">edit</a></td><td><a href="">delete</a></td></tr>)

			//return categoryTable;
		})
	}

	return(
		
		<tbody>
			{categoryTable}
		</tbody>
		
	)
}

export default DisplayCategories;