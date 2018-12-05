
import React, { Component } from 'react';
import { Route,Link } from 'react-router-dom';

class NavItem extends Component {
render(){
  const {to,active,children} = this.props;
  return (

    <Route
      path={to}
      exact={active}
      children={({ match }) => (
        <li>
          <Link className={match?'current':''} to={to}>{children}</Link>
        </li>
      )}
    />
)
}

}

export default NavItem;
