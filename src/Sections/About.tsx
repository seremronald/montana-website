import React from 'react'

export default function About() {
  return (
    <section className="mt-4 mb-5 ">
      <div className="container">
        <div className="card border-0 shadow-sm p-4 bg-light">
          <div className="row align-items-center g-4 flex-lg-row-reverse">

            {/* --- Text Section --- */}
            <div className="col-lg-6 ">
              <h2 className="text-success mb-10">WHO ARE WE?</h2>
              <p className="text-muted">
                <strong>Serem Farm Feeds</strong> is committed to providing high-quality,
                affordable, and nutritious animal feeds that help farmers achieve optimal livestock
                performance. We use locally sourced ingredients and advanced formulation techniques
                to guarantee consistent quality and nutrition.
              </p>
              <p className="text-muted">
                Our team of nutrition experts works closely with farmers to ensure that each feed
                product meets the specific needs of their animals — from dairy cows to poultry and
                small ruminants.
              </p>
              <p className="text-muted">
                <strong>Serem Farm Feeds</strong> operates as a proud <strong>subsidiary of Montana Animal Feeds</strong>,
                extending our commitment to quality and farmer satisfaction through specialized feed
                production and distribution across the region.
              </p>

              <ul className="list-unstyled mt-3">
                <li>1. Locally sourced, quality ingredients</li>
                <li>2. Nutritionist-approved feed formulas</li>
                <li>3. Reliable delivery and customer support</li>
              </ul>
            </div>

            {/* --- Image Section --- */}
            <div className="col-lg-6 text-center">
              <img
                src="/src/assets/IMG_20250709_175917_HDR.jpg"
                alt="Montana Animal Feeds facility"
                className="img-fluid rounded shadow fade-in"
                style={{
                  width: '1OO%',
                  maxHeight: '600px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
