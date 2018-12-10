
import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem'


class Branches extends Component {
render(){
  return (

    <Fragment>

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
                  <NavItem to="/Branches">Branches</NavItem>
    						</ul>
    					</nav>

    				</div>
    			</div>
    		</div>
    	</div>
    </div>


        <div className="notification notice large margin-bottom-55">
        			<h4>Don't Have an Account?</h4>
        			<p>If you don't have an account you can create one by entering your email address in contact details section. A password will be automatically emailed to you.</p>
        		</div>
    </Fragment>



  )
}
}

export default Branches;
