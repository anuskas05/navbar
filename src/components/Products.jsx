import React from 'react';

import oip1 from "../assets/OIP-1.jpg";
import oip2 from "../assets/OIP-2.jpg";
import oip3 from "../assets/OIP-3.jpg";
import oip4 from "../assets/OIP-4.jpg";
import oip5 from "../assets/OIP-5.jpg";
import oip6 from "../assets/OIP-6.jpg";
import oip7 from "../assets/OIP-7.jpg";
import oip8 from "../assets/OIP-8.jpg";
import oip9 from "../assets/OIP-9.jpg";

const products = [
  {
    id: 1,
    name: 'Nike Air Max',
    price: '₹5,999',
    sizes: ['7', '8', '9', '10'],
    image: oip1,
  },
  {
    id: 2,
    name: 'Adidas Ultraboost',
    price: '₹7,499',
    sizes: ['6', '7', '8', '9'],
    image: oip2,
  },
  {
    id: 3,
    name: 'Puma RS-X',
    price: '₹4,299',
    sizes: ['8', '9', '10'],
    image: oip3,
  },
  {
    id: 4,
    name: 'Reebok Classic',
    price: '₹3,799',
    sizes: ['6', '7', '8'],
    image: oip4,
  },
  {
    id: 5,
    name: 'Sketchers GoRun',
    price: '₹6,199',
    sizes: ['7', '9', '10'],
    image: oip5,
  },
  {
    id: 6,
    name: 'Under Armour Charged',
    price: '₹5,499',
    sizes: ['8', '9', '10', '11'],
    image: oip6,
  },
  {
    id: 7,
    name: 'Fila Disruptor',
    price: '₹4,999',
    sizes: ['6', '8', '9'],
    image: oip7,
  },
  {
    id: 8,
    name: 'New Balance 574',
    price: '₹5,299',
    sizes: ['7', '9', '10'],
    image: oip8,
  },
  {
    id: 9,
    name: 'ASICS Gel-Kayano',
    price: '₹6,799',
    sizes: ['8', '9', '11'],
    image: oip9,
  },
];

const Products = () => {
  return (
    <section className="px-6 py-20 container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">🛍️ Our Shoe Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg shadow-md hover:shadow-xl transition p-4">
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-blue-600 font-medium">{product.price}</p>
            <p className="text-sm text-gray-600">Sizes: {product.sizes.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

