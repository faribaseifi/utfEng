import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthContext from '../utils/authContext';
import NavItem from './NavItem';

export class Header extends Component {
  static contextType = AuthContext;
  render() {
    return (
      <header id="header-container">
        <div id="top-bar">
          <div className="container">
            <div className="left-side">
              <ul className="top-bar-menu">
                <li>
                  <i className="fa fa-phone" /> 021-88390459{' '}
                </li>
                <li>
                  <i className="fa fa-envelope" /> info@utf.ut.ac.ir{' '}
                  <a href="#">
                    <span
                      className="__cf_email__"
                      data-cfemail="1e717878777d7b5e7b667f736e727b307d7173"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className="right-side">
              <ul className="social-icons">
                <li>
                  <a
                    className="instagram"
                    href="https://www.instagram.com/hamiyanut/">
                    <i className="icon-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="clearfix" />

        <div id="header">
          <div className="container-fluid">
            <div className="left-side">
              <div id="logo">
                <a href="index-2.html">
                  <img src="images/Capture.PNG" alt="" href="/" />
                </a>
              </div>

              <div className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>

              <nav id="navigation" className="style-1">
                <ul id="responsive">
                  <NavItem exact={true} to="/">
                    Home
                  </NavItem>

                  <li>
                    <a style = {{fontSize: "13px"}} href="#">About</a>
                    <ul>
                      <NavItem to="/AboutUni">about university</NavItem>

                      <NavItem to="/Donator">Donators</NavItem>

                      <NavItem to="/GoalsandGuidelines">
                        Goals and Guidelines
                      </NavItem>

                      <li>
                        <a style = {{fontSize: "13px"}} href="#">Reports</a>

                        <ul>
                          <NavItem to="/OperationReport">
                            Operation Report
                          </NavItem>

                          <NavItem to="/DonationsReport">
                            Donations Report
                          </NavItem>

                          <NavItem to="/InspectorsReport">
                            Inspectors Report
                          </NavItem>

                          <NavItem  to="/FinancialReport">
                            Financial Report
                          </NavItem>
                        </ul>
                      </li>
                      <li>
                        <a style = {{fontSize: "13px"}} href="#">Elements</a>
                        <ul>
                          <NavItem to="/OrganizationalChart">
                            Organizational Chart
                          </NavItem>

                          <NavItem to="/BoardofTrustees">
                            Board of Trustees
                          </NavItem>

                          <li>
                            <a style = {{fontSize: "13px"}} href="single-property-page-3.html">
                              Board of Directors
                            </a>
                            <ul>
                              <NavItem to="/Inspector">Inspector</NavItem>
                            </ul>

                            <NavItem to="/CEO">CEO</NavItem>

                          </li>
                        </ul>
                      </li>

                      <NavItem to="/FAQ">FAQ</NavItem>
                    </ul>
                  </li>

                  <li>
                    <a style = {{fontSize: "13px"}} href="#">Donate Now!</a>
                    <ul>
                      <NavItem to="/BecomeaDonator">Become a Donator</NavItem>

                      <NavItem to="/DonateviaTime">
                        Donate via Time/Skill
                      </NavItem>
                    </ul>
                  </li>

                  <li>
                    <a style = {{fontSize: "13px"}} href="#">How To</a>
                    <ul>
                      <li>
                        <a style = {{fontSize: "13px"}} href="#">Help with Student Loans</a>
                        <ul>
                          <NavItem to="/SupportSus">
                            Support Susceptible Students
                          </NavItem>

                          <NavItem to="/SupportInt">
                            Support International Susceptible Students
                          </NavItem>
                        </ul>
                      </li>

                      <NavItem to="/HelpActionProjs">
                        Help with Projects in Action
                      </NavItem>

                      <NavItem to="/JoinDonators">
                        Join Donators Community
                      </NavItem>

                      <NavItem to="/DonateEdu">
                        Donate Educational Products
                      </NavItem>
                    </ul>
                  </li>

                  <NavItem to="/Branches">Branches</NavItem>

                  <NavItem to="/ContactUs">Contact Us</NavItem>
                </ul>
              </nav>
              <div className="clearfix" />
            </div>

            <div className="right-side">
              <div className="header-widget">
                {this.context.userIsLoggedIn ? (
                  <button
                    onClick={this.context.removeToken}
                    className="sign-in">
                    Log Out
                  </button>
                ) : (
                  <Link to="/login" className="sign-in">
                    <i className="fa fa-user" /> Log In / Register
                  </Link>
                )}
                <a href="submit-property.html" className="button border">
                  Submit Property
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
