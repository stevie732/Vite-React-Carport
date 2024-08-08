import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Car } from '../types/Car';

const AddCarForm: React.FC = () => {
  const [cars, setCars] = useLocalStorage<Car[]>('cars', []);
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    color: '',
    price: '',
    mileage: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCar: Car = {
      id: Date.now(),
      make: formData.make,
      model: formData.model,
      year: Number(formData.year),
      color: formData.color,
      price: Number(formData.price),
      mileage: Number(formData.mileage),
    };
    setCars((prevCars: Car[]) => {
      const updatedCars = [...prevCars, newCar];
      console.log('Updated cars:', updatedCars);
      return updatedCars;
    });
    console.log('New car added:', newCar);
    navigate('/cars');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Add New Car for {currentUser.email}</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-2">Make</label>
            <input type="text" name="make" id="make" required onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-2">Model</label>
            <input type="text" name="model" id="model" required onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">Year</label>
            <input type="number" name="year" id="year" required onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-2">Color</label>
            <input type="text" name="color" id="color" required onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">Price</label>
            <input type="number" name="price" id="price" required onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="mileage" className="block text-sm font-medium text-gray-700 mb-2">Mileage</label>
            <input type="number" name="mileage" id="mileage" required onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>
        <div className="mt-6">
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Add Car
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCarForm;
