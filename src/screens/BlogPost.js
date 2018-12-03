import React, { Component } from 'react';

const url = '';

class BlogPost extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    const postId = this.props.match.params.id;
    fetch(`https://www.kanoonbook.ir/index.php/app/utfGetNews/${postId}`)
      .then(res => res.json())
      .then(data => this.setState({ post: data[0] }))
      .catch(err => console.error(err));
  }
  render() {
    const post = this.state.post;
    return (
      <div id="wrapper">
        <div className="compare-slide-menu">
          <div className="csm-trigger" />

          <div className="csm-content">
            <h4>
              Compare Properties <div className="csm-mobile-trigger" />
            </h4>

            <div className="csm-properties">
              <div className="listing-item compact">
                <a
                  href="single-property-page-2.html"
                  className="listing-img-container">
                  <div className="remove-from-compare">
                    <i className="fa fa-close" />
                  </div>
                  <div className="listing-badges">
                    <span>For Sale</span>
                  </div>
                  <div className="listing-img-content">
                    <span className="listing-compact-title">
                      Eagle Apartments <i>$420,000</i>
                    </span>
                  </div>
                  <img src="images/listing-01.jpg" alt="" />
                </a>
              </div>

              <div className="listing-item compact">
                <a
                  href="single-property-page-2.html"
                  className="listing-img-container">
                  <div className="remove-from-compare">
                    <i className="fa fa-close" />
                  </div>
                  <div className="listing-badges">
                    <span>For Sale</span>
                  </div>
                  <div className="listing-img-content">
                    <span className="listing-compact-title">
                      Selway Apartments <i>$420,000</i>
                    </span>
                  </div>
                  <img src="images/listing-03.jpg" alt="" />
                </a>
              </div>

              <div className="listing-item compact">
                <a
                  href="single-property-page-2.html"
                  className="listing-img-container">
                  <div className="remove-from-compare">
                    <i className="fa fa-close" />
                  </div>
                  <div className="listing-badges">
                    <span>For Sale</span>
                  </div>
                  <div className="listing-img-content">
                    <span className="listing-compact-title">
                      Oak Tree Villas <i>$535,000</i>
                    </span>
                  </div>
                  <img src="images/listing-05.jpg" alt="" />
                </a>
              </div>
            </div>

            <div className="csm-buttons">
              <a href="compare-properties.html" className="button">
                Compare
              </a>
              <a href="#" className="button reset">
                Reset
              </a>
            </div>
          </div>
        </div>

        <div className="clearfix" />

        <div id="titlebar">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Blog</h2>
                <span>Keep up to date with the latest news</span>

                <nav id="breadcrumbs">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>Blog</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="blog-page">
            <div className="row">
              <div className="col-md-8">
                {post ? (
                  <div className="blog-post single-post">
                    {Object.values(post.images).map((img, index) => (
                      <img className="post-img" key={index} src={img} alt="" />
                    ))}
                    <img />
                    <div className="post-content">
                      <h3>{post.title}</h3>

                      <ul className="post-meta">
                        <li>Novemer 9, 2016</li>
                      </ul>

                      <p>{post.full_content}</p>

                      <ul className="share-buttons margin-top-40 margin-bottom-0">
                        <li>
                          <a className="fb-share" href="#">
                            <i className="fa fa-facebook" /> Share
                          </a>
                        </li>
                        <li>
                          <a className="twitter-share" href="#">
                            <i className="fa fa-twitter" /> Tweet
                          </a>
                        </li>
                        <li>
                          <a className="gplus-share" href="#">
                            <i className="fa fa-google-plus" /> Share
                          </a>
                        </li>
                        <li>
                          <a className="pinterest-share" href="#">
                            <i className="fa fa-pinterest-p" /> Pin
                          </a>
                        </li>
                      </ul>
                      <div className="clearfix" />
                    </div>
                  </div>
                ) : null}

                <ul id="posts-nav" className="margin-top-0 margin-bottom-40">
                  <li className="next-post">
                    <a href="#">
                      <span>Next Post</span>
                      Tips For Newbie Hitchhiker
                    </a>
                  </li>
                  <li className="prev-post">
                    <a href="#">
                      <span>Previous Post</span>
                      What's So Great About Merry?
                    </a>
                  </li>
                </ul>

                <div className="about-author">
                  <img src="images/agent-avatar.jpg" alt="" />
                  <div className="about-description">
                    <h4>Jennie Wilson</h4>
                    <a href="#">
                      <span
                        className="__cf_email__"
                        data-cfemail="c0aaa5aeaea9a580a5b8a1adb0aca5ee">
                        [email&#160;protected]
                      </span>
                      com
                    </a>
                    <p>
                      Nullam ultricies, velit ut varius molestie, ante metus
                      condimentum nisi, dignissim facilisis turpis ex in libero.
                      Sed porta ante tortor, a pulvinar mi facilisis nec. Proin
                      finibus dolor ac convallis congue.
                    </p>
                  </div>
                </div>

                <div className="clearfix" />
                <h4 className="headline margin-top-25">Related Posts</h4>
                <div className="row">
                  <div className="col-md-6">
                    <div className="blog-post">
                      <a href="#" className="post-img">
                        <img src="images/blog-post-02.jpg" alt="" />
                      </a>

                      <div className="post-content">
                        <h3>
                          <a href="#">Bedroom Colors You'll Never Regret</a>
                        </h3>
                        <p>
                          Nam nisl lacus, dignissim ac tristique ut, scelerisque
                          eu massa. Vestibulum ligula nunc, rutrum in malesuada
                          vitae.{' '}
                        </p>

                        <a href="#" className="read-more">
                          Read More <i className="fa fa-angle-right" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="blog-post">
                      <a href="#" className="post-img">
                        <img src="images/blog-post-03.jpg" alt="" />
                      </a>

                      <div className="post-content">
                        <h3>
                          <a href="#">
                            What to Do a Year Before Buying Apartment
                          </a>
                        </h3>
                        <p>
                          Nam nisl lacus, dignissim ac tristique ut, scelerisque
                          eu massa. Vestibulum ligula nunc, rutrum in malesuada
                          vitae.{' '}
                        </p>

                        <a href="#" className="read-more">
                          Read More <i className="fa fa-angle-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="margin-top-50" />

                <section className="comments">
                  <h4 className="headline margin-bottom-35">
                    Comments <span className="comments-amount">(5)</span>
                  </h4>

                  <ul>
                    <li>
                      <div className="avatar">
                        <img
                          src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                          alt=""
                        />
                      </div>
                      <div className="comment-content">
                        <div className="arrow-comment" />
                        <div className="comment-by">
                          Kathy Brown
                          <span className="date">12th, June 2015</span>
                          <a href="#" className="reply">
                            <i className="fa fa-reply" /> Reply
                          </a>
                        </div>
                        <p>
                          Morbi velit eros, sagittis in facilisis non, rhoncus
                          et erat. Nam posuere tristique sem, eu ultricies
                          tortor imperdiet vitae. Curabitur lacinia neque non
                          metus
                        </p>
                      </div>

                      <ul>
                        <li>
                          <div className="avatar">
                            <img
                              src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                              alt=""
                            />
                          </div>
                          <div className="comment-content">
                            <div className="arrow-comment" />
                            <div className="comment-by">
                              Tom Smith
                              <span className="date">12th, June 2015</span>
                              <a href="#" className="reply">
                                <i className="fa fa-reply" /> Reply
                              </a>
                            </div>
                            <p>
                              Rrhoncus et erat. Nam posuere tristique sem, eu
                              ultricies tortor imperdiet vitae. Curabitur
                              lacinia neque.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="avatar">
                            <img
                              src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                              alt=""
                            />
                          </div>
                          <div className="comment-content">
                            <div className="arrow-comment" />
                            <div className="comment-by">
                              Kathy Brown
                              <span className="date">12th, June 2015</span>
                              <a href="#" className="reply">
                                <i className="fa fa-reply" /> Reply
                              </a>
                            </div>
                            <p>
                              Nam posuere tristique sem, eu ultricies tortor.
                            </p>
                          </div>

                          <ul>
                            <li>
                              <div className="avatar">
                                <img
                                  src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                                  alt=""
                                />
                              </div>
                              <div className="comment-content">
                                <div className="arrow-comment" />
                                <div className="comment-by">
                                  John Doe
                                  <span className="date">12th, June 2015</span>
                                  <a href="#" className="reply">
                                    <i className="fa fa-reply" /> Reply
                                  </a>
                                </div>
                                <p>Great template!</p>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <div className="avatar">
                        <img
                          src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                          alt=""
                        />{' '}
                      </div>
                      <div className="comment-content">
                        <div className="arrow-comment" />
                        <div className="comment-by">
                          John Doe<span className="date">15th, May 2015</span>
                          <a href="#" className="reply">
                            <i className="fa fa-reply" /> Reply
                          </a>
                        </div>
                        <p>
                          Commodo est luctus eget. Proin in nunc laoreet justo
                          volutpat blandit enim. Sem felis, ullamcorper vel
                          aliquam non, varius eget justo. Duis quis nunc tellus
                          sollicitudin mauris.
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>
                <div className="clearfix" />
                <div className="margin-top-55" />

                <h4 className="headline">Add Comment</h4>
                <div className="margin-top-15" />

                <form id="add-comment" className="add-comment">
                  <fieldset>
                    <div>
                      <label>Name:</label>
                      <input type="text" value="" />
                    </div>

                    <div>
                      <label>
                        Email: <span>*</span>
                      </label>
                      <input type="text" value="" />
                    </div>

                    <div>
                      <label>
                        Comment: <span>*</span>
                      </label>
                      <textarea cols="40" rows="3" />
                    </div>
                  </fieldset>

                  <a href="#" className="button">
                    Add Comment
                  </a>
                  <div className="clearfix" />
                  <div className="margin-bottom-20" />
                </form>
              </div>

              <div className="col-md-4">
                <div className="sidebar right">
                  <div className="widget">
                    <h3 className="margin-top-0 margin-bottom-25">
                      Search Blog
                    </h3>
                    <div className="search-blog-input">
                      <div className="input">
                        <input
                          className="search-field"
                          type="text"
                          placeholder="Type and hit enter"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>

                  <div className="widget">
                    <h3>Got any questions?</h3>
                    <div className="info-box margin-bottom-10">
                      <p>
                        If you are having any questions, please feel free to
                        ask.
                      </p>
                      <a
                        href="contact.html"
                        className="button fullwidth margin-top-20">
                        <i className="fa fa-envelope-o" /> Drop Us a Line
                      </a>
                    </div>
                  </div>

                  <div className="widget">
                    <h3>Popular Posts</h3>
                    <ul className="widget-tabs">
                      <li>
                        <div className="widget-content">
                          <div className="widget-thumb">
                            <a href="blog-full-width-single-post.html">
                              <img src="images/blog-widget-03.jpg" alt="" />
                            </a>
                          </div>

                          <div className="widget-text">
                            <h5>
                              <a href="blog-full-width-single-post.html">
                                What to Do a Year Before Buying Apartment{' '}
                              </a>
                            </h5>
                            <span>October 26, 2016</span>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </li>

                      <li>
                        <div className="widget-content">
                          <div className="widget-thumb">
                            <a href="blog-full-width-single-post.html">
                              <img src="images/blog-widget-02.jpg" alt="" />
                            </a>
                          </div>

                          <div className="widget-text">
                            <h5>
                              <a href="blog-full-width-single-post.html">
                                Bedroom Colors You'll Never Regret
                              </a>
                            </h5>
                            <span>November 9, 2016</span>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </li>

                      <li>
                        <div className="widget-content">
                          <div className="widget-thumb">
                            <a href="blog-full-width-single-post.html">
                              <img src="images/blog-widget-01.jpg" alt="" />
                            </a>
                          </div>

                          <div className="widget-text">
                            <h5>
                              <a href="blog-full-width-single-post.html">
                                8 Tips to Help You Finding New Home
                              </a>
                            </h5>
                            <span>November 12, 2016</span>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="widget">
                    <h3 className="margin-top-0 margin-bottom-25">Social</h3>
                    <ul className="social-icons rounded">
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
                  </div>

                  <div className="clearfix" />
                  <div className="margin-bottom-40" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="margin-top-55" />

        <div id="footer" className="sticky-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-6">
                <img className="footer-logo" src="images/logo.png" alt="" />
                <br />
                <br />
                <p>
                  Morbi convallis bibendum urna ut viverra. Maecenas quis
                  consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi
                  ultricies laoreet ullamcorper phasellus semper.
                </p>
              </div>

              <div className="col-md-4 col-sm-6 ">
                <h4>Helpful Links</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Sign Up</a>
                  </li>
                  <li>
                    <a href="#">My Account</a>
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

              <div className="col-md-3  col-sm-12">
                <h4>Contact Us</h4>
                <div className="text-widget">
                  <span>12345 Little Lonsdale St, Melbourne</span> <br />
                  Phone: <span>(123) 123-456 </span>
                  <br />
                  E-Mail:
                  <span>
                    {' '}
                    <a href="#">
                      <span
                        className="__cf_email__"
                        data-cfemail="442b22222d272104213c25293428216a272b29">
                        [email&#160;protected]
                      </span>
                    </a>{' '}
                  </span>
                  <br />
                </div>

                <ul className="social-icons margin-top-20">
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
                    <a className="vimeo" href="#">
                      <i className="icon-vimeo" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="copyrights">
                  © 2016 Findeo. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="backtotop">
          <a href="#" />
        </div>

        <script src="scripts/switcher.js" />

        <div id="style-switcher">
          <h2>
            Color Switcher{' '}
            <a href="#">
              <i className="sl sl-icon-settings" />
            </a>
          </h2>

          <div>
            <ul className="colors" id="color1">
              <li>
                <a href="#" className="blue" title="Blue" />
              </li>
              <li>
                <a href="#" className="green" title="Green" />
              </li>
              <li>
                <a href="#" className="orange" title="Orange" />
              </li>
              <li>
                <a href="#" className="navy" title="Navy" />
              </li>
              <li>
                <a href="#" className="yellow" title="Yellow" />
              </li>
              <li>
                <a href="#" className="peach" title="Peach" />
              </li>
              <li>
                <a href="#" className="beige" title="Beige" />
              </li>
              <li>
                <a href="#" className="purple" title="Purple" />
              </li>
              <li>
                <a href="#" className="celadon" title="Celadon" />
              </li>
              <li>
                <a href="#" className="pink" title="Pink" />
              </li>
              <li>
                <a href="#" className="red" title="Red" />
              </li>
              <li>
                <a href="#" className="brown" title="Brown" />
              </li>
              <li>
                <a href="#" className="cherry" title="Cherry" />
              </li>
              <li>
                <a href="#" className="cyan" title="Cyan" />
              </li>
              <li>
                <a href="#" className="gray" title="Gray" />
              </li>
              <li>
                <a href="#" className="olive" title="Olive" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost;
