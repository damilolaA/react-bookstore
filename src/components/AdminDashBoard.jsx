import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

class AdminDashboard extends Component {

	constructor() {
		super()
		this.state = {
			categoryData: {}
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		let data = this.state.categoryData,
			inputName = e.target.name;

		data[inputName] = e.target.value;

		this.setState(data);
	}

	handleSubmit(e) {
		e.preventDefault();

		this.postCategory();

	}

	postCategory() {
		let categoryInfo = this.state.categoryData;

		console.log(categoryInfo);
		if(categoryInfo.hasOwnProperty('categoryName')) {
			axios({
				method: "post",
				url: 'https://bookstoreappapi.herokuapp.com/api/v1/category',
				data: categoryInfo
			})
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			})
		} else {
			console.log('could not add category');
		}
	}

	render() {
		
		return(
			<div>
				<Header nav />
				<div className="wrapper">
		          <h1 id="register-label">Add Category</h1>
		          <hr />
		          <form id="register" onSubmit={this.handleSubmit}>

		            <div>
		              <label>category name:</label>
		              <input onChange={this.handleChange} type="text" name="categoryName" placeholder="category name" />
		            </div>

		            <input type="submit" name="category" value="Add" />
		          </form>
				</div>
				<Footer />
			</div>
		)
	}
}

export default AdminDashboard;