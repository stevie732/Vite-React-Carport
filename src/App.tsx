import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import CarList from './components/CarList';
import CarDetails from './components/CarDetails';
import AddCarForm from './components/AddCarForm';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cars" element={<CarList />} />
            <Route path="/car/:id" element={<CarDetails />} />
            <Route path="/add-car" element={<AddCarForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
