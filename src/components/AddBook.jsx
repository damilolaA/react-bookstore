import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedCategories: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let categories = [];

    axios
      .get('https://bookstoreappapi.herokuapp.com/api/v1/category')
      .then(response => {
        if (response) {
          let data = response.data;
          data.forEach((category, i) => {
            categories.push(
              <option key={i} value={category._id}>
                {category.categoryName}
              </option>
            );
          });
        }

        this.setState({ fetchedCategories: categories });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.postData(e.target);
  }

  postData(form) {
    let url = 'https://bookstoreappapi.herokuapp.com/api/v1/books',
      config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      },
      formData = new FormData(form);

    axios
      .post(url, formData, config)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Header nav />
        <div className="wrapper">
          <h1 id="register-label">Add Book</h1>
          <hr />
          <form id="register" action="" formEncType="multipart/form-data" onSubmit={this.handleSubmit}>
            <div>
              <label>title:</label>
              <input type="text" name="title" placeholder="title" />
            </div>

            <div>
              <label>author:</label>
              <input type="text" name="author" placeholder="author" />
            </div>

            <div>
              <label>price:</label>
              <input type="text" name="price" placeholder="price" />
            </div>

            <div>
              <label>publication date:</label>
              <input type="text" name="publicationDate" placeholder="publication date" />
            </div>

            <div>
              <label>category:</label>
              <select name="categoryId">
                {this.state.fetchedCategories}
              </select>
            </div>

            <div>
              <label>Image:</label>
              <input type="file" name="imagePath" />
            </div>

            <input type="submit" name="category" value="Add" />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AddBook;
