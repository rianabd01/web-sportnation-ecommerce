// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import getProducts from '../api/lib/getProducts';
import Loading from '../components/Loading';
import Error from '../components/Error';
import ProductCard from '../components/Products';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      const { data } = response.data;

      setProducts(data);
    } catch (error) {
      // console.error('Failed to fetch products:' || error);
      setFetchError('Load product failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-screen-xl bg-gray-50 mx-auto p-4 text-gray-900">
      <h1 className="text-inherit text-center font-bold text-2xl">Products</h1>
      {loading ? (
        <Loading></Loading>
      ) : fetchError ? (
        <Error message={fetchError} />
      ) : (
        <ProductCard products={products}></ProductCard>
      )}
    </div>
  );
};

export default Products;
