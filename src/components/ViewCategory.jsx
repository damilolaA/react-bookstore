import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import DisplayCategories from './DisplayCategories';

class ViewCategory extends Component {
  constructor() {
    super();
    this.state = {
      categoryData: {}
    };

    this.removeCategory = this.removeCategory.bind(this);
  }

  componentDidMount() {
    axios
      .get('https://bookstoreappapi.herokuapp.com/api/v1/category')
      .then(response => {
        this.setState({ categoryData: { data: response.data } });
      })
      .catch(err => {
        console.log(err);
      });
  }

  removeCategory(name, i) {
    let category = this.state.categoryData.data;

    category.splice(i, 1);

    this.setState({
      category
    });
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

              <DisplayCategories removeCategory={this.removeCategory} data={this.state.categoryData.data} />
            </table>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ViewCategory;
