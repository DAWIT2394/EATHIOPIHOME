import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default function Footer() {
  return (
    <div>
      <footer className="footer-area bg-f">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h3>About Us</h3>
              <p>
              Experience the rich, authentic flavors of Ethiopia at Eathiopian Restaurant in Al Mamzar, Onyx Tower, Dubai. Enjoy traditional dishes like injera and doro wat, all made with love and spice. Whether it’s a casual lunch, family dinner, or special event, our warm hospitality and vibrant atmosphere will make you feel at home. Catering and takeaway available              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3>Subscribe</h3>
              {/* <div className="subscribe_form">
                <form className="subscribe_form">
                  <input
                    name="EMAIL"
                    id="subs-email"
                    className="form_input"
                    placeholder="Email Address..."
                    type="email"
                  />
                  <button type="submit" className="submit">
                    SUBSCRIBE
                  </button>
                  <div className="clearfix"></div>
                </form>
              </div> */}
              <ul className="list-inline f-social">
  <li className="list-inline-item">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-facebook" aria-hidden="true"></i>
    </a>
  </li>
  <li className="list-inline-item">
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-twitter" aria-hidden="true"></i>
    </a>
  </li>
  <li className="list-inline-item">
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-linkedin" aria-hidden="true"></i>
    </a>
  </li>
  <li className="list-inline-item">
    <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-google-plus" aria-hidden="true"></i>
    </a>
  </li>
  <li className="list-inline-item">
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-instagram" aria-hidden="true"></i>
    </a>
  </li>
</ul>

            </div>
            <div className="col-lg-3 col-md-6">
              <h3>Contact information</h3>
              <p className="lead">Al Mamzar, Onyx Tower Ground Floor, Dubai
              </p>
              <p className="lead">
  <a href="tel:+971588812237" className="text-blue-600 hover:underline">
    📞 +971 588 812 237
  </a>
</p>

              {/* <p><a href="#"> info@admin.com</a></p> */}
            </div>
            <div className="col-lg-3 col-md-6">
              <h3>Opening hours</h3>
              <p><span className="text-color">Monday: </span>open</p>
              <p><span className="text-color">Tue-Wed :</span> 9:Am - 10PM</p>
              <p><span className="text-color">Thu-Fri :</span> 9:Am - 10PM</p>
              <p><span className="text-color">Sat-Sun :</span> 5:PM - 10PM</p>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="company-name">
                  All Rights Reserved. &copy; 2025{' '}
                  <a href="#">Eathiopia Restaurant</a> Design By :{' '}
                  <a href="https://html.design/">dc</a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}
