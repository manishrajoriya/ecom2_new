import React from 'react';
import './Customers.css';

const Customers: React.FC = () => {
  return (
    <div className="customers">
      <div className="card">
        <div className="customers-header">
          <h2>Customers</h2>
          <div className="customers-filters">
            <input type="text" placeholder="Search customers..." className="search-input" />
            <select className="sort-filter" aria-label="Sort by">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>
        <div className="customers-list">
          <p>No customers found. Customers will appear here when they register.</p>
        </div>
      </div>
    </div>
  );
};

export default Customers; 