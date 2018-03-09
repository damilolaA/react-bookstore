import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	file: null,
    	bookData: {},
    	category: "",
    	fetchedCategories:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  componentDidMount() {

  	let categories = [];

  	axios
      .get('https://bookstoreappapi.herokuapp.com/api/v1/category')
      .then(response => {
      	if(response) {
      		let data = response.data
      		data.forEach((category, i)=> {
      			categories.push(<option key={i} value={category._id}>{category.categoryName}</option>)
      		})
      	}
      	console.log(categories);
      	this.setState({fetchedCategories:categories});
      })
      .catch(err => {
        console.log(err);
    });
  }

  handleSubmit(e) {
  	e.preventDefault();

  	this.aggregateData();

  	this.postData();
  }

  postData() {
  	let bookData = this.state.bookData;

  	if (bookData.hasOwnProperty('file')) {
	    axios({
	        method: 'post',
	        url: 'https://bookstoreappapi.herokuapp.com/api/v1/books',
	        data: bookData
	    })
        .then(response => {
          console.log(response);
          
        })
        .catch(err => {
          console.log(err);
        });
	} else {
      console.log('could not add book');
    }
  }

  aggregateData() {
  	let book = this.state.bookData,
  		file = this.state.file,
  		category = this.state.category;

  	book['file'] = file
  	book['category'] = category

  	this.setState(book);
  }

  handleChange(e) {
  	let book = this.state.bookData,
  		inputName = e.target.name;

  	book[inputName] = e.target.value;

  	this.setState(book);
  }

  handleCategory(e) {
  	this.setState({category: e.target.value})
  }

  handleFile(e) {
  	this.setState({file: e.target.files[0]});
  }

  render() {

  	console.log(this.state);
    return (
      <div>
        <Header nav />
        <div className="wrapper">
          <h1 id="register-label">Add Book</h1>
          <hr />
          <form id="register" action="" formEncType="multipart/form-data" onSubmit={this.handleSubmit}>
            <div>
              <label>title:</label>
              <input onChange={this.handleChange} type="text" name="title" placeholder="title" />
            </div>

            <div>
              <label>author:</label>
              <input onChange={this.handleChange} type="text" name="author" placeholder="author" />
            </div>

            <div>
              <label>price:</label>
              <input onChange={this.handleChange} type="text" name="price" placeholder="price" />
            </div>

            <div>
              <label>publication date:</label>
              <input onChange={this.handleChange} type="text" name="publicationDate" placeholder="publication date" />
            </div>

            <div>
              <label>category:</label>
              <select value={this.state.category} onChange={this.handleCategory} name="categoryId">
              	{this.state.fetchedCategories}
              </select>
            </div>

            <div>
              <label>Image:</label>
               <input onChange={this.handleFile} type="file" name="imagePath"/>
            </div>

            <input type="submit" name="category" value="Add" />
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default AddBook;
