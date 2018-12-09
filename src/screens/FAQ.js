import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem'
import { loadScripts, scripts } from '../utils/withScripts';



class FAQ extends Component {
constructor(props){
super(props);
loadScripts(scripts);

}
render(){
return (

<Fragment>

  <div id="titlebar">

    <div className="container">
      <div className="row">
        <div className="col-md-12">

          <h2>Listings</h2>
          <span>Grid Layout With Sidebar</span>

          <nav id="breadcrumbs">
            <ul>
              <NavItem to="/">Homepage</NavItem>
              <NavItem to="/Donator">Donators</NavItem>
            </ul>
          </nav>

        </div>
      </div>
    </div>
  </div>

  <div className="container">
    <div className="row">
      <div className="style-2">

        <div className="toggle-wrap">
          <span className="trigger"><a href="#">First Toggle<i className="sl sl-icon-plus" /></a></span>
          <div className="toggle-container" style={{display: "none"}}>
            <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Donec ut volutpat metus. Vivamus justo arcu, elementum a sollicitudin pellentesque, tincidunt ac enim. Proin id arcu ut
              ipsum vestibulum elementum.</p>
          </div>
        </div>


        <div className="toggle-wrap">
          <span className="trigger"><a href="#"> Second Toggle <i className="sl sl-icon-plus" /></a></span>
          <div className="toggle-container" style={{display: "none"}}>
            <p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Donec ut volutpat metus. Aliquam tortor lorem, fringilla tempor dignissim at, pretium et arcu.</p>
          </div>
        </div>




        <div className="toggle-wrap">
          <span className="trigger"><a href="#">Third Toggle With Icon <i className="sl sl-icon-plus" /> </a></span>
          <div className="toggle-container" style={{display: "none"}}>
            <p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Donec ut volutpat metus. Aliquam tortor lorem, fringilla tempor dignissim at, pretium et arcu.</p>
          </div>
        </div>

        <div className="toggle-wrap">
          <span className="trigger"><a href="#">Third Toggle With Icon <i className="sl sl-icon-plus" /> </a></span>
          <div className="toggle-container" style={{display: "none"}}>
            <p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Donec ut volutpat metus. Aliquam tortor lorem, fringilla tempor dignissim at, pretium et arcu.</p>
          </div>
        </div>

        <div className="toggle-wrap">
          <span className="trigger"><a href="#">Third Toggle With Icon <i className="sl sl-icon-plus" /> </a></span>
          <div className="toggle-container" style={{display: "none"}}>
            <p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Donec ut volutpat metus. Aliquam tortor lorem, fringilla tempor dignissim at, pretium et arcu.</p>
          </div>
        </div>

        <div className="toggle-wrap">
          <span className="trigger"><a href="#">Third Toggle With Icon <i className="sl sl-icon-plus" /> </a></span>
          <div className="toggle-container" style={{display: "none"}}>
            <p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Donec ut volutpat metus. Aliquam tortor lorem, fringilla tempor dignissim at, pretium et arcu.</p>
          </div>
        </div>

        <div className="toggle-wrap">
          <span className="trigger"><a href="#">Third Toggle With Icon <i className="sl sl-icon-plus" /> </a></span>
          <div className="toggle-container" style={{display: "none"}}>
            <p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Donec ut volutpat metus. Aliquam tortor lorem, fringilla tempor dignissim at, pretium et arcu.</p>
          </div>
        </div>

        <div className="toggle-wrap">
          <span className="trigger"><a href="#">Third Toggle With Icon <i className="sl sl-icon-plus" /> </a></span>
          <div className="toggle-container" style={{display: "none"}}>
            <p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Donec ut volutpat metus. Aliquam tortor lorem, fringilla tempor dignissim at, pretium et arcu.</p>
          </div>
        </div>

        <div className="toggle-wrap">
          <span className="trigger"><a href="#">Third Toggle With Icon <i className="sl sl-icon-plus" /> </a></span>
          <div className="toggle-container" style={{display: "none"}}>
            <p>Seded ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Donec ut volutpat metus. Aliquam tortor lorem, fringilla tempor dignissim at, pretium et arcu.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</Fragment>

);
}
}

export default FAQ;
