import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Car } from '../types/Car';

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [cars, setCars] = useLocalStorage<Car[]>('cars', []);
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return <div>Car not found</div>;
  }

  const handleDelete = () => {
    const updatedCars = cars.filter((c) => c.id !== car.id);
    setCars(updatedCars);
    navigate('/cars');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Car Details for {currentUser.email}</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-xl mb-4"><span className="font-semibold">Make:</span> {car.make}</p>
        <p className="text-xl mb-4"><span className="font-semibold">Model:</span> {car.model}</p>
        <p className="text-xl mb-4"><span className="font-semibold">Year:</span> {car.year}</p>
        <p className="text-xl mb-4"><span className="font-semibold">Color:</span> {car.color}</p>
        <p className="text-xl mb-4"><span className="font-semibold">Mileage:</span> {car.mileage.toLocaleString()} miles</p>
        <p className="text-2xl font-bold text-blue-600 mb-6">${car.price.toLocaleString()}</p>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Delete Car
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
