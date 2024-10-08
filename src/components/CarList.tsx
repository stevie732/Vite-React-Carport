import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../types/Car';

const CarList: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('/api/cars');
        const data = await response.json();
        setCars(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Car Inventory</h1>
      {cars.length === 0 ? (
        <p>No cars in the inventory. Add some cars!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <Link
              key={car.id}
              to={`/car/${car.id}`}
              className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">
                {car.make} {car.model}
              </h2>
              <p className="text-gray-600 mb-2">Year: {car.year}</p>
              <p className="text-gray-600 mb-2">Color: {car.color}</p>
              <p className="text-gray-600 mb-2">
                Mileage: {car.mileage.toLocaleString()} miles
              </p>
              <p className="text-xl font-bold text-blue-600">
                ${car.price.toLocaleString()}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CarList;
