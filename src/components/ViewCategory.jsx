import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

class ViewCategory extends Component {

	constructor() {
		super()
		this.state = {
			categoryData: {}
		}
	}

	componentDidMount() {
		axios.get('https://bookstoreappapi.herokuapp.com/api/v1/category')
		.then(response => {
			this.setState({categoryData: response});
		})
		.catch(err => {
			console.log(err);
		})
	}

	render() {
		
		return (
			<div>
				<Header nav />
				<div className="wrapper">
					<div id="stream">
						<table id="tab">
							<thead>
								<tr>
									<th>category id</th>
									<th>category name</th>
									<th>edit</th>
									<th>delete</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>the knowledge gap</td>
									<td>maja</td>
									<td><a href="">edit</a></td>
									<td><a href="">delete</a></td>
								</tr>
			          		</tbody>
						</table>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default ViewCategory;