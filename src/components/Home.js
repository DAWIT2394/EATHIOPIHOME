import React from 'react';
export default function Home() {
  return (
    <div>
      <div id="slides" className="cover-slides">
        <ul className="slides-container">
          <li className="text-left">
            <img src="/images/slider-01.jpg" alt="Slide 1" />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="m-b-20"><strong>Welcome To <br /> Live Dinner Restaurant</strong></h1>
                  <p className="m-b-40">See how your users experience your website in realtime or view trends over time.</p>
                  <p><a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a></p>
                </div>
              </div>
            </div>
          </li>
          <li className="text-left">
            <img src="/images/slider-02.jpg" alt="Slide 2" />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="m-b-20"><strong>Welcome To <br /> Live Dinner Restaurant</strong></h1>
                  <p className="m-b-40">See how your users experience your website in realtime or view trends over time.</p>
                  <p><a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a></p>
                </div>
              </div>
            </div>
          </li>
          <li className="text-left">
            <img src="/images/slider-03.jpg" alt="Slide 3" />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="m-b-20"><strong>Welcome To <br /> Yamifood Restaurant</strong></h1>
                  <p className="m-b-40">See how your users experience your website in realtime or view trends over time.</p>
                  <p><a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a></p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="slides-navigation">
          <a href="#" className="next"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
          <a href="#" className="prev"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
        </div>
      </div>
      <div className="about-section-box">
      <div className="container">
        <div className="row">
          {/* Text Column */}
          <div className="col-lg-6 col-md-6 text-center">
            <div className="inner-column">
              <h1>Welcome To <span>Live Dinner Restaurant</span></h1>
              <h4>Little Story</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. 
                Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, 
                odio ante sodales augue, eget lacinia lectus erat et sem.
              </p>
              <p>
                Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, 
                a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.
              </p>
              <a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-6 col-md-6">
            <img src="images/about-img.jpg" alt="About" className="img-fluid" />
          </div>

          {/* Bottom Text */}
          <div className="col-md-12">
            <div className="inner-pt">
              <p>
                Sed tincidunt, neque at egestas imperdiet, nulla sapien blandit nunc, sit amet pulvinar 
                orci nibh ut massa. Proin nec lectus sed nunc placerat semper. Duis hendrerit elit nec 
                sapien porttitor, ut pretium ipsum feugiat. Aenean volutpat porta nisi in gravida. 
                Curabitur pulvinar ligula sed facilisis bibendum. Nullam vitae nulla elit.
              </p>
              <p>
                Integer purus velit, eleifend eu magna volutpat, porttitor blandit lectus. Aenean risus 
                odio, efficitur quis erat eget, mattis tristique arcu. Fusce in ante enim. Integer 
                consectetur elit nec laoreet rutrum. Mauris porta turpis nec tellus accumsan pellentesque. 
                Morbi non quam tempus, convallis urna in, cursus mauris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
