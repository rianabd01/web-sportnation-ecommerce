// eslint-disable-next-line no-unused-vars
import React from 'react';
import { PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';

// eslint-disable-next-line react/prop-types
export default function AddToCartButton({ onClick }) {
  return (
    <div className="w-8 h-8 bg-gray-200 rounded-sm">
      <button className="text-inherit p-2 group/cart" onClick={onClick}>
        <PlusIcon className="w-4 h-4 hidden group-hover/cart:block font-bold" />
        <ShoppingCartIcon className="w-4 h-4 group-hover/cart:hidden" />
      </button>
    </div>
  );
}
