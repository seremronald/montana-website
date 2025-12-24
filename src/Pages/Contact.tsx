import React from 'react';

export default function Contact() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* --- Section Header --- */}
        <div className="text-center mb-5">
          <h2 className="text-success fw-bold">Get in Touch</h2>
          <p className="text-muted">
            We’d love to hear from you! Whether you have a question about our feeds, deliveries,
            or partnership opportunities — our team is here to help.
          </p>
        </div>

        <div className="row g-4 align-items-start">
          {/* --- Office Info --- */}
          <div className="col-md-5">
            <div className="card border-0 shadow-sm h-100 p-4">
              <h5 className="text-success mb-3">Our Office</h5>
              <p className="mb-2">
                <i className="bi bi-geo-alt-fill text-success me-2"></i>
                Eldoret, Kenya
              </p>
              <p className="mb-2">
                <i className="bi bi-telephone-fill text-success me-2"></i>
                +254 723 092 409
              </p>
              <p className="mb-2">
                <i className="bi bi-envelope-fill text-success me-2"></i>
                info@montanafeeds.co.ke
              </p>

              <hr />

              <h6 className="text-success">Business Hours</h6>
              <p className="mb-1">Monday - Friday: 8:00 AM - 7:00 PM</p>
              <p>Saturday: 8:00 AM - 7:00 PM</p>
            </div>
          </div>

          {/* --- Contact Form --- */}
          <div className="col-md-7">
            <div className="card border-0 shadow-sm p-4">
              <h5 className="text-success mb-3">Send Us a Message</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows={5}
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-success w-100 fw-bold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
