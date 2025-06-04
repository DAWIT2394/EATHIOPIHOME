import React, { useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../components/Home.css'
export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const renderItems = (category) => {
    const allItems = [
      { category: "drinks", name: "Special Drinks 1", img: "images/img-01.jpg", price: "$7.79" },
      { category: "drinks", name: "Special Drinks 2", img: "images/img-02.jpg", price: "$9.79" },
      { category: "drinks", name: "Special Drinks 3", img: "images/img-03.jpg", price: "$10.79" },
      { category: "lunch", name: "Special Lunch 1", img: "images/img-04.jpg", price: "$15.79" },
      { category: "lunch", name: "Special Lunch 2", img: "images/img-05.jpg", price: "$18.79" },
      { category: "lunch", name: "Special Lunch 3", img: "images/img-06.jpg", price: "$20.79" },
      { category: "dinner", name: "Special Dinner 1", img: "images/img-07.jpg", price: "$25.79" },
      { category: "dinner", name: "Special Dinner 2", img: "images/img-08.jpg", price: "$22.79" },
      { category: "dinner", name: "Special Dinner 3", img: "images/img-09.jpg", price: "$24.79" },
    ];

    const filtered = category === "all" ? allItems : allItems.filter(item => item.category === category);

    return filtered.map((item, index) => (
      <div key={index} className="col-lg-4 col-md-6 special-grid">
        <div className="gallery-single fix">
          <img src={item.img} className="img-fluid" alt={item.name} />
          <div className="why-text">
            <h4>{item.name}</h4>
            <p>Sed id magna vitae eros sagittis euismod.</p>
            <h5>{item.price}</h5>
          </div>
        </div>
      </div>
    ));
  };
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const slides = [
    {
      img: '/images/slider-01.jpg',
      title: '',
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

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', right: '15px' }}
        onClick={onClick}
      >
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', left: '15px', zIndex: 1 }}
        onClick={onClick}
      >
        <i className="fa fa-angle-left" aria-hidden="true"></i>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Slider */}
      <div id="slides" className="cover-slides">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="text-left">
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="slider-img"
              />
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="m-b-20">
                      <strong>Welcome To <br /> {slide.title}</strong>
                    </h1>
                    <p className="m-b-40">
                      See how your users experience your website in realtime or view <br /> 
                      trends to see any changes in performance over time.
                    </p>
                    <p>
                      <a className="btn btn-lg btn-circle btn-outline-new-white" href="#">
                        Reservation
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
{/* Menu */}

      {/* About Section */}
      <div className="about-section-box py-5">
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
                <a className="btn btn-lg btn-circle btn-outline-dark mt-3" href="#">
                  Reservation
                </a>
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