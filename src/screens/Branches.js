
import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem'


class Branches extends Component {
render(){
  return (

    <Fragment>

    <div className="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="#333333" data-color-opacity="0.7" data-img-width="800" data-img-height="505" style={{backgroundImage: "url(&quot;images/listings-parallax.jpg&quot;)", backgroundAttachment: "fixed", backgroundSize: "1199.21px 757px", backgroundPosition: "50% -101.294px" }}  >
    <div className="parallax-overlay" style={{backgroundColor: "rgb(51, 51, 51)", opacity: 0.7}}></div>

    	<div id="titlebar">
    		<div className="container">
    			<div className="row">
    				<div className="col-md-12">

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


<div className="container">
  <div className="row">


            <div className="notification notice large margin-bottom-55">
            			<h4>Don't Have an Account?</h4>
            			<p>If you don't have an account you can create one by entering your email address in contact details section. A password will be automatically emailed to you.</p>
            		</div>


                <div className="col-md-12">

                			<table className="basic-table margin-bottom-50">

                				<tbody><tr>
                					<th>Column 1</th>
                					<th>Column 2</th>
                          <th>Column 3</th>
                          <th>Column 4</th>
                				</tr>

                				<tr>
                					<td>Item</td>
                					<td>Description</td>
                          <td>third thing</td>
                          <td>forth thing</td>
                				</tr>

                        <tr>
                          <td>Item</td>
                          <td>Description</td>
                          <td>third thing</td>
                          <td>forth thing</td>
                        </tr>

                        <tr>
                          <td>Item</td>
                          <td>Description</td>
                          <td>third thing</td>
                          <td>forth thing</td>
                        </tr>

                        <tr>
                          <td>Item</td>
                          <td>Description</td>
                          <td>third thing</td>
                          <td>forth thing</td>
                        </tr>

                        <tr>
                          <td>Item</td>
                          <td>Description</td>
                          <td>third thing</td>
                          <td>forth thing</td>
                        </tr>

                        <tr>
                          <td>Item</td>
                          <td>Description</td>
                          <td>third thing</td>
                          <td>forth thing</td>
                        </tr>

                        <tr>
                          <td>Item</td>
                          <td>Description</td>
                          <td>third thing</td>
                          <td>forth thing</td>
                        </tr>

                        <tr>
                          <td>Item</td>
                          <td>Description</td>
                          <td>third thing</td>
                          <td>forth thing</td>
                        </tr>

                        <tr>
                          <td>Item</td>
                          <td>Description</td>
                          <td>third thing</td>
                          <td>forth thing</td>
                        </tr>

                        <tr>
                          <td>Item</td>
                          <td>Description</td>
                          <td>third thing</td>
                          <td>forth thing</td>
                        </tr>


                        <tr className="borderSpacing: em;">
                          <td>Item</td>
                          <td>Description</td>
                          <td>third thing</td>
                          <td>forth thing</td>
                        </tr>





                			</tbody></table>
                		</div>


  </div>
</div>

    </Fragment>



  )
}
}

export default Branches;
