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
    </div>
  );
}
