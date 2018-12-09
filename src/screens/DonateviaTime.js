
import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem'



class DonateviaTime extends Component {
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
                  <NavItem to="/DonateviaTime">Donate Via...</NavItem>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
    	<div class="row">
    		<div class="col-md-12">

    			<div class="agent agent-page agency long-content">

    				<div class="agent-avatar">
    					<img src="images/asd.jpg" alt=""></img>
    				</div>

    				<div class="agent-content">
    					<div class="agent-name">
    						<h4>Iran</h4>
    						<span><i class="fa fa-map-marker"></i> University of Tehran</span>
    					</div>

    					<p>Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</p>


              <div class="submit-page">



              		<h3>Basic Information</h3>
              		<div class="submit-section">

              			<div class="form">
              				<h5>first name and last name</h5>
              				<input class="search-field" type="text" value=""></input>
              			</div>

                    <div class="col-md-6">
                      <h5>national country code (iranian)</h5>
                      <input type="text"></input>
                    </div>








              			<div class="row with-forms">

              				<div class="col-md-6">
              					<h5>Status</h5>
              					<select class="chosen-select-no-single" style={{display: "none"}}>
              						<option label="blank"></option>
              						<option>For Sale</option>
              						<option>For Rent</option>
              					</select><div class="chosen-container chosen-container-single chosen-container-single-nosearch" style={{width: "100%"}} title=""><a class="chosen-single chosen-default"><span>Select an Option</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" readonly=""></input></div><ul class="chosen-results"></ul></div></div>
              				</div>

              				<div class="col-md-6">
              					<h5>Type</h5>
              					<select class="chosen-select-no-single" style={{display: "none"}}>
              						<option label="blank"></option>
              						<option>Apartment</option>
              						<option>House</option>
              						<option>Commercial</option>
              						<option>Garage</option>
              						<option>Lot</option>
              					</select><div class="chosen-container chosen-container-single chosen-container-single-nosearch" style={{width: "100%"}} title=""><a class="chosen-single chosen-default"><span>Select an Option</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" readonly=""></input></div><ul class="chosen-results"></ul></div></div>
              				</div>

              			</div>


              			<div class="row with-forms">

              				<div class="col-md-4">
              					<h5>Price <i class="tip" data-tip-content="Type overall or monthly price if property is for rent"><div class="tip-content">Type overall or monthly price if property is for rent</div></i></h5>
              					<div class="select-input disabled-first-option">
              						<i class="data-unit">USD</i><input type="text" data-unit="USD"></input>
              					</div>
              				</div>

              				<div class="col-md-4">
              					<h5>Area</h5>
              					<div class="select-input disabled-first-option">
              						<i class="data-unit">Sq Ft</i><input type="text" data-unit="Sq Ft"></input>
              					</div>
              				</div>

              				<div class="col-md-4">
              					<h5>Rooms</h5>
              					<select class="chosen-select-no-single" style={{display: "none"}}>
              						<option label="blank"></option>
              						<option>1</option>
              						<option>2</option>
              						<option>3</option>
              						<option>4</option>
              						<option>5</option>
              						<option>More than 5</option>
              					</select><div class="chosen-container chosen-container-single chosen-container-single-nosearch" style={{width: "100%"}} title=""><a class="chosen-single chosen-default"><span>Select an Option</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" readonly=""></input></div><ul class="chosen-results"></ul></div></div>
              				</div>

              			</div>

              		</div>


              		<h3>Gallery</h3>
              		<div class="submit-section">
              			<form action="http://www.vasterad.com/file-upload" class="dropzone dz-clickable"><div class="dz-default dz-message"><span><i class="sl sl-icon-plus"></i> Click here or drop files to upload</span></div></form>
              		</div>


              		<h3>Location</h3>
              		<div class="submit-section">

              			<div class="row with-forms">

              				<div class="col-md-6">
              					<h5>Address</h5>
              					<input type="text"></input>
              				</div>

              				<div class="col-md-6">
              					<h5>City</h5>
              					<input type="text"></input>
              				</div>

              				<div class="col-md-6">
              					<h5>State</h5>
              					<input type="text"></input>
              				</div>

