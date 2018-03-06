import React from 'react';

const Form = () => {

	return(
		<div className="wrapper">
			<h1 id="register-label">Register</h1>
			<hr/>
			<form id="register">
				<div>
					<label>first name:</label>
					<input type="text" name="fname" placeholder="first name"/>
				</div>
				<div>
					<label>last name:</label>	
					<input type="text" name="lname" placeholder="last name"/>
				</div>

				<div>
					<label>email:</label>
					<input type="text" name="email" placeholder="email"/>
				</div>
				<div>
					<label>password:</label>
					<input type="password" name="password" placeholder="password"/>
				</div>

				<input type="submit" name="register" value="register"/>
			</form>

			<h4 className="jumpto">Have an account? <a href="">login</a></h4>
		</div>
	);
	
}

export default Form;