import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
import CategoryPage from './Pages/CategoryPage'
import AboutPage from './Sections/AboutPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


export default function App() {
return (
<div>
<Navbar />
<main className="flex-grow">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/Products" element={<Products />} />
<Route path="/Contact" element={<Contact />} />
<Route path="/products/:category" element={<CategoryPage />} />
<Route path="/About" element={<AboutPage />} />
</Routes>
</main>
<Footer />
</div>
)
}