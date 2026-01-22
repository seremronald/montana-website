import React from 'react'
import heroImg from '../assets/IMG_20250709_175917_HDR.jpg'


export default function Hero() {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center text-white p-0 m-0"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '75vh',
        marginTop:0,
      }}
    >
      <div className=" bg-dark bg-opacity-50 p-4 rounded ">
        <h1 className="fw-bold display-5 mb-3">MONTANA ANIMAL FEEDS</h1>
        <p className="lead mb-4">
          Providing nutritious, high-quality feeds for healthier and more productive livestock.
        </p>
      </div>
    </section>
  )
}
