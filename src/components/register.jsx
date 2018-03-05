import React from 'react';

const Register = () => {

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
				<form id="register"  action ="register.php" method ="POST">
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
		 
					<div>
						<label>confirm password:</label>	
						<input type="password" name="pword" placeholder="password"/>
					</div>

					<input type="submit" name="register" value="register"/>
				</form>

				<h4 className="jumpto">Have an account? <a href="login.php">login</a></h4>
			</div>
		</div>
	)
}

export default Register;