import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import CarList from './components/CarList';
import CarDetails from './components/CarDetails';
import AddCarForm from './components/AddCarForm';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const isLoggedIn = !!localStorage.getItem('currentUser');
  return isLoggedIn ? element : <Navigate to="/signin" />;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-100">
          <Routes>
            <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
            <Route path="/cars" element={<ProtectedRoute element={<CarList />} />} />
            <Route path="/car/:id" element={<ProtectedRoute element={<CarDetails />} />} />
            <Route path="/add-car" element={<ProtectedRoute element={<AddCarForm />} />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
