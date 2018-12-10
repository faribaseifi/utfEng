import React,{Component} from 'react';
import {Link} from 'react-router-dom';
const News = ({news_id,news_thumb,news_title,news_short_text})=>{
    return(
        <div className="col-md-4">
            <div key={news_id} className="blog-post">
                <Link to={`/blogPost/${news_id}`} className="post-img">
                    <img src={`http://utf.ut.ac.ir/${news_thumb}`} alt=""/>
                </Link>
                <div className="post-content">
                    <h3 style={{height:"85px"}}>
                        <a href="#">{news_title}</a>
                    </h3>
                    <p style={{height: "168px"}}>{news_short_text}</p>

                    <Link to={`/blog/${news_id}`} className="read-more">
                        Read More <i className="fa fa-angle-right"/>
                    </Link>
                </div>
            </div>
        </div>
    )
};
export default News;