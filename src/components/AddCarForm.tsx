// AddCarForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car } from '../types/Car';

const AddCarForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const newCar: Car = {
        id: Number(formData.id),
        make: formData.make,
        model: formData.model,
        year: Number(formData.year),
        color: formData.color,
        price: Number(formData.price),
        mileage: Number(formData.mileage),
      };

      const response = await fetch('/api/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCar),
      });

      if (response.ok) {
        console.log('Car added successfully');
        navigate('/cars');
      } else {
        console.error('Failed to add car');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold">Add New Car</h1>
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="make" className="block mb-2 text-sm font-medium text-gray-700">Make</label>
            <input type="text" name="make" id="make" required onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="model" className="block mb-2 text-sm font-medium text-gray-700">Model</label>
            <input type="text" name="model" id="model" required onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-700">Year</label>
            <input type="number" name="year" id="year" required onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-700">Color</label>
            <input type="text" name="color" id="color" required onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-700">Price</label>
            <input type="number" name="price" id="price" required onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="mileage" className="block mb-2 text-sm font-medium text-gray-700">Mileage</label>
            <input type="number" name="mileage" id="mileage" required onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>
        <div className="mt-6">
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
            Add Car
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCarForm;
