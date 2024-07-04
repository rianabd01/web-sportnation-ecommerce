// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { getProducts } from '../api/lib/getProducts';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      const { data } = response.data;
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
      setFetchError('Load product failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const checkDescriptionLength = (description, n = 75) => {
    if (description.length > n) {
      return description.slice(0, n) + ' ...';
    }
    return description;
  };

  return (
    <div className="max-w-screen-xl bg-inherit mx-auto p-4 dark:text-white">
      <h1 className="text-black dark:text-white text-center font-bold text-2xl">
        Products
      </h1>
      {loading ? (
        <Loading />
      ) : fetchError ? (
        <Error message={fetchError} />
      ) : (
        <section className="my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.productId}
              className="bg-inherit dark:shadow rounded py-4 relative overflow-hidden group"
            >
              <div className="w-100 h-100 relative overflow-hidden rounded">
                <div className="absolute overflow-hidden bottom-[-50%] opacity-0 left-0 right-0 bg-black bg-opacity-20 text-white p-2 text-center group-hover:bottom-[0] group-hover:opacity-100 duration-300">
                  <p className="font-bold">{product.name}</p>
                </div>
                <img
                  src="https://via.placeholder.com/300"
                  alt={product.name}
                  className="w-100 h-100 object-cover"
                />
              </div>
              <p className="text-sm text-center my-4">
                {checkDescriptionLength(product.description)}
              </p>

              <div className="flex justify-between">
                <p className="text-xl font-['Fjalla_One']">
                  Rp. {product.price.toLocaleString()}
                </p>
                <div className="w-8 h-8 bg-gray-100 rounded-sm">
                  <button className="dark:bg-white text-blue-800 dark:text-black p-2 group/cart">
                    <PlusIcon className="w-4 h-4 hidden group-hover/cart:block font-bold" />
                    <ShoppingCartIcon className="w-4 h-4 group-hover/cart:hidden" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Products;
