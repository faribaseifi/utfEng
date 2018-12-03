import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './screens/Homepage';
import BlogPost from './screens/BlogPost';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import ScrollToTop from './components/ScrollToTop';
import withScripts from './utils/withScripts';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Header />
          <Switch>
            <Route path="/" exact component={withScripts(Homepage)} />
            <Route path="/blog/:id" component={withScripts(BlogPost)} />
            <Route path="/login" component={withScripts(Login)} />
            <Route path="/profile" component={Profile} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
