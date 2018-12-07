import React, { Component } from 'react';
import AuthContext from '../utils/authContext';

export class AuthProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.userIsLoggedIn()
    };
  }

  userIsLoggedIn = () => !!localStorage.getItem('token');
  setToken = token => {
    localStorage.setItem('token', token);
    this.setState({ isLoggedIn: true });
  };
  getToken = () => localStorage.getItem('token');
  removeToken = () => {
    localStorage.removeItem('token');
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          userIsLoggedIn: this.state.isLoggedIn,
          setToken: this.setToken,
          getToken: this.getToken,
          removeToken: this.removeToken
        }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
