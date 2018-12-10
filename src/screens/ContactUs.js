import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem';



class ContactUs extends Component {

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
                  <NavItem to="/ContactUs">Contact Us</NavItem>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="contact-map margin-bottom-55">

    	<div className="google-map-container">
    		<div id="propertyMap" data-latitude="40.7427837" data-longitude="-73.11445617675781"></div>
    		<a href="#" id="streetView">Street View</a>
    	</div>

    	<div className="address-box-container">
    		<div className="address-container" data-background-image="images/our-office.jpg">
    			<div className="office-address">
    				<h3>Our Office</h3>
    				<ul>
    					<li>45 Park Avenue, Apt. 303</li>
    					<li>New York, NY 10016</li>
    					<li>Phone (123) 123-456 </li>
    				</ul>
    			</div>
    		</div>
    	</div>

    </div>
    <div className="clearfix"></div>


    <div className="container">

    	<div className="row">

    		<div className="col-md-4">

    			<h4 className="headline margin-bottom-30">Find Us There</h4>

    			<div className="sidebar-textbox">
    				<p>Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.</p>

    				<ul className="contact-details">
    					<li><i className="im im-icon-Phone-2"></i> <strong>Phone:</strong> <span>(123) 123-456 </span></li>
    					<li><i className="im im-icon-Fax"></i> <strong>Fax:</strong> <span>(123) 123-456 </span></li>
    					<li><i className="im im-icon-Globe"></i> <strong>Web:</strong> <span><a href="#">www.example.com</a></span></li>
    					<li><i className="im im-icon-Envelope"></i> <strong>E-Mail:</strong> <span><a href="#"><span className="__cf_email__" data-cfemail="a4cbc2c2cdc7c1e4c1dcc5c9d4c8c18ac7cbc9">[email&#160;protected]</span></a></span></li>
    				</ul>
    			</div>

    		</div>

    		<div className="col-md-8">

    			<section id="contact">
    				<h4 className="headline margin-bottom-35">Contact Form</h4>

    				<div id="contact-message"></div>

    					<form method="post" action="http://www.vasterad.com/themes/findeo/contact.php" name="contactform" id="contactform" autocomplete="on">

    					<div className="row">
    						<div className="col-md-6">
    							<div>
    								<input name="name" type="text" id="name" placeholder="Your Name" required="required" />
    							</div>
    						</div>

    						<div className="col-md-6">
    							<div>
    								<input name="email" type="email" id="email" placeholder="Email Address" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$" required="required" />
    							</div>
    						</div>
    					</div>

    					<div>
    						<input name="subject" type="text" id="subject" placeholder="Subject" required="required" />
    					</div>
              <div>
                <input name="phoneNum" type="text" id="phoneNum" placeholder="Phone Number" required="required" />
              </div>

    					<div>
    						<textarea name="comments" cols="40" rows="3" id="comments" placeholder="Message" spellcheck="true" required="required"></textarea>
    					</div>

    					<input type="submit" className="submit button" id="submit" value="Submit Message" />

    					</form>
    			</section>
    		</div>

    	</div>

    </div>



</Fragment>

  )
}
}

export default ContactUs;
