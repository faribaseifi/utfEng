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
      						<li><a href="/profile" className="current"><i className="sl sl-icon-user"></i> My Profile</a></li>
      						<li><a href="/Payments"><i className="sl sl-icon-star"></i> Payments (Donations)</a></li>
      					</ul>

      					<ul className="my-account-nav">
      						<li className="sub-nav-title">Manage Listings</li>
      						<li><a href="my-properties.html"><i className="sl sl-icon-docs"></i> My Properties</a></li>
      						<li><a href="submit-property.html"><i className="sl sl-icon-action-redo"></i> Submit New Property</a></li>
      					</ul>

      					<ul className="my-account-nav">
      						<li><a href="/ChangePass"><i className="sl sl-icon-lock"></i> Change Password</a></li>
      					</ul>

      				</div>

      			</div>
      		</div>

      		<div className="col-md-8">
      			<div className="row">


      				<div className="col-md-12 my-profile">
      					<h4 className="margin-top-0 margin-bottom-30">My Account</h4>

      					<label>First name & Last name</label>
      					<input disabled value="Jennie Wilson" type="text"></input>

      					<label>National country code (Iranian)</label>
      					<input disabled value="036156419845" type="text"></input>

      					<label>Phone</label>
      					<input disabled value="(123) 123-456" type="text"></input>

                <label>Mobile Phone</label>
                <input disabled value="(123) 123-456" type="text"></input>

      					<label>Email</label>
      					<input placeholder="something@gmail.com" type="email"></input>

                <label>Date of Birth</label>
                <input type="date" name="bday"></input>

                <label>year of graduation</label>
                <input type="date" name="gday"></input>

                <label>Level of Education</label>
                <input type="text" name="levelGrad"></input>

                <label>Studied Subjects</label>
                <input type="text" name="subsLevel"></input>

                <select name="cars">
                  <option value="howCameToKnowUs">How did you came to know our organization?</option>
                  <option value="masterOfUni">a Master in this university</option>
                  <option value="ourWebsite">I found out about your website</option>
                  <option value="socialNet">Through social nerworks</option>
                  <option value="otherDons">other Donators</option>
                  <option value="others">other</option>
                </select>

                <label>Address</label>
                <input type="text" name="adress"></input>

                <h4 className="margin-top-0 margin-bottom-30">Positions</h4>


                <div class="checkboxes in-row margin-bottom-20">

                				<input id="check-2" type="checkbox" name="check"></input>
                				<label for="check-2">Science Committee</label>
                        <input type="personalID" name="check" placeholder="personal ID"></input>

                				<input id="check-3" type="checkbox" name="check"></input>
                				<label for="check-3">Employee</label>
                        <input type="personalID1" name="check" placeholder="personal ID"></input>
                        <input type="organizationalPositions" name="check" placeholder="organizational Positions"></input>


                				<input id="check-4" type="checkbox" name="check"></input>
                				<label for="check-4">Student</label>
                        <input type="studentID" name="check" placeholder="Student ID"></input>

                				<input id="check-5" type="checkbox" name="check"></input>
                				<label for="check-5">other jobs</label>
                        <input type="othersDescription" name="check" placeholder="other jobs Description"></input>

                			</div>

      					<button className="button margin-top-20 margin-bottom-20">Save Changes</button>
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
