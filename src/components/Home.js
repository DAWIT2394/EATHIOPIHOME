import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slides = [
    {
      img: '/images/slider-01.jpg',
      title: 'Eathiopian Restaurant',
    },
    {
      img: '/images/slider-02.jpg',
      title: 'Eathiopian Restaurant',
    },
    {
      img: '/images/slider-03.jpg',
      title: 'Eathiopian Restaurant',
    },
  ];

  return (
    <div>
      {/* Hero Slider */}
      <div className="cover-slides">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="text-left">
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                style={{ width: '100%', height: '600px', objectFit: 'cover' }}
              />
              <div className="container position-absolute top-50 start-50 translate-middle text-white">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1 className="mb-3">
                      <strong>Welcome To <br /> {slide.title}</strong>
                    </h1>
                    <p className="mb-4">See how your users experience your website in realtime or view trends over time.</p>
                    <a className="btn btn-lg btn-outline-light" href="#">Reservation</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* About Section */}
      <div className="about-section-box py-1">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Column */}
            <div className="col-lg-6 col-md-6">
              <div className="inner-column text-center text-md-start">
                <h1>Welcome To <span className="text-primary">Eathiopian Restaurant</span></h1>
                <h4 className="mt-3">Little Story</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat.
                  Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante
                  sodales augue, eget lacinia lectus erat et sem.
                </p>
                <p>
                  Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem,
                  a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.
                </p>
                <a className="btn btn-lg btn-outline-dark mt-3" href="#">Reservation</a>
              </div>
            </div>

            {/* Image Column */}
            <div className="col-lg-6 col-md-6">
              <img src="/images/eatt.jpg" alt="About" className="img-fluid rounded" />
            </div>

            {/* Bottom Text */}
            <div className="col-md-12 mt-4">
              <div className="inner-pt text-center">
                <p>
                  Sed tincidunt, neque at egestas imperdiet, nulla sapien blandit nunc, sit amet pulvinar
                  orci nibh ut massa. Proin nec lectus sed nunc placerat semper. Duis hendrerit elit nec
                  sapien porttitor, ut pretium ipsum feugiat. Aenean volutpat porta nisi in gravida.
                  Curabitur pulvinar ligula sed facilisis bibendum. Nullam vitae nulla elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
