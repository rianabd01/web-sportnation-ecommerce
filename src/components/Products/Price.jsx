// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Price({ price }) {
  return (
    <p className="text-xl font-['Fjalla_One']">Rp. {price.toLocaleString()}</p>
  );
}
