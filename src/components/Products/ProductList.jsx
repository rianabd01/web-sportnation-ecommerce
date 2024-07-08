// eslint-disable-next-line no-unused-vars
import React from 'react';
import AddToCartButton from './AddToCartButton';
import Price from './Price';
import Image from './Image';
import Description from './Description';

// eslint-disable-next-line react/prop-types
export default function ProductList({ name, description, price }) {
  return (
    <div className="bg-inherit rounded py-4 relative overflow-hidden group">
      <Image name={name}></Image>
      <Description>{description}</Description>
      <div className="flex justify-between">
        <Price price={price}></Price>
        <AddToCartButton></AddToCartButton>
      </div>
    </div>
  );
}
