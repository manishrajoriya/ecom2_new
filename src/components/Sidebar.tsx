import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span className="logo">🛍️</span>
        <h2>Ecom2</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              <span className="icon">📊</span>
              <span className="text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>
              <span className="icon">📦</span>
              <span className="text">Products</span>
            </Link>
          </li>
          <li>
            <Link to="/orders" className={location.pathname === '/orders' ? 'active' : ''}>
              <span className="icon">📋</span>
              <span className="text">Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/customers" className={location.pathname === '/customers' ? 'active' : ''}>
              <span className="icon">👥</span>
              <span className="text">Customers</span>
            </Link>
          </li>
          <li>
            <Link to="/pdf-merge" className={location.pathname === '/pdf-merge' ? 'active' : ''}>
              <span className="icon">📄</span>
              <span className="text">PDF Merge</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className={location.pathname === '/settings' ? 'active' : ''}>
              <span className="icon">⚙️</span>
              <span className="text">Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 