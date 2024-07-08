// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProductList from './ProductList';
import PropTypes from 'prop-types';

export default function ProductCard({ products }) {
  return (
    <section className="my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductList key={product.productId} {...product} />
      ))}
    </section>
  );
}

ProductCard.propTypes = {
  products: PropTypes.array.isRequired,
};
