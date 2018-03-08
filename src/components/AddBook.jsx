import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
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
              <input onChange={this.handleChange} type="text" name="title" placeholder="title" />
            </div>

            <div>
              <label>author:</label>
              <input onChange={this.handleChange} type="text" name="author" placeholder="author" />
            </div>

            <div>
              <label>price:</label>
              <input onChange={this.handleChange} type="text" name="categoryName" placeholder="price" />
            </div>

            <div>
              <label>publication date:</label>
              <input onChange={this.handleChange} type="text" name="publicationDate" placeholder="publication date" />
            </div>

            <div>
              <label>category:</label>
              <input onChange={this.handleChange} type="text" name="categoryId" placeholder="publication date" />
            </div>

            <div>
              <label>Image:</label>
              <button>Book Image</button>
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
