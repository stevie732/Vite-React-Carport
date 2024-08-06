import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Car } from '../types/Car';

const Dashboard: React.FC = () => {
  const [cars] = useLocalStorage<Car[]>('cars', []);
  const navigate = useNavigate();

  const totalCars = cars.length;
  const totalValue = cars.reduce((sum, car) => sum + car.price, 0);
  const averageMileage = cars.length > 0 ? cars.reduce((sum, car) => sum + car.mileage, 0) / cars.length : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Total Cars</h2>
          <p className="text-4xl font-bold">{totalCars}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Total Value</h2>
          <p className="text-4xl font-bold">${totalValue.toLocaleString()}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Average Mileage</h2>
          <p className="text-4xl font-bold">{averageMileage.toFixed(0)} miles</p>
        </div>
      </div>
      <button
        onClick={() => navigate('/cars')}
        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        View Inventory
      </button>
    </div>
  );
};

export default Dashboard;
