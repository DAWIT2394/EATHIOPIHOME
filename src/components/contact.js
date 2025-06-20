import React, { useState } from 'react';
import CustomerReview from './CustomerReview';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('http://localhost:7000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'Something went wrong.');
      }
    } catch (err) {
      console.error('Submit error:', err);
      setStatus('Failed to send message.');
    }
  };

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
                <p>Send us your message and we’ll get back to you shortly.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="submit-button text-center">
                      <button className="btn btn-common" type="submit">
                        Send Message
                      </button>
                      <div className="clearfix mt-2">
                        {status && <p style={{ color: 'green' }}>{status}</p>}
                      </div>
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
