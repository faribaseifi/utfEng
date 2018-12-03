import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userIsLoggedIn, removeToken as logout } from '../utils/authManager';

export class Header extends Component {
  render() {
    return (
      <header id="header-container">
        <div id="top-bar">
          <div className="container">
            <div className="left-side">
              <ul className="top-bar-menu">
                <li>
                  <i className="fa fa-phone" /> (123) 123-456{' '}
                </li>
                <li>
                  <i className="fa fa-envelope" />{' '}
                  <a href="#">
                    <span
                      className="__cf_email__"
                      data-cfemail="1e717878777d7b5e7b667f736e727b307d7173"
                    />
                  </a>
                </li>
                <li>
                  <div className="top-bar-dropdown">
                    <span>Dropdown Menu</span>
                    <ul className="options">
                      <li>
                        <div className="arrow" />
                      </li>
                      <li>
                        <a href="#">Nice First Link</a>
                      </li>
                      <li>
                        <a href="#">Second Link With Long Title</a>
                      </li>
                      <li>
                        <a href="#">Third Link</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="right-side">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="icon-facebook" />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="icon-twitter" />
                  </a>
                </li>
                <li>
                  <a className="gplus" href="#">
                    <i className="icon-gplus" />
                  </a>
                </li>
                <li>
                  <a className="pinterest" href="#">
                    <i className="icon-pinterest" />
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
                    <ul>
                      <li>
                        <a href="index-2.html">Home 1</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home 2</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home 3</a>
                      </li>
                      <li>
                        <a href="index-5.html">Home 4</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Listings</a>
                    <ul>
                      <li>
                        <a href="#">List Layout</a>
                        <ul>
                          <li>
                            <a href="listings-list-with-sidebar.html">
                              With Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="listings-list-with-map.html">With Map</a>
                          </li>
                          <li>
                            <a href="listings-list-full-width.html">
                              Full Width
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Grid Layout</a>
                        <ul>
                          <li>
                            <a href="listings-grid-standard-with-sidebar.html">
                              Standard With Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="listings-grid-compact-with-sidebar.html">
                              Compact With Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="listings-grid-with-map.html">With Map</a>
                          </li>
                          <li>
                            <a href="listings-grid-full-width.html">
                              Full Width
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Half Map</a>
                        <ul>
                          <li>
                            <a href="listings-half-map-list.html">
                              List Layout
                            </a>
                          </li>
                          <li>
                            <a href="listings-half-map-grid-standard.html">
                              Grid Standard Layout
                            </a>
                          </li>
                          <li>
                            <a href="listings-half-map-grid-compact.html">
                              Grid Compact Layout
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Features</a>
                    <ul>
                      <li>
                        <a href="#">Single Properties</a>
                        <ul>
                          <li>
                            <a href="single-property-page-1.html">
                              Property Style 1
                            </a>
                          </li>
                          <li>
                            <a href="single-property-page-2.html">
                              Property Style 2
                            </a>
                          </li>
                          <li>
                            <a href="single-property-page-3.html">
                              Property Style 3
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Search Styles</a>
                        <ul>
                          <li>
                            <a href="index-2.html">Home Search 1</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home Search 2</a>
                          </li>
                          <li>
                            <a href="index-4.html">Home Search 3</a>
                          </li>
                          <li>
                            <a href="listings-list-full-width.html">
                              Advanced Style
                            </a>
                          </li>
                          <li>
                            <a href="listings-list-with-sidebar.html">
                              Sidebar Search
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">My Account</a>
                        <ul>
                          <li>
                            <a href="my-profile.html">My Profile</a>
                          </li>
                          <li>
                            <a href="my-bookmarks.html">Bookmarked Listings</a>
                          </li>
                          <li>
                            <a href="my-properties.html">My Properties</a>
                          </li>
                          <li>
                            <a href="change-password.html">Change Password</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Agencies & Agents</a>
                        <ul>
                          <li>
                            <a href="agencies-list.html">Agencies List</a>
                          </li>
                          <li>
                            <a href="agency-page.html">Agency Page</a>
                          </li>
                          <li>
                            <a href="agents-list.html">Agents List</a>
                          </li>
                          <li>
                            <a href="agent-page.html">Agent Page</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="compare-properties.html">Compare Properties</a>
                      </li>
                      <li>
                        <a href="submit-property.html">Submit Property</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Pages</a>
                    <ul>
                      <li>
                        <a href="blog.html">Blog</a>
                        <ul>
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-post.html">Blog Post</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="elements.html">Elements</a>
                      </li>
                      <li>
                        <a href="pricing-tables.html">Pricing Tables</a>
                      </li>
                      <li>
                        <a href="typography.html">Typography</a>
                      </li>
                      <li>
                        <a href="icons.html">Icons</a>
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
