import React, { useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../components/Home.css'
import CustomerReview from "./CustomerReview";
const galleryImages = [
  "images/g3.jpg",
  "images/g2.jpg",
  "images/g3.jpg",
  "images/g4.jpg",
  "images/g5.jpg",
  "images/g2.jpg",
];
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
      title: 'Welcome To Eathiopian Restaurant',
    },
    {
      img: '/images/slider-03.jpg',
      title: 'Welcome To Eathiopian Restaurant',
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
                      <strong> <br /> {slide.title}</strong>
                    </h1>
                    <p className="m-b-40">
                       <br /> 
                      
                    </p>
                    <p>
                      <a className="btn btn-lg btn-circle btn-outline-new-white" href="/Reservation">
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
                Discover the authentic flavors of Ethiopia at Eathiopian Restaurant, located in Al Mamzar, Onyx Tower, Dubai. We offer a unique dining experience that celebrates Ethiopia's rich culinary heritage, featuring traditional dishes made with love, spice, and culture. From injera to doro wat, every plate tells a story.

Whether you're joining us for a casual lunch, a family dinner, or a cultural feast, our warm hospitality and vibrant atmosphere will make you feel at home. We also offer catering and takeaway services.

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
                {/* <p>
                  Sed tincidunt, neque at egestas imperdiet, nulla sapien blandit nunc, sit amet pulvinar
                  orci nibh ut massa. Proin nec lectus sed nunc placerat semper. Duis hendrerit elit nec
                  sapien porttitor, ut pretium ipsum feugiat. Aenean volutpat porta nisi in gravida.
                  Curabitur pulvinar ligula sed facilisis bibendum. Nullam vitae nulla elit.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Menu */}
<div className="qt-box qt-background">
		<div className="container">
			<div className="row">
				<div className="col-md-8 ml-auto mr-auto text-center">
					<p className="<lead> ">
						Eathiopian Restaurant
					</p>
					<span className="lead">Michael Strahan</span>
				</div>
			</div>
		</div>
	</div>
<div>


      <div className="menu-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center">
                <h2>Special Menu</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              </div>
            </div>
          </div>

          <div className="row inner-menu-box">
          <div className="col-3">
  <div className="nav flex-column nav-pills">
    <button
      style={{ border: "none" }}
      className={`nav-link mb-2 ${activeTab === "all" ? "active" : ""}`}
      onClick={() => setActiveTab("all")}
    >
      All
    </button>
    <button
      style={{ border: "none" }}
      className={`nav-link mb-2 ${activeTab === "drinks" ? "active" : ""}`}
      onClick={() => setActiveTab("drinks")}
    >
      Drinks
    </button>
    <button
      style={{ border: "none" }}
      className={`nav-link mb-2 ${activeTab === "lunch" ? "active" : ""}`}
      onClick={() => setActiveTab("lunch")}
    >
      Lunch
    </button>
    <button
      style={{ border: "none" }}
      className={`nav-link mb-2 ${activeTab === "dinner" ? "active" : ""}`}
      onClick={() => setActiveTab("dinner")}
    >
      Dinner
    </button>
  </div>
</div>




            <div className="col-9">
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  <div className="row">
                    {renderItems(activeTab)}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    {/* Gallery */}
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
            <CustomerReview/>

    </div>
  );
}