import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userIsLoggedIn, removeToken as logout } from '../utils/authManager';
import NavItem from '../NavItem';
export class Header extends Component {
  render() {
    return (
      <header id="header-container">
        <div id="top-bar">
          <div className="container">
            <div className="left-side">
              <ul className="top-bar-menu">
                <li>
                  <i className="fa fa-phone" />   021-88390459{' '}
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
                <a className="instagram" href="https://www.instagram.com/hamiyanut/">
                  <i className="icon-instagram" />
                </a>
              </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="clearfix" />

        <div id="header">
          <div className="container">
            <div className="left-side">
              <div id="logo">
                <a href="index-2.html">
                  <img src="images/Capture.PNG" alt="" />
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
                  <li>
                    <a className="current" href="#">
                      Home
                    </a>

                  </li>

                  <li>
                    <a href="#">About</a>
                    <ul>

                      <NavItem to="/AboutUni">about university</NavItem>
                      <li>
                        <a href="elements.html">Donators</a>
                      </li>
                      <li>
                        <a href="elements.html">Goals and Guidelines</a>
                      </li>
                      <li>
                        <a href="elements.html">Reports</a>


                            <ul>
                              <li>
                                <a href="single-property-page-1.html">
                                Operation Report
                                </a>
                              </li>
                              <li>
                                <a href="single-property-page-1.html">
                                Donations Report
                                </a>
                              </li>
                              <li>
                                <a href="single-property-page-1.html">
                                Inspectors Report
                                </a>
                              </li>
                              <li>
                                <a href="single-property-page-1.html">
                                Financial Report
                                </a>
                              </li>
                            </ul>

                      </li>
                      <li>
                        <a href="#">Elements</a>
                        <ul>
                          <li>
                            <a href="single-property-page-1.html">
                              organizational chart
                            </a>
                          </li>
                          <li>
                            <a href="single-property-page-2.html">
                              Board of Trustees
                            </a>
                          </li>
                          <li>
                            <a href="single-property-page-3.html">
                              Board of Directors
                            </a>
                            <ul>
                              <li>
                                <a href="single-property-page-1.html">
                                Inspector
                                </a>
                              </li>
                            </ul>

                            <li>
                              <a href="elements.html">CEO</a>
                            </li>

                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="elements.html">FAQ</a>
                      </li>

                    </ul>
                  </li>

                  <li>
                    <a href="#">Donate Now!</a>
                    <ul>
                      <li>
                        <a href="compare-properties.html">Become a Donator</a>
                      </li>
                      <li>
                        <a href="submit-property.html">Donate via Time/Skill</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">How To</a>
                    <ul>
                      <li>
                        <a href="blog.html">Help with Student Loans</a>
                        <ul>
                          <li>
                            <a href="blog.html">Support Susceptible Students</a>
                          </li>
                          <li>
                            <a href="blog-post.html">Support International Susceptible Students</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Help with Projects in Action</a>
                      </li>
                      <li>
                        <a href="elements.html">Join Donators Community</a>
                      </li>
                      <li>
                        <a href="pricing-tables.html">Donate Educational Products</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="clearfix" />
            </div>

            <div className="right-side">
              <div className="header-widget">
                {userIsLoggedIn() ? (
                  <button onClick={logout} className="sign-in">
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
