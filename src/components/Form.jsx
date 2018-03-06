import React, { Component } from 'react';

class Form extends Component{

	constructor() {
		super()
		this.state = {
			errorMessages:{},
			"fname": "",
			"lname": "",
			"email": "",
			"password": ""
		}

		this.submitForm = this.submitForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	submitForm(e) {
		e.preventDefault();

		this.validateForm();
	}

	handleChange(e) {
		let dummy = {},
		input = e.target.name;

		dummy[input] = e.target.value;

		this.setState(dummy);
	}

	validateForm() {
		let data = this.state,
			errors = {errorMessages:{}};

		for(let value in data) {
			if(data[value] === "") {
				errors.errorMessages[value] = "Please enter your " + value;
				this.setState(errors);
				return;
			}
		}
	}

	render() {
		console.log(this.state);
		return(
			<div className="wrapper">
				<h1 id="register-label">Register</h1>
				<hr/>
				<form id="register" onSubmit={this.submitForm}>
					<div>
						<p className='err'>{this.state.errorMessages.fname ? this.state.errorMessages.fname : ""}</p>
						<label>first name:</label>
						<input onChange={this.handleChange} type="text" name="fname" placeholder="first name"/>
					</div>

					<div>
						<p className='err'>{this.state.errorMessages.lname ? this.state.errorMessages.lname : ""}</p>
						<label>last name:</label>	
						<input onChange={this.handleChange} type="text" name="lname" placeholder="last name"/>
					</div>

					<div>
						<p className='err'>{this.state.errorMessages.email ? this.state.errorMessages.email : ""}</p>
						<label>email:</label>
						<input onChange={this.handleChange} type="text" name="email" placeholder="email"/>
					</div>

					<div>
						<p className='err'>{this.state.errorMessages.password ? this.state.errorMessages.password : ""}</p>
						<label>password:</label>
						<input onChange={this.handleChange} type="password" name="password" placeholder="password"/>
					</div>

					<input type="submit" name="register" value="register"/>
				</form>

				<h4 className="jumpto">Have an account? <a href="">login</a></h4>
			</div>
		);
	}
}

export default Form;