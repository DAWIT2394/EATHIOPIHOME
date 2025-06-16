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
                Discover the authentic flavors of Ethiopia at Eathiopian Restaurant, located in Al Mamzar, Onyx Tower, Dubai. We offer a unique dining experience that celebrates Ethiopia's rich culinary heritage, featuring traditional dishes made with love, spice, and culture. From injera to doro wat, every plate tells a story.

Whether you're joining us for a casual lunch, a family dinner, or a cultural feast, our warm hospitality and vibrant atmosphere will make you feel at home. We also offer catering and takeaway services.

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

        </div>
      </div>
    </>
  );
}
