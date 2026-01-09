import React from 'react';
import { useParams } from 'react-router-dom';

// Import all images as ES modules
import econdairyImg from '../assets/ECONDAIRY11.jpg';
import standardDmImg from '../assets/STANDARD DM.jpg';
import hiyieldDmImg from '../assets/HIYIELD DM.jpg';
import cpellImg from '../assets/CPELL.png';
import steamersImg from '../assets/SEREM STEAMERS.jpg';
import chiduckImg from '../assets/CHIDUCK.jpg';
import growemashImg from '../assets/GROWEMASH.jpg';
import layermashImg from '../assets/LAYERMASH.jpg';
import kienyeWithOmenaImg from '../assets/KIENYEWITHOMENA.jpg';
import kenyemashImg from '../assets/KENYEMASH.jpg';
import kienyegrowersImg from '../assets/KIENYEGROWERS.jpg';
import kienyelayesImg from '../assets/KIENYELAYES.jpg';
import shemealImg from '../assets/SHEMEAL.jpg';
import shepelletsImg from '../assets/SHEPELLETS.jpg';
import dogoMealImg from '../assets/DOGO MEAL.jpg';

const allProducts = {
  dairy: [
    { 
      id: 1, 
      name: 'Serem Economy Dairy Meal', 
      img: econdairyImg,
      description: 'A balanced dairy feed ideal for low-yield cows, promoting consistent milk flow.'
    },
    { 
      id: 2, 
      name: 'Serem Standard Dairy Meal', 
      img: standardDmImg,
      description: 'Formulated for medium-yield cows to support daily milk production and cow health.'
    },
    { 
      id: 3, 
      name: 'Serem Hi-Yield Dairy Meal', 
      img: hiyieldDmImg,
      description: 'High-protein formula designed for high-yielding dairy cows for optimal performance.'
    },
    { 
      id: 4, 
      name: 'Serem Calf Pellets', 
      img: cpellImg,
      description: 'Nutrient-rich starter feed that promotes early growth and development in calves.'
    },
    { 
      id: 5, 
      name: 'Serem Steamers', 
      img: steamersImg,
      description: 'Energy-dense feed to help maintain body condition in dairy cows post-calving.'
    },
  ],
  layers: [
    { 
      id: 6, 
      name: 'Serem Chick and Duckling Mash', 
      img: chiduckImg,
      description: 'Balanced starter mash rich in protein for young chicks and ducklings.'
    },
    { 
      id: 7, 
      name: 'Serem Growers Mash', 
      img: growemashImg,
      description: 'Specially formulated feed for growing poultry to build strong bones and muscles.'
    },
    { 
      id: 8, 
      name: 'Serem Layers Mash', 
      img: layermashImg,
      description: 'Complete feed designed to boost egg production and shell quality in layers.'
    },
  ],
  kienyeji: [
    { 
      id: 9, 
      name: 'Serem Kienyeji Mash with Omena', 
      img: kienyeWithOmenaImg,
      description: 'High-protein traditional poultry feed enriched with omena for healthy growth.'
    },
    { 
      id: 10, 
      name: 'Serem Kienyeji Mash', 
      img: kenyemashImg,
      description: 'Balanced feed for indigenous chickens raised under free-range conditions.'
    },
    { 
      id: 11, 
      name: 'Serem Kienyeji Growers Mash', 
      img: kienyegrowersImg,
      description: 'Supports muscle and bone growth in developing Kienyeji chickens.'
    },
    { 
      id: 12, 
      name: 'Serem Kienyeji Layers Mash', 
      img: kienyelayesImg,
      description: 'Formulated to enhance egg yield and nutrition in Kienyeji hens.'
    },
  ],
  sheep: [
    { 
      id: 13, 
      name: 'Serem Sheep Meal', 
      img: shemealImg,
      description: 'High-energy formula ideal for fattening and maintaining healthy sheep.'
    },
    { 
      id: 14, 
      name: 'Serem Sheep Pellets', 
      img: shepelletsImg,
      description: 'Compact, nutrient-rich pellets for easy feeding and improved digestion.'
    },
    { 
      id: 15, 
      name: 'Serem Lamb & Kids Pellets', 
      img: shepelletsImg,
      description: 'Supports rapid growth and muscle development in lambs and young goats.'
    },
  ],

  dog: [
  {
    id: 16,
    name: 'Serem Dog Meal',
    img: dogoMealImg,
    description: 'A complete and balanced dog food rich in proteins, vitamins, and omega fats.',
  },
],

};

export default function CategoryPage() {
  const { category } = useParams();
  const products = allProducts[category as keyof typeof allProducts];

  if (!products) {
    return (
      <div className="container py-5 text-center">
        <h3>Category Not Found</h3>
      </div>
    );
  }

  return (
    <div className="container pt-3 pb-5">
      <h2 className="mb-3 text-capitalize">{category} Products</h2>
      
      {/* Category Description */}
      <p className="mb-4">
        {category === 'dairy' && 'Our dairy feeds are specially formulated to maximize milk yield and maintain cow health.'}
        {category === 'layers' && 'Our layers mash products are designed to support egg production and bird vitality.'}
        {category === 'kienyeji' && 'Our kienyeji feeds combine traditional nutrition with modern science for healthy indigenous poultry.'}
        {category === 'sheep' && 'Our sheep feeds provide balanced nutrition for weight gain and strong immune systems.'}
        {category === 'dog' && 'Our dog meal is a complete and balanced food that promotes overall health and vitality for your canine companions.'}
      </p>

      {/* Product list in rows */}
      <div className="row g-3">
        {products.map((product) => (
          <div className="col-12" key={product.id}>
            <div className="card flex-row shadow-sm h-100 border-0 rounded-3">
              <img 
                src={product.img} 
                className="card-img-left rounded-start" 
                alt={product.name} 
                style={{ width: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title mb-2">{product.name}</h5>
                <p className="text-muted small mb-0">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
