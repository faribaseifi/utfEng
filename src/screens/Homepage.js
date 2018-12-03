import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    fetch('https://www.kanoonbook.ir/index.php/app/utfNews', {
      mode: 'cors'
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.error(data);
        this.setState({ news: data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div id="wrapper">
        <div className="clearfix" />

        <div className="fullwidth-home-slider margin-bottom-0">
          <div
            data-background-image="images/home-slider-01.jpg"
            className="item">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="home-slider-container">
                    <div className="home-slider-desc">
                      <div className="home-slider-price">
                        $1700 <i>/ monthly</i>
                      </div>

                      <div className="home-slider-title">
                        <h3>
                          <a href="single-property-page-1.html">
                            Meridian Villas
                          </a>
                        </h3>
                        <span>
                          <i className="fa fa-map-marker" /> 778 Country St.
                          Panama City, FL
                        </span>
                      </div>

                      <a
                        href="single-property-page-1.html"
                        className="read-more">
                        View Details <i className="fa fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-background-image="images/home-slider-02.jpg"
            className="item">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="home-slider-container">
                    <div className="home-slider-desc">
                      <div className="home-slider-price">$325,000</div>

                      <div className="home-slider-title">
                        <h3>
                          <a href="single-property-page-1.html">
                            Eagle Apartments
                          </a>
                        </h3>
                        <span>
                          <i className="fa fa-map-marker" /> 9364 School St.
                          Lynchburg, NY
                        </span>
                      </div>

                      <a
                        href="single-property-page-1.html"
                        className="read-more">
                        View Details <i className="fa fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-background-image="images/home-slider-03.jpg"
            className="item">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="home-slider-container">
                    <div className="home-slider-desc">
                      <div className="home-slider-price">
                        $500 <i>/ monthly</i>
                      </div>

                      <div className="home-slider-title">
                        <h3>
                          <a href="single-property-page-1.html">
                            Old Town Manchester
                          </a>
                        </h3>
                        <span>
                          <i className="fa fa-map-marker" /> 7843 Durham Avenue,
                          MD{' '}
                        </span>
                      </div>

                      <a
                        href="single-property-page-1.html"
                        className="read-more">
                        View Details <i className="fa fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          className="fullwidth"
          data-background-color="#f7f7f7"
          style={{
            background: 'rgb(247, 247, 247) none repeat scroll 0% 0%',
            padding: 0,
            margin: 0
          }}>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="icon-box-1">
                  <div className="icon-container">
                    <i className="im im-icon-Books-2" />
                    <div className="icon-links">
                      <a href="listings-grid-standard-with-sidebar.html">
                        Performance Report
                      </a>
                    </div>
                  </div>

                  <h3>Performance Report</h3>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="icon-box-1">
                  <div className="icon-container">
                    <i className="im im-icon-Check" />
                    <div className="icon-links">
                      <a href="listings-grid-standard-with-sidebar.html">
                        University requirements
                      </a>
                    </div>
                  </div>

                  <h3>University requirements</h3>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="icon-box-1">
                  <div className="icon-container">
                    <i className="im im-icon-Student-MaleFemale" />
                    <div className="icon-links">
                      <a href="listings-grid-standard-with-sidebar.html">
                        Student scholarship
                      </a>
                    </div>
                  </div>

                  <h3>Student scholarship</h3>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="icon-box-1">
                  <div className="icon-container">
                    <i className="im im-icon-Handshake" />
                    <div className="icon-links">
                      <a href="listings-grid-standard-with-sidebar.html">
                        Spiritual contributions
                      </a>
                    </div>
                  </div>

                  <h3>Spiritual contributions</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fullwidth margin-top-95 margin-bottom-0">
          <h3 className="headline-box">Latest News</h3>

          <div className="container">
            <div className="row">
              {this.state.news.length
                ? this.state.news.map(({ id, title, content, image }) => (
                    <div className="col-md-4">
                      <div key={id} className="blog-post">
                        <Link to={`/blog/${id}`} className="post-img">
                          <img src={image} alt="" />
                        </Link>
                        <div className="post-content">
                          <h3>
                            <a href="#">{title}</a>
                          </h3>
                          <p>{content}</p>

                          <a href="blog-post.html" className="read-more">
                            Read More <i className="fa fa-angle-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </section>
        <section
          className="fullwidth border-bottom margin-top-0 margin-bottom-0 padding-top-50 padding-bottom-50"
          data-background-color="#ffffff"
          style={{ background: 'rgb(255, 255, 255) none repeat scroll 0% 0%' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="icon-box-1 alternative">
                  <div className="icon-container">
                    <i className="im im-icon-Mail-Money" />
                  </div>

                  <h3>Cash Assistance (FDN)</h3>
                  <p>
                    See who specializes in your area, has the most reviews and
                    the right experience to meet your needs.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="icon-box-1 alternative">
                  <div className="icon-container">
                    <i className="im im-icon-Money-2" />
                  </div>

                  <h3>Cash Assistance to the Foundation</h3>
                  <p>
                    More than 10,000 customers buy or sell a home with us each
                    year. We help people and homes find each together.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="icon-box-1 alternative">
                  <div className="icon-container">
                    <i className="im im-icon-University-2" />
                  </div>

                  <h3>University of Tehran website</h3>
                  <p>
                    Our specialists can help you get started on that home
                    project. Find paint colors, that perfect tile and more.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fullwidth margin-top-105 margin-bottom-0 padding-bottom-70 padding-top-100">
          <h3 className="headline-box">Benefactors</h3>

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="carousel">
                  <div
                    className="carousel-item"
                    style={{ position: 'relative', height: '550.4px' }}>
                    <div
                      className="grid-item"
                      style={{ position: 'absolute', left: '0%', top: '0px' }}>
                      <div className="agent">
                        <div className="agent-avatar">
                          <a href="agent-page.html">
                            <img src="images/agent-01.jpg" alt="" />
                            <span className="view-profile-btn">
                              View Profile
                            </span>
                          </a>
                        </div>

                        <div className="agent-content">
                          <div className="agent-name">
                            <h4>
                              <a href="agent-page.html">Tom Wilson</a>
                            </h4>
                            <span>Agent In New York</span>
                          </div>

                          <ul className="agent-contact-details">
                            <li>
                              <i className="sl sl-icon-call-in" />
                              (123) 123-456
                            </li>
                            <li>
                              <i className="fa fa-envelope-o " />
                              <a href="#">
                                <span
                                  className="__cf_email__"
                                  data-cfemail="f0849f9db09588919d809c95de939f9d">
                                  [email&nbsp;protected]
                                </span>
                              </a>
                            </li>
                          </ul>

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
                              <a className="linkedin" href="#">
                                <i className="icon-linkedin" />
                              </a>
                            </li>
                          </ul>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="carousel-item"
                    style={{ position: 'relative', height: '550.4px' }}>
                    <div
                      className="grid-item"
                      style={{ position: 'absolute', left: '0%', top: '0px' }}>
                      <div className="agent">
                        <div className="agent-avatar">
                          <a href="agent-page.html">
                            <img src="images/agent-01.jpg" alt="" />
                            <span className="view-profile-btn">
                              View Profile
                            </span>
                          </a>
                        </div>

                        <div className="agent-content">
                          <div className="agent-name">
                            <h4>
                              <a href="agent-page.html">Tom Wilson</a>
                            </h4>
                            <span>Agent In New York</span>
                          </div>

                          <ul className="agent-contact-details">
                            <li>
                              <i className="sl sl-icon-call-in" />
                              (123) 123-456
                            </li>
                            <li>
                              <i className="fa fa-envelope-o " />
                              <a href="#">
                                <span
                                  className="__cf_email__"
                                  data-cfemail="f0849f9db09588919d809c95de939f9d">
                                  [email&nbsp;protected]
                                </span>
                              </a>
                            </li>
                          </ul>

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
                              <a className="linkedin" href="#">
                                <i className="icon-linkedin" />
                              </a>
                            </li>
                          </ul>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="carousel-item"
                    style={{ position: 'relative', height: '550.4px' }}>
                    <div
                      className="grid-item"
                      style={{ position: 'absolute', left: '0%', top: '0px' }}>
                      <div className="agent">
                        <div className="agent-avatar">
                          <a href="agent-page.html">
                            <img src="images/agent-01.jpg" alt="" />
                            <span className="view-profile-btn">
                              View Profile
                            </span>
                          </a>
                        </div>

                        <div className="agent-content">
                          <div className="agent-name">
                            <h4>
                              <a href="agent-page.html">Tom Wilson</a>
                            </h4>
                            <span>Agent In New York</span>
                          </div>

                          <ul className="agent-contact-details">
                            <li>
                              <i className="sl sl-icon-call-in" />
                              (123) 123-456
                            </li>
                            <li>
                              <i className="fa fa-envelope-o " />
                              <a href="#">
                                <span
                                  className="__cf_email__"
                                  data-cfemail="f0849f9db09588919d809c95de939f9d">
                                  [email&nbsp;protected]
                                </span>
                              </a>
                            </li>
                          </ul>

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
                              <a className="linkedin" href="#">
                                <i className="icon-linkedin" />
                              </a>
                            </li>
                          </ul>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="carousel-item"
                    style={{ position: 'relative', height: '550.4px' }}>
                    <div
                      className="grid-item"
                      style={{ position: 'absolute', left: '0%', top: '0px' }}>
                      <div className="agent">
                        <div className="agent-avatar">
                          <a href="agent-page.html">
                            <img src="images/agent-01.jpg" alt="" />
                            <span className="view-profile-btn">
                              View Profile
                            </span>
                          </a>
                        </div>

                        <div className="agent-content">
                          <div className="agent-name">
                            <h4>
                              <a href="agent-page.html">Tom Wilson</a>
                            </h4>
                            <span>Agent In New York</span>
                          </div>

                          <ul className="agent-contact-details">
                            <li>
                              <i className="sl sl-icon-call-in" />
                              (123) 123-456
                            </li>
                            <li>
                              <i className="fa fa-envelope-o " />
                              <a href="#">
                                <span
                                  className="__cf_email__"
                                  data-cfemail="f0849f9db09588919d809c95de939f9d">
                                  [email&nbsp;protected]
                                </span>
                              </a>
                            </li>
                          </ul>

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
                              <a className="linkedin" href="#">
                                <i className="icon-linkedin" />
                              </a>
                            </li>
                          </ul>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="carousel-item"
                    style={{ position: 'relative', height: '550.4px' }}>
                    <div
                      className="grid-item"
                      style={{ position: 'absolute', left: '0%', top: '0px' }}>
                      <div className="agent">
                        <div className="agent-avatar">
                          <a href="agent-page.html">
                            <img src="images/agent-01.jpg" alt="" />
                            <span className="view-profile-btn">
                              View Profile
                            </span>
                          </a>
                        </div>

                        <div className="agent-content">
                          <div className="agent-name">
                            <h4>
                              <a href="agent-page.html">Tom Wilson</a>
                            </h4>
                            <span>Agent In New York</span>
                          </div>

                          <ul className="agent-contact-details">
                            <li>
                              <i className="sl sl-icon-call-in" />
                              (123) 123-456
                            </li>
                            <li>
                              <i className="fa fa-envelope-o " />
                              <a href="#">
                                <span
                                  className="__cf_email__"
                                  data-cfemail="f0849f9db09588919d809c95de939f9d">
                                  [email&nbsp;protected]
                                </span>
                              </a>
                            </li>
                          </ul>

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
                              <a className="linkedin" href="#">
                                <i className="icon-linkedin" />
                              </a>
                            </li>
                          </ul>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="carousel-item"
                    style={{ position: 'relative', height: '550.4px' }}>
                    <div
                      className="grid-item"
                      style={{ position: 'absolute', left: '0%', top: '0px' }}>
                      <div className="agent">
                        <div className="agent-avatar">
                          <a href="agent-page.html">
                            <img src="images/agent-01.jpg" alt="" />
                            <span className="view-profile-btn">
                              View Profile
                            </span>
                          </a>
                        </div>

                        <div className="agent-content">
                          <div className="agent-name">
                            <h4>
                              <a href="agent-page.html">Tom Wilson</a>
                            </h4>
                            <span>Agent In New York</span>
                          </div>

                          <ul className="agent-contact-details">
                            <li>
                              <i className="sl sl-icon-call-in" />
                              (123) 123-456
                            </li>
                            <li>
                              <i className="fa fa-envelope-o " />
                              <a href="#">
                                <span
                                  className="__cf_email__"
                                  data-cfemail="f0849f9db09588919d809c95de939f9d">
                                  [email&nbsp;protected]
                                </span>
                              </a>
                            </li>
                          </ul>

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
                              <a className="linkedin" href="#">
                                <i className="icon-linkedin" />
                              </a>
                            </li>
                          </ul>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="fullwidth border-top margin-top-40 margin-bottom-0 padding-top-60 padding-bottom-65"
          data-background-color="#ffffff">
          <h3 className="headline-box">Supporter</h3>

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="logo-carousel dot-navigation">
                  <div className="item">
                    <img src="images/logo-01.png" alt="" />
                  </div>

                  <div className="item">
                    <img src="images/logo-02.png" alt="" />
                  </div>

                  <div className="item">
                    <img src="images/logo-03.png" alt="" />
                  </div>

                  <div className="item">
                    <img src="images/logo-04.png" alt="" />
                  </div>

                  <div className="item">
                    <img src="images/logo-05.png" alt="" />
                  </div>

                  <div className="item">
                    <img src="images/logo-06.png" alt="" />
                  </div>

                  <div className="item">
                    <img src="images/logo-07.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="backtotop">
          <a href="#" />
        </div>
      </div>
    );
  }
}

export default Homepage;
