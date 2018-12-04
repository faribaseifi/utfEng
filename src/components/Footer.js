import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
  render() {
    return (
            <div id="footer" className="dark">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-sm-6">

              <h4>University Foundation Chart</h4>
              <ul className="footer-links small">
                <li>
                  <a href="#">Organizational Chart</a>
                </li>
                <li>
                  <a href="#">Board Of Trustees</a>
                </li>
                <li>
                  <a href="#">Board Of Directors</a>
                </li>
                <li>
                  <a href="#">CEO</a>
                </li>
              </ul>

              <span>

        // this is a place holder for EnAmAd :|

              </span>
                </div>

            <div className="col-md-4 col-sm-6 small">
              <h4>Partnerships</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Student Funds</a>
                </li>
                <li>
                  <a href="#">Projects In Action</a>
                </li>
                <li>
                  <a href="#">Join Partnership Program</a>
                </li>
                <li>
                  <a href="#">Add Property</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>

              <ul className="footer-links">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Our Agents</a>
                </li>
                <li>
                  <a href="#">How It Works</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <div className="clearfix" />
            </div>

            <div className="col-md-3  col-sm-12 small">
              <h4>Contact Us</h4>
              <div className="text-widget">
                <span>50th Block, across Blood Donation Organization, Vesal Shirazi ST.</span> <br />
                Phone: <span>021-88390459 </span>
                <br />
                E-Mail: info@utf.ut.ac.ir
                <span>
                  {' '}
                  <a href="#">

                  </a>{' '}
                </span>
                <br />
              </div>

              <ul className="social-icons margin-top-20">
                <li>
                  <a className="instagram" href="#">
                    <i className="icon-instagram" />
                  </a>
                </li>

              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="copyrights">
                © 2018 all rights reserved for University of Tehran
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
