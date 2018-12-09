import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem'


class CEO extends Component {
render(){
  return (
    <Fragment>
    <div class="parallax titlebar" data-background="images/listings-parallax.jpg" data-color="#333333" data-color-opacity="0.7" data-img-width="800" data-img-height="505" style={{backgroundImage: "url(&quot;images/listings-parallax.jpg&quot;)", backgroundAttachment: "fixed", backgroundSize: "1199.21px 757px", backgroundPosition: "50% -101.294px" }}  >
    <div class="parallax-overlay" style={{backgroundColor: "rgb(51, 51, 51)", opacity: 0.7}}></div>

      <div id="titlebar">
        <div class="container">
          <div class="row">
            <div class="col-md-12">

              <h2>Listings</h2>
              <span>Grid Layout With Sidebar</span>

              <nav id="breadcrumbs">
                <ul>
                  <NavItem to="/">Homepage</NavItem>
                  <NavItem to="/elements">Elements</NavItem>
                  <NavItem to="/CEO">CEO</NavItem>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </div>
    </div>


        <div class="container">

      	<div class="blog-page">
      	<div class="row">


      		<div class="margin-top-20 col-md-12">


      			<div class="blog-post single-post">



      				<div class="post-content">
      					<h3>CEO
    </h3>



      					<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae.</p>

      					<div class="post-quote">
      						<span class="icon"></span>
      						<blockquote>
      							Mauris aliquet ultricies ante, non faucibus ante gravida sed. Sed ultrices pellentesque purus, vulputate volutpat ipsum hendrerit sed neque sed sapien rutrum.
      						</blockquote>
      					</div>

      					<p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Cras suscipit, quam vitae adipiscing faucibus, risus nibh laoreet odio, a porttitor metus eros ut enim. Morbi augue velit, tempus mattis dignissim nec, porta sed risus. Donec eget magna eu lorem tristique pellentesque eget eu dui. Fusce lacinia tempor malesuada. Ut lacus sapien, placerat a ornare nec, elementum sit amet felis. Maecenas pretium lorem hendrerit eros sagittis fermentum.</p>
      					<p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae ante enim. Fusce sed elit est. Suspendisse sit amet mauris in quam pretium faucibus et aliquam odio. </p>




      				</div>
      			</div>

      			<div class="margin-top-15"></div>


      	</div>




      	<div class="col-md-4">

      	</div>
      	</div>


      </div>
      </div>


    </Fragment>

  )
}
}

export default CEO;
