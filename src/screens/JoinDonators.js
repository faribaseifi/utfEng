import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem'


class JoinDonators extends Component {
render(){
  return (
    <div class="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="#333333" data-color-opacity="0.7" data-img-width="800" data-img-height="505" style={{backgroundImage: "url(&quot;images/listings-parallax.jpg&quot;)", backgroundAttachment: "fixed", backgroundSize: "1199.21px 757px", backgroundPosition: "50% -101.294px" }}  >
    <div class="parallax-overlay" style={{backgroundColor: "rgb(51, 51, 51)", opacity: 0.7}}></div>

      <div id="titlebar">
        <div class="container">
          <div class="row">
            <div class="col-md-12">

              <h2>Listings</h2>
              <span>Grid Layout With Sidebar</span>

              <nav id="breadcrumbs">
                <ul>
                  <NavItem to="/">Homepage</NavItem>
                  <NavItem to="/JoinDonators">become a donator</NavItem>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default JoinDonators;
