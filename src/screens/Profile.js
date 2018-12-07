import React, { Component } from 'react';
import AuthContext from '../utils/authContext';
import Axios from 'axios';

export class Profile extends Component {
  static contextType = AuthContext;
  state = {
    data: null
  };
  componentDidMount() {
    const token = this.context.getToken();
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
