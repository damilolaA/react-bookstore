import React from 'react';
import Header from './Header';
import Footer from './Footer';

const EditCategory = (props) => {

	let categoryName = props.match.params.id;

	categoryName = categoryName.substring(2);

	return (
		<div>
			<Header nav />
			<div className="wrapper">
	          <h1 id="register-label">Edit Category</h1>
	          <hr />
	          <form id="register">

	            <div>
	              <label>category name:</label>
	              <input type="text" name="categoryName" value={categoryName} />
	            </div>

	            <input type="submit" name="category" value="Edit" />
	          </form>
			</div>
			<Footer />
		</div>
	);
}

export default EditCategory;