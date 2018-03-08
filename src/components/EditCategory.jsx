import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; 
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

class EditCategory extends Component{

	constructor(props) {
		super(props)
		this.state = {
			categoryName: {},
			redirect: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		this.postEditedCategory();

	}

	postEditedCategory() {
		let editedName = this.state,
	    id = this.props.match.params.id;

		id = id.charAt(0);

		if(editedName.hasOwnProperty('categoryName')) {
			axios({
				method: "put",
				url: `https://bookstoreappapi.herokuapp.com/api/v1/category/${id}`,
				data: editedName
			})
			.then(response => {
				console.log(response);
				this.setState({redirect: true});
			})
			.catch(err => {
				console.log(err);
			})
		} else {
			console.log('could not edit category');
		}
	}

	handleChange(e) {

		let data = this.state,
			inputName = e.target.name;

		 console.log(data);
		data[inputName] = e.target.value;
		console.log(data);
		this.setState(data);
	}

	render() {
		/*let categoryName = this.props.match.params.id;

		categoryName = categoryName.substring(2);*/

		if(this.state.redirect) {
			return <Redirect to='/categories'/> 
		}

		return (
			<div>
				<Header nav />
				<div className="wrapper">
		          <h1 id="register-label">Edit Category</h1>
		          <hr />
		          <form id="register" onSubmit={this.handleSubmit}>

		            <div>
		              <label>category name:</label>
		              <input onChange={this.handleChange} type="text" name="categoryName"  />
		            </div>

		            <input type="submit" name="category" value="Edit" />
		          </form>
				</div>
				<Footer />
			</div>
		);
	}
}

export default EditCategory;