              				<div class="col-md-6">
              					<h5>Zip-Code</h5>
              					<input type="text"></input>
              				</div>

              			</div>

              		</div>


              		<h3>Detailed Information</h3>
              		<div class="submit-section">

              			<div class="form">
              				<h5>Description</h5>
              				<textarea class="WYSIWYG" name="summary" cols="40" rows="3" id="summary" spellcheck="true"></textarea>
              			</div>

              			<div class="row with-forms">

              				<div class="col-md-4">
              					<h5>Building Age <span>(optional)</span></h5>
              					<select class="chosen-select-no-single" style={{display: "none"}}>
              						<option label="blank"></option>
              						<option>0 - 1 Years</option>
              						<option>0 - 5 Years</option>
              						<option>0 - 10 Years</option>
              						<option>0 - 20 Years</option>
              						<option>0 - 50 Years</option>
              						<option>50 + Years</option>
              					</select><div class="chosen-container chosen-container-single chosen-container-single-nosearch" style={{width: "100%"}} title=""><a class="chosen-single chosen-default"><span>Select an Option</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" readonly=""></input></div><ul class="chosen-results"></ul></div></div>
              				</div>

              				<div class="col-md-4">
              					<h5>Bedrooms <span>(optional)</span></h5>
              					<select class="chosen-select-no-single" style={{display: "none"}}>
              						<option label="blank"></option>
              						<option>1</option>
              						<option>2</option>
              						<option>3</option>
              						<option>4</option>
              						<option>5</option>
              					</select><div class="chosen-container chosen-container-single chosen-container-single-nosearch" style={{width: "100%"}} title=""><a class="chosen-single chosen-default"><span>Select an Option</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" readonly=""></input></div><ul class="chosen-results"></ul></div></div>
              				</div>

              				<div class="col-md-4">
              					<h5>Bathrooms <span>(optional)</span></h5>
              					<select class="chosen-select-no-single" style={{display: "none"}}>
              						<option label="blank"></option>
              						<option>1</option>
              						<option>2</option>
              						<option>3</option>
              						<option>4</option>
              						<option>5</option>
              					</select><div class="chosen-container chosen-container-single chosen-container-single-nosearch" style={{width: "100%"}} title=""><a class="chosen-single chosen-default"><span>Select an Option</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" readonly=""></input></div><ul class="chosen-results"></ul></div></div>
              				</div>

              			</div>


              			<h5 class="margin-top-30">Other Features <span>(optional)</span></h5>
              			<div class="checkboxes in-row margin-bottom-20">

              				<input id="check-2" type="checkbox" name="check"></input>
              				<label for="check-2">Air Conditioning</label>

              				<input id="check-3" type="checkbox" name="check"></input>
              				<label for="check-3">Swimming Pool</label>

              				<input id="check-4" type="checkbox" name="check"></input>
              				<label for="check-4">Central Heating</label>

              				<input id="check-5" type="checkbox" name="check"></input>
              				<label for="check-5">Laundry Room</label>


              				<input id="check-6" type="checkbox" name="check"></input>
              				<label for="check-6">Gym</label>

              				<input id="check-7" type="checkbox" name="check"></input>
              				<label for="check-7">Alarm</label>

              				<input id="check-8" type="checkbox" name="check"></input>
              				<label for="check-8">Window Covering</label>

              			</div>

              		</div>


              		<h3>Contact Details</h3>
              		<div class="submit-section">

              			<div class="row with-forms">

              				<div class="col-md-4">
              					<h5>Name</h5>
              					<input type="text"></input>
              				</div>

              				<div class="col-md-4">
              					<h5>E-Mail</h5>
              					<input type="text"></input>
              				</div>

              				<div class="col-md-4">
              					<h5>Phone <span>(optional)</span></h5>
              					<input type="text"></input>
              				</div>

              			</div>

              		</div>


              		<div class="divider"></div>
              		<a href="#" class="button preview margin-top-5">Preview <i class="fa fa-arrow-circle-right"></i></a>

              		</div>

    					<div class="clearfix"></div>
    				</div>

    			</div>

    		</div>
    	</div>
    </div>

    </Fragment>

  )
}
}

export default DonateviaTime;
