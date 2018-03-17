import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LoadingGif from './LoadingGif';
import IsLoggedIn from './IsLoggedIn';

class AdminDashboard extends Component {
  constructor() {
    super();
    this.state = {
      categoryData: {},
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let data = this.state.categoryData,
      inputName = e.target.name;

    data[inputName] = e.target.value;

    this.setState(data);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({loading: true});

    this.postCategory();
  }

  postCategory() {
    let categoryInfo = this.state.categoryData;

    console.log(categoryInfo);
    if (categoryInfo.hasOwnProperty('categoryName')) {
      axios({
        method: 'post',
        url: 'https://bookstoreappapi.herokuapp.com/api/v1/category',
        data: categoryInfo
      })
        .then(response => {
          console.log(response);
          if (response) {
            this.setState({ redirect: true });
            this.setState({loading: false});
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log('could not add category');
    }
  }

  render() {

    let token = localStorage.getItem('adminToken');

    if(!token) {
      return <IsLoggedIn/>;
    }

    if (this.state.redirect) {
      return <Redirect to="/categories" />;
    }

    return (
      <div>
        <Header nav />
        <div className="wrapper">
          <h1 id="register-label">Add Category</h1>
          <hr />
          <form id="register" onSubmit={this.handleSubmit}>
            <div>
              <label>category name:</label>
              <input onChange={this.handleChange} type="text" name="categoryName" placeholder="category name" />
            </div>

            <input type="submit" name="category" value="Add" />
            {this.state.loading ? <LoadingGif/> : null}
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AdminDashboard;
