import React from 'react';
import './Orders.css';

const Orders: React.FC = () => {
  return (
    <div className="orders">
      <div className="card">
        <div className="orders-header">
          <h2>Orders</h2>
          <div className="orders-filters">
            <select className="status-filter" aria-label="Filter by status">
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
        <div className="orders-list">
          <p>No orders found. Orders will appear here when customers place them.</p>
        </div>
      </div>
    </div>
  );
};

export default Orders; 