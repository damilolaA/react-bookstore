import { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  /*constructor(props) {
		super(props)
	}*/

  postAdminData() {
    let data = this.props.data();

    console.log(data);
    console.log('i got here');

    if (data) {
      axios({
        method: 'post',
        url: 'https://bookstoreappapi.herokuapp.com/api/v1/admin',
        data: data
      })
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log('request not successful');
    }
  }
}

export default Register;
