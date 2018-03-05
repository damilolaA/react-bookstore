import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {

	constructor() {
		super()
		this.state = {
			errorMessages: {}
		}

		this.handleForm = this.handleForm.bind(this);
	}

	inputValues() {
		let adminDetails = {
			firstName: this.refs.firstName.value,
			lastName: this.refs.lastName.value,
			email: this.refs.email.value,
			hash: this.refs.password.value
		};

		return adminDetails;
	}

	handleForm(e) {
		e.preventDefault();

		this.validateInput();

		this.postAdminData();
	}

	validateInput() {
		var dummy = {errorMessages: {}};
		let data = this.refs;

		for(var ref in data) {
			if(data[ref].value === "") {
				dummy.errorMessages[ref] = "please enter your " + ref;
			}
		}

		this.setState(dummy);
	}

	postAdminData() {
		let data = this.inputValues(),
			err = this.state.errorMessages;

		console.log(err);
		console.log(data);

		console.log(Object.keys(err).length);

		if(Object.keys(err).length <= 0) {
			axios({
				method: 'post',
				url: 'https://bookstoreappapi.herokuapp.com/api/v1/admin',
				data: data
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
							<p className="err">{this.state.errorMessages.firstName ? this.state.errorMessages.firstName : ""}</p>
							<input type="text" ref="firstName" placeholder="first name"/>
						</div>

						<div>
							<p className="err">{this.state.errorMessages.lastName ? this.state.errorMessages.lastName : ""}</p>
							<label>last name:</label>	
							<input type="text" ref="lastName" placeholder="last name"/>
						</div>

						<div>
							<p className="err">{this.state.errorMessages.email ? this.state.errorMessages.email : ""}</p>
							<label>email:</label>
							<input type="text" ref="email" placeholder="email"/>
						</div>

						<div>
							<p className="err">{this.state.errorMessages.password ? this.state.errorMessages.password : ""}</p>
							<label>password:</label>
							<input type="password" ref="password" placeholder="password"/>
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