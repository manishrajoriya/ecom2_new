import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, ProductFormData } from '../types/product';
import { v4 as uuidv4 } from 'uuid';

interface ProductContextType {
  products: Product[];
  addProduct: (product: ProductFormData) => void;
  updateProduct: (id: string, product: ProductFormData) => void;
  deleteProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (productData: ProductFormData) => {
    const newProduct: Product = {
      ...productData,
      id: uuidv4(),
    };
    setProducts(prevProducts => [...prevProducts, newProduct]);
  };

  const updateProduct = (id: string, productData: ProductFormData) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, ...productData } : product
      )
    );
  };

  const deleteProduct = (id: string) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}; 