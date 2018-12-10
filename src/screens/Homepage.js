import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Benefactor from '../components/Benefactor.js';
import Supporter from '../components/Supporter.js';
import News from '../components/News.js';
import {loadScripts, scripts} from '../utils/withScripts';
class Homepage extends Component {
    state = {
        news: [],
        benefactors: [],
        supporters: []
    };

    componentDidMount() {
        this.fetchNews();
        this.fetchBenefactors();
        this.fetchSupporters();
    }

    fetchBenefactors = () => {
        fetch('https://utf.ut.ac.ir/index.php/wsrv/getAllBenefactors', {
            mode: 'cors'
        })
            .then(response => {
                return response.json();
            })
            .then(data => {

                this.setState({benefactors: data}, () => {
                    loadScripts(scripts)
                });

            })
            .catch(err => {
                console.error(err);
            });

    }

    fetchSupporters = () => {
        fetch('https://utf.ut.ac.ir/index.php/wsrv/getAllSupporters', {
            mode: 'cors'
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                this.setState({supporters: data});
            })
            .catch(err => {
                console.error(err);
            });

    }

    fetchNews = () => {
        fetch('http://utf.ut.ac.ir/index.php/wsrv/getActiveNews', {
            method: 'POST',
            body: JSON.stringify({
                perPage: 3,
                page: 0
            })
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({news: data.news});
            })
            .catch(err => {
                console.error(err)
            })

    };

    render() {
        return (
            <div id="wrapper">
                <div className="clearfix"/>

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
                                                Student Funds/Loans <i/>
                                            </div>

                                            <div className="home-slider-title">
                                                <h3>
                                                    <a href="single-property-page-1.html">
                                                        only for top students
                                                    </a>
                                                </h3>
                                            </div>

                                            <a
                                                href="single-property-page-1.html"
                                                className="read-more">
                                                View Details <i className="fa fa-angle-right"/>
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
                                            <div className="home-slider-price">
                                                Supporting Founders
                                            </div>

                                            <div className="home-slider-title">
                                                <h3>
                                                    <a href="single-property-page-1.html">
                                                        Tehran University
                                                    </a>
                                                </h3>
                                            </div>

                                            <a
                                                href="single-property-page-1.html"
                                                className="read-more">
                                                View Details <i className="fa fa-angle-right"/>
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
                                            <div className="home-slider-title">
                                                <h3>
                                                    <a href="single-property-page-1.html"/>
                                                </h3>
                                            </div>

                                            <a
                                                href="single-property-page-1.html"
                                                className="read-more"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        data-background-image="images/home-slider-04.jpg"
                        className="item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="home-slider-container">
                                        <div className="home-slider-desc">
                                            <div className="home-slider-title">
                                                <h3>
                                                    <a href="single-property-page-1.html"/>
                                                </h3>
                                            </div>

                                            <a
                                                href="single-property-page-1.html"
                                                className="read-more"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        data-background-image="images/home-slider-05.jpg"
                        className="item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="home-slider-container">
                                        <div className="home-slider-desc">
                                            <div className="home-slider-title">
                                                <h3>
                                                    <a href="single-property-page-1.html"/>
                                                </h3>
                                            </div>

                                            <a
                                                href="single-property-page-1.html"
                                                className="read-more"
                                            />
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
                                        <i className="im im-icon-Books-2"/>
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
                                        <i className="im im-icon-Check"/>
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
                                        <i className="im im-icon-Student-MaleFemale"/>
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
                                        <i className="im im-icon-Handshake"/>
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
                            {this.state.news.map((news) => <News {...news}/>)}
                        </div>
                    </div>
                </section>
                <section
                    className="fullwidth border-bottom margin-top-0 margin-bottom-0 padding-top-50 padding-bottom-50"
                    data-background-color="#ffffff"
                    style={{background: 'rgb(255, 255, 255) none repeat scroll 0% 0%'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="icon-box-1 alternative">
                                    <div className="icon-container">
                                        <i className="im im-icon-Mail-Money"/>
                                    </div>

                                    <h3>Cash Donations (Fundino)</h3>
                                    <p>learn more...</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="icon-box-1 alternative">
                                    <div className="icon-container">
                                        <i className="im im-icon-Money-2"/>
                                    </div>

                                    <h3>Help With Financial Tasks</h3>
                                    <p>learn more...</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="icon-box-1 alternative">
                                    <div className="icon-container">
                                        <i className="im im-icon-University-2"/>
                                    </div>

                                    <h3>University of Tehran</h3>
                                    <p>Main WebSite</p>
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
                                    {this.state.benefactors.map((benefactor) => <Benefactor {...benefactor}/>)}

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
                                    {this.state.supporters.map((supporter) => <Supporter {...supporter}/>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div id="backtotop">
                    <a href="#"/>
                </div>
            </div>
        );
    }
}

export default Homepage;
