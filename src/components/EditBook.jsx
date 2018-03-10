import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';

class EditBook extends Component {

	constructor() {
		super()
		this.state = {
			redirect: false
		}
	}

	render() {

		if (this.state.redirect) {
	      return <Redirect to="/viewBooks" />;
	    }

		return (
			<div>
				<Header nav/>
				<div className="wrapper">
			      <h1 id="register-label">Edit Book</h1>
			      <hr />
			      <form id="register" action="" formEncType="multipart/form-data" onSubmit={this.handleSubmit}>
		            <div>
		              <label>title:</label>
		              <input type="text" name="title" placeholder="title" />
		            </div>

		            <div>
		              <label>author:</label>
		              <input type="text" name="author" placeholder="author" />
		            </div>

		            <div>
		              <label>price:</label>
		              <input type="text" name="price" placeholder="price" />
		            </div>

		            <div>
		              <label>publication date:</label>
		              <input type="text" name="publicationDate" placeholder="publication date" />
		            </div>

		            <div>
		              <label>category:</label>
		              <select name="categoryId">
		                {this.state.fetchedCategories}
		              </select>
		            </div>

		            <div>
		              <label>Image:</label>
		              <input type="file" name="imagePath" />
		            </div>

		            <input type="submit" name="category" value="Add" />
		          </form>
			    </div>
				<Footer />
			</div>
		)
    }
}

export default EditBook;