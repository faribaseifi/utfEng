import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem'
import { loadScripts, scripts } from '../utils/withScripts';





class Payments extends Component {
constructor(props){
super(props);
loadScripts(scripts);
}
render(){
return (


<Fragment>
  <div className="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="#333333" data-color-opacity="0.7" data-img-width="800" data-img-height="505" style={{backgroundImage: "url(&quot;images/listings-parallax.jpg&quot;)", backgroundAttachment: "fixed", backgroundSize: "1199.21px 757px", backgroundPosition: "50% -101.294px" }}>
    <div className="parallax-overlay" style={{backgroundColor: "rgb(51, 51, 51)", opacity: 0.7}}></div>

    <div id="titlebar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">

            <h2>Listings</h2>
            <span>Grid Layout With Sidebar</span>

            <nav id="breadcrumbs">
              <ul>
                <NavItem to="/Profile">Profile</NavItem>
                <NavItem to="/Payments">Payments</NavItem>
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="container  margin-bottom-100">
    <div className="row">
      <div className="style-2">

        <div className="toggle-wrap">
          <span className="trigger"><a href="#">Pay Now<i className="sl sl-icon-plus" /></a></span>
          <div className="toggle-container" style={{display: "none"}}>




            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">please enter the amount of money you want to donate in iranian RIALS</span>
              </div>
              <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"></input>

            </div>




            <a href="#" class="button border">Pay Now!</a>
          </div>
        </div>


        <div className="toggle-wrap">
          <span className="trigger"><a href="#"> Pay in Checks <i className="sl sl-icon-plus" /></a></span>
          <div className="toggle-container" style={{display: "none"}}>




            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">price (IRANIAN RIALS)</span>
              </div>
              <input disabled type="text" class="form-control" aria-label="Amount (to the nearest dollar)"></input>




              <form>
                <div className="row">
                  <div className="form-group col-md-2">
          <label for="inputZip">pay checks quantity</label>
          <input type="text" className="form-control" id="inputZip"></input>
        </div>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="each check's price (in iranian RIALS)"></input>
                  </div>



                  <div class="checkboxes in-row margin-bottom-20">

                          <input id="check-2" type="checkbox" name="check"></input>
                          <label for="check-2">pay monthly</label>

                        </div>



                </div>
              </form>





            </div>




            <a href="#" class="button border">Pay Now!</a>




          </div>
        </div>


      </div>
    </div>
  </div>

</Fragment>




)
}
}

export default Payments;
