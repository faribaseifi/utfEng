import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../utils/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    {context => (
      <Route
        {...rest}
        render={props =>
          context.userIsLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )}
  </AuthContext.Consumer>
);

export default PrivateRoute;
