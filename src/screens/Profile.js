import React, { Component } from 'react';
import { getToken } from '../utils/authManager';
import Axios from 'axios';

export class Profile extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    const token = getToken();
    console.log(token);
    Axios.get('https://www.kanoonbook.ir/index.php/app/test', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.data)
      .then(data => this.setState({ data }))
      .catch(err => console.error('Err', err));
  }
  render() {
    return (
      <div>
        <p>Profile page {this.state.data}</p>
      </div>
    );
  }
}

export default Profile;
