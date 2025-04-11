import React from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="card">
        <h2>Welcome to Ecom2 Dashboard</h2>
        <p>Manage your e-commerce store efficiently</p>
      </div>
      <div className="dashboard-grid">
        <div className="card">
          <h3>Quick Stats</h3>
          <div className="stats">
            <div className="stat-item">
              <span className="stat-value">0</span>
              <span className="stat-label">Total Orders</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">0</span>
              <span className="stat-label">Total Products</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">0</span>
              <span className="stat-label">Total Customers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 