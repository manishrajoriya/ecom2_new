import React from 'react';
import './Settings.css';

const Settings: React.FC = () => {
  return (
    <div className="settings">
      <div className="card">
        <h2>Settings</h2>
        <div className="settings-grid">
          <div className="settings-section">
            <h3>Store Information</h3>
            <div className="form-group">
              <label htmlFor="storeName">Store Name</label>
              <input type="text" id="storeName" placeholder="Enter store name" />
            </div>
            <div className="form-group">
              <label htmlFor="storeEmail">Store Email</label>
              <input type="email" id="storeEmail" placeholder="Enter store email" />
            </div>
          </div>
          
          <div className="settings-section">
            <h3>Payment Settings</h3>
            <div className="form-group">
              <label htmlFor="currency">Currency</label>
              <select id="currency" aria-label="Select currency">
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>
          </div>
          
          <div className="settings-section">
            <h3>Shipping Settings</h3>
            <div className="form-group">
              <label htmlFor="shippingMethod">Default Shipping Method</label>
              <select id="shippingMethod" aria-label="Select shipping method">
                <option value="standard">Standard Shipping</option>
                <option value="express">Express Shipping</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="settings-actions">
          <button className="save-btn">Save Changes</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Settings; 