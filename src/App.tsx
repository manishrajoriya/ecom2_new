import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import { ProductProvider } from './context/ProductContext';
import './styles/Sidebar.css';
import './styles/PdfMerge.css';

// Lazy load components for better performance
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Products = lazy(() => import('./pages/Products'));
const Orders = lazy(() => import('./pages/Orders'));
const Customers = lazy(() => import('./pages/Customers'));
const Settings = lazy(() => import('./pages/Settings'));
const PdfMerge = lazy(() => import('./components/PdfMerge'));

const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <ProductProvider>
          <div className="app">
            <Sidebar />
            <main className="main-content">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/pdf-merge" element={<PdfMerge />} />
                  <Route path="*" element={<div>404 - Page Not Found</div>} />
                </Routes>
              </Suspense>
            </main>
          </div>
        </ProductProvider>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
