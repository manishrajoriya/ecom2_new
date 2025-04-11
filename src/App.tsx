import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PdfMerge from './components/PdfMerge';
import './styles/Sidebar.css';
import './styles/PdfMerge.css';

const Dashboard: React.FC = () => (
  <div className="card">
    <h2>Welcome to Ecom2 Dashboard</h2>
    <p>Manage your e-commerce store efficiently</p>
  </div>
);

const Products: React.FC = () => (
  <div className="card">
    <h2>Products Management</h2>
    <p>View and manage your product catalog</p>
  </div>
);

const Orders: React.FC = () => (
  <div className="card">
    <h2>Orders</h2>
    <p>Track and manage customer orders</p>
  </div>
);

const Customers: React.FC = () => (
  <div className="card">
    <h2>Customers</h2>
    <p>Manage your customer database</p>
  </div>
);

const Settings: React.FC = () => (
  <div className="card">
    <h2>Settings</h2>
    <p>Configure your store settings</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/pdf-merge" element={<PdfMerge />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
