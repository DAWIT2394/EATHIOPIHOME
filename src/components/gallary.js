import React from "react";
import CustomerReview from "./CustomerReview";

const galleryImages = [
  "images/g3.jpg",
  "images/g2.jpg",
  "images/g3.jpg",
  "images/g4.jpg",
  "images/g5.jpg",
  "images/g2.jpg",
];

function Gallery() {
  return (
    <>
      <div className="all-page-title page-breadcrumb">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <h1>Gallery</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center">
                <h2>Gallery</h2>
                <p>Explore the vibrant dishes and cultural moments in our Gallery to see what makes Eathiopian Restaurant truly special.</p>
              </div>
            </div>
          </div>

          <div className="tz-gallery">
            <div className="row">
              {galleryImages.map((imgSrc, index) => (
                <div key={index} className="col-sm-6 col-md-4 col-lg-4">
                  <a className="lightbox" href={imgSrc}>
                  <img
  className="img-fluid"
  src={imgSrc}
  alt={`Gallery Image ${index + 1}`}
  style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "1px" }}
/>

                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CustomerReview />
    </>
  );
}

export default Gallery;
