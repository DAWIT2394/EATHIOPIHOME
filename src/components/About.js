import React from 'react';
import Galleryy from './G';

export default function About() {
  return (
    <>
      {/* Page Title */}
      <div className="all-page-title page-breadcrumb">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <h1>About Us</h1>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section-box">
        <div className="container">
          <div className="row">
            {/* Text Column */}
            <div className="col-lg-6 col-md-6 text-center">
              <div className="inner-column">
                <h1>
                  Welcome To <span>Eathiopia Restaurant</span>
                </h1>
                <h4>Little Story</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit
                  feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend
                  luctus, odio ante sodales augue, eget lacinia lectus erat et sem.
                </p>
                <p>
                  Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem,
                  a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem
                  pulvinar.
                </p>
                <a className="btn btn-lg btn-circle btn-outline-new-white" href="#">
                  Reservation
                </a>
              </div>
            </div>

            {/* Image Column */}
            <div className="col-lg-6 col-md-6">
              <img src="images/eatt.jpg" alt="About" className="img-fluid" />
            </div>

            {/* Full Width Text */}
           
          </div>
        <Galleryy/>

        </div>
      </div>
    </>
  );
}
