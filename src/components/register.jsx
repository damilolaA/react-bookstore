import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {

	constructor() {
		super()
		this.state = {
			adminDetails: {}
		}

		this.handleForm = this.handleForm.bind(this)
	}

	handleForm(e) {
		e.preventDefault();

		this.setState({adminDetails: {
			firstName: this.refs.fname.value,
			lastName: this.refs.fname.value,
			email: this.refs.email.value,
			hash: this.refs.password.value
		}})

		this.postAdminData();
	}

	postAdminData() {
		if(this.state.adminDetails.hasOwnProperty('firstName')) {
			axios({
				method: 'post',
				url: 'https://bookstoreappapi.herokuapp.com/api/v1/admin',
				data: this.state.adminDetails
			})
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			})
		} else {
			console.log('request not successful');
		}
	}

	render() {
		return(	
			<div>
				<section>
					<div className="mast">
						<h1>T<span>SSB</span></h1>
					</div>
				</section>

				<div className="wrapper">
					<h1 id="register-label">Register</h1>
					<hr/>
					<form id="register" onSubmit={this.handleForm}>
						<div>
							<label>first name:</label>
							<input type="text" ref="fname" placeholder="first name"/>
						</div>
						<div>
							<label>last name:</label>	
							<input type="text" ref="lname" placeholder="last name"/>
						</div>

						<div>
							<label>email:</label>
							<input type="text" ref="email" placeholder="email"/>
						</div>
						<div>
							<label>password:</label>
							<input type="password" ref="password" placeholder="password"/>
						</div>
			 
						<div>
							<label>confirm password:</label>	
							<input type="password" ref="pword" placeholder="password"/>
						</div>

						<input type="submit" name="register" value="register"/>
					</form>

					<h4 className="jumpto">Have an account? <a href="">login</a></h4>
				</div>
			</div>
		)
	}
}

export default Register;