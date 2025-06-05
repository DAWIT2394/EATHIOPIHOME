import React from 'react';
import CustomerReview from './CustomerReview';

export default function Contact() {
  return (
    <div>
      {/* Map Section */}
      <div className="map-full" data-wow-delay="0.4s">
  <div id="google-map" style={{ width: '100%', height: '70vh' ,paddingTop:'7rem'}}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57722.183116565466!2d55.28421472167969!3d25.282812499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dcfb52863f9%3A0xe785222c1c1f9b3b!2sEathiopian%20Restaurant!5e0!3m2!1sen!2set!4v1747831400514!5m2!1sen!2set"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      title="Google Map"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>


      {/* Contact Form Section */}
      <div className="contact-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center">
                <h2>Contact</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                        data-error="Please enter your name"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        data-error="Please enter your email"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <select
                        className="custom-select d-block form-control"
                        id="guest"
                        required
                        defaultValue=""
                        data-error="Please Select Person"
                      >
                        <option value="" disabled>
                          Please Select Person*
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Your Message"
                        rows="4"
                        required
                        data-error="Write your message"
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="submit-button text-center">
                      <button className="btn btn-common" id="submit" type="submit">
                        Send Message
                      </button>
                      <div id="msgSubmit" className="h3 text-center hidden"></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <CustomerReview />
      </div>
    </div>
  );
}
