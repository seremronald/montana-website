import React from 'react'



const products = [
  {
    id: 1,
    name: 'Dairy Feeds',
    img: '/src/assets/Dairy.jpg',
    description :
      'Formulated to enhance milk production and maintain cow health. Montana Dairy Feeds provide a balanced mix of proteins, energy, vitamins, and minerals to support high-yield and standard dairy cows throughout lactation.'
  },
  {
    id: 2,
    name: 'Sheep Feeds',
    img: '/src/assets/Sheep Meal.jpg',
    description:
      'Designed to support growth, wool production, and fertility in sheep. Our Sheep Meal contains essential nutrients that improve digestion, body weight, and overall performance while reducing feed wastage.'
  },
  {
    id: 3,
    name: 'Kienyeji Feeds',
    img: '/src/assets/Kienjeji.jpg',
    description:
      'A nutrient-rich feed for indigenous chickens raised under free-range conditions. Fortified with omena and natural proteins to promote faster growth, better egg production, and improved disease resistance.'
  },
  {
    id: 4,
    name: 'Layers Feeds',
    img: '/src/assets/EGSSS.jpg',
    description:
      'Specially formulated to boost egg production, yolk quality, and shell strength. Layers Mash delivers balanced nutrition with optimal calcium and energy levels to keep your layers healthy and productive.'
  },
  {
    id: 5,
    name: 'Dog Meal',
    img: '/src/assets/DOOG PIC.jpg',
    description:
      'A complete and balanced dog food rich in proteins, vitamins, and omega fats. Promotes healthy skin, shiny coat, strong bones, and long-lasting energy for active dogs.'
  },
]

export default function FeaturedProducts() {
  return (
    <section className="my-5">
      <h3 className="text-center mb-4" style={{ color: '#ed1C24' }}>Featured Products</h3>
      <div className="row g-4">
        {products.map((p) => (
          <div key={p.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={p.img}
                className="card-img-top rounded-top"
                alt={p.name}
                style={{ height: '220px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center fw-bold" style={{ color: '#ed1C24' }}>
                  {p.name}
                </h5>
                <p className="card-text text-muted small text-center">
                  {p.description}
                </p>
                <div className="mt-auto text-center">
                  <a
                    href={`/CategoryPage/${p.name.toLowerCase()}`}
                    className="btn fw-bold btn-sm mt-2"
                    style={{ backgroundColor: '#ed1C24', color: '#fff' }}
                  >
            
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
