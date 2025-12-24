import React from 'react'

export default function Hero() {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center text-white"
      style={{
        backgroundImage: "url('src/assets/Pig Grower.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '75vh'
      }}
    >
      <div className="bg-dark bg-opacity-50 p-5 rounded-4">
        <h1 className="fw-bold display-5 mb-3"> SEREM FARM FEEDS</h1>
        <p className="lead mb-4">
          Providing nutritious, high-quality feeds for healthier and more productive livestock.
        </p>
        <a href="/products" className="btn btn-light btn-lg text-success fw-bold shadow">
          Explore Our Products
        </a>
      </div>
    </section>
  )
}
