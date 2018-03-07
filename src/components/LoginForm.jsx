import React, { Component } from 'react';

class LoginForm extends Component{

	constructor() {
		super()
		this.state = {
			loginDetails: {
				email: "",
				password: ""
			}
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		let loginData = this.state.loginDetails,
			inputName = e.target.name;

		loginData[inputName] = e.target.value;

		this.setState(loginData);
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	validateLoginDetails() {

	}

	render() {
		console.log(this.state);
		return (
			<div className="wrapper">
				<h1 id="register-label">Admin Login</h1>
				<hr/>
				<form id="register" onSubmit={this.handleSubmit}>
					<div>
						<label>email:</label>
						<input onChange={this.handleChange} type="text" name="email" placeholder="email"/>
					</div>

					<div>
						<label>password:</label>
						<input onChange={this.handleChange} type="password" name="password" placeholder="password"/>
					</div>

					<input type="submit" name="register" value="login"/>
				</form>

				<h4 className="jumpto">Don't have an account? <a href="/register">register</a></h4>
			</div>
		);
	}
}

export default LoginForm;