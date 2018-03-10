import React, { Component } from 'react';
import axios from 'axios';
import DisplayBooks from './DisplayBooks';
import Header from './Header';
import Footer from './Footer';

class ViewBooks extends Component {

	constructor() {
		super()
		this.state = {
			bookData: {}
		}

		this.removeBook = this.removeBook.bind(this);
	}

	componentDidMount() {
	    axios
	      .get('https://bookstoreappapi.herokuapp.com/api/v1/books')
	      .then(response => {
	        this.setState({ bookData: { data: response.data } });
	      })
	      .catch(err => {
	        console.log(err);
	      });
	}

	removeBook(name, i) {
	    let book = this.state.bookData.data;

	    book.splice(i, 1);

	    this.setState({
	      book
	    });
	}

	render() {
		return (
			<div>
				<Header nav/>
				<div className="wrapper">
		          <div id="stream">
		            <table id="tab">
		              <thead>
		                <tr>
		                  	<th>title</th>
							<th>author</th>
							<th>price</th>
							<th>category</th>
							<th>publication date</th>
							<th>image</th>
							<th>edit</th>
							<th>delete</th>
		                </tr>
		              </thead>
		              <DisplayBooks removeBook={this.removeBook} data={this.state.bookData.data}/>
		            </table>
		          </div>
		        </div>
				<Footer />
			</div>
		);
	}
}

export default ViewBooks