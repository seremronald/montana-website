import React from 'react';

export default function Footer() {
  return (
    <footer className="footer mt-5 bg-danger text-white py-3">
      <div className="container">
        <div className="row gy-3 align-items-start">
          {/* Left section */}
          <div className="col-md-6">
            <h5 className="mb-2">Montana Animal Feeds</h5>
            <p className="mb-0 small">FURAHA YA MKULIMA.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h6 className="mb-2">Quick Links</h6>
            <ul className="list-unstyled small mb-0">
              <li><a href="#" className="text-white text-decoration-none">Facebook</a></li>
              <li><a href="#" className="text-white text-decoration-none">Tiktok</a></li>
              <li><a href="#" className="text-white text-decoration-none">Instagram</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h6 className="mb-2">Contact</h6>
            <p className="small mb-0">
              Phone: +254 723 092 409 <br />
              Email: info@montanafeeds.co.ke
            </p>
          </div>
        </div>

        {/* Divider and copyright */}
        <hr className="border-light my-3" />
        <div className="text-center small">
          © {new Date().getFullYear()} Montana Animal Feeds
        </div>
      </div>
    </footer>
  );
}
