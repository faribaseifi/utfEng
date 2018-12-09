import React, { Component, Fragment } from 'react';
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
  <Fragment>

      <div>
        <p>Profile page {this.state.data}</p>
      </div>




      <div className="container">
      	<div className="row">


      		<div className="col-md-4">
      			<div className="sidebar left">

      				<div className="my-account-nav-container">

      					<ul className="my-account-nav">
      						<li className="sub-nav-title">Manage Account</li>
      						<li><a href="my-profile.html" className="current"><i className="sl sl-icon-user"></i> My Profile</a></li>
      						<li><a href="my-bookmarks.html"><i className="sl sl-icon-star"></i> Bookmarked Listings</a></li>
      					</ul>

      					<ul className="my-account-nav">
      						<li className="sub-nav-title">Manage Listings</li>
      						<li><a href="my-properties.html"><i className="sl sl-icon-docs"></i> My Properties</a></li>
      						<li><a href="submit-property.html"><i className="sl sl-icon-action-redo"></i> Submit New Property</a></li>
      					</ul>

      					<ul className="my-account-nav">
      						<li><a href="change-password.html"><i className="sl sl-icon-lock"></i> Change Password</a></li>
      						<li><a href="#"><i className="sl sl-icon-power"></i> Log Out</a></li>
      					</ul>

      				</div>

      			</div>
      		</div>

      		<div className="col-md-8">
      			<div className="row">


      				<div className="col-md-8 my-profile">
      					<h4 className="margin-top-0 margin-bottom-30">My Account</h4>

      					<label>First name & Last name</label>
      					<input value="Jennie Wilson" type="text"></input>

      					<label>National country code (Iranian)</label>
      					<input value="036156419845" type="text"></input>

      					<label>Phone</label>
      					<input value="(123) 123-456" type="text"></input>

                <label>Mobile Phone</label>
                <input value="(123) 123-456" type="text"></input>

      					<label>Email</label>
      					<input value="jennie@example.com" type="text"></input>


      					<h4 className="margin-top-50 margin-bottom-25">About Me</h4>
      					<textarea name="about" id="about" cols="30" rows="10">Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</textarea>


      					<h4 className="margin-top-50 margin-bottom-0">Social</h4>

      					<label><i className="fa fa-twitter"></i> Twitter</label>
      					<input value="https://www.twitter.com/" type="text"></input>

      					<label><i className="fa fa-facebook-square"></i> Facebook</label>
      					<input value="https://www.facebook.com/" type="text"></input>

      					<label><i className="fa fa-google-plus"></i> Google+</label>
      					<input value="https://www.google.com/" type="text"></input>

      					<label><i className="fa fa-linkedin"></i> Linkedin</label>
      					<input value="https://www.linkedin.com/" type="text"></input>


      					<button className="button margin-top-20 margin-bottom-20">Save Changes</button>
      				</div>

      				<div className="col-md-4">
      					<div className="edit-profile-photo">
      						<img src="images/agent-02.jpg" alt=""></img>
      						<div className="change-photo-btn">
      							<div className="photoUpload">
      							    <span><i className="fa fa-upload"></i> Upload Photo</span>
      							    <input type="file" className="upload"></input>
      							</div>
      						</div>
      					</div>

      				</div>


      			</div>
      		</div>

      	</div>
      </div>



</Fragment>
    );
  }
}

export default Profile;
