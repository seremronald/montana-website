import React from 'react'

export default function AboutPage() {
  return (
    <div className="container py-5">
      {/* About Us Section */}
      <section className="mb-5 text-center">
        <h2 className="mb-4 fw-bold text-success ">About Serem Farm Feeds</h2>
        <div className="card shadow-sm border-0">
          <div className="card-body p-4">
            <p className="text-muted mb-3">
              At <strong>Serem Farm Feeds</strong>, we are dedicated to producing superior, affordable, and nutritious animal feeds 
              that promote healthy growth, productivity, and sustainability. Our commitment to excellence is backed by 
              years of expertise in animal nutrition and a passion for supporting farmers with reliable, high-quality products.
            </p>
            <p className="text-muted">
              We work closely with local ingredient suppliers to ensure every batch of feed meets strict quality standards. 
              Whether you’re raising dairy cows, poultry, or small ruminants, Montana Animal Feeds provides tailored nutrition 
              that brings out the best in your livestock.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm bg-light">
            <div className="card-body text-center p-4">
              <h3 className="text-success mb-3 fw-semibold">Our Vision</h3>
              <p className="text-muted">
                To be the leading provider of sustainable and innovative animal feed solutions in East Africa — 
                empowering farmers to achieve higher productivity and healthier livestock.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm bg-light">
            <div className="card-body text-center p-4">
              <h3 className="text-success mb-3 fw-semibold">Our Mission</h3>
              <p className="text-muted">
                To produce high-quality, nutrient-balanced feeds through continuous innovation, 
                local sourcing, and scientific formulation — ensuring animal health, customer satisfaction, 
                and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="text-center">
        <h3 className="fw-semibold text-success mb-4">Our Core Values</h3>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul className="list-group shadow-sm">
              <li className="list-group-item">Quality and Consistency</li>
              <li className="list-group-item">Sustainability and Local Sourcing</li>
              <li className="list-group-item">Farmer Empowerment</li>
              <li className="list-group-item">Innovation and Integrity</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
