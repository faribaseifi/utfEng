import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { loadScripts, scripts } from '../utils/withScripts';

class BlogPost extends Component {
  state = {
    news: null
  };
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    const news_id = this.props.match.params.id;
    fetch('http://utf.ut.ac.ir/index.php/wsrv/getNewsById', {
      method: 'POST',
      body: JSON.stringify({
        news_id: news_id
      })
    }).then(res => {
      return res.json();
    }).then(data => {
      console.log(data);
      this.setState({ news: data[0] },()=>{
        loadScripts(scripts);
      })
    }).catch(error => {
      console.log(error);
    })

  }
  render() {
    const news = this.state.news;

    return (

      <Fragment>

        <div id="titlebar">

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>NEWS</h2>
                {news ? (
                  <span>{Object.values(news.news_title)}</span>

                ) : null}

                <nav id="breadcrumbs">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li>Blog</li>
                  </ul>
                </nav>

              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row margin-bottom-50">
            <div className="col-md-12">
              {news ? (
                <Fragment>
                  <div className="property-slider default">


                    {
                      Object.values(news.img).map((image) => (
                        <a href={`http://utf.ut.ac.ir/${image}`} data-background-image={`http://utf.ut.ac.ir/${image}`} className="item mfp-gallery"></a>
                      ))
                    }


                  </div>

                  <div className="property-slider-nav">
                    {
                      Object.values(news.img).map((image) => (
                        <div className="item">
                          <img src={`http://utf.ut.ac.ir/${image}`} alt="" />
                        </div>
                      ))
                    }
                  </div>
                </Fragment>

              ) : null}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">

            < div className="col-lg-12 col-md-12" style={{ marginBottom: "80px" }}>
              <div className="property-description">

                <h3 className="desc-headline">Description</h3>
                <div className="show-more visible">
                  {
                    news ? (
                      <p>
                        {news.news_full_text}
                      </p>
                    ) : null
                  }
                </div>

              </div>
            </div>

          </div>
        </div>
      </Fragment >

    );
  }
}

export default BlogPost;
