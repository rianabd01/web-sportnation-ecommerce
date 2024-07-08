// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Image({ name }) {
  return (
    <div className="w-100 h-100 relative overflow-hidden rounded">
      <div className="absolute overflow-hidden bottom-[-50%] opacity-0 left-0 right-0 bg-black bg-opacity-20 text-white p-2 text-center group-hover:bottom-[0] group-hover:opacity-100 duration-300">
        <p className="font-bold">{name}</p>
      </div>
      <img
        src="https://via.placeholder.com/300"
        alt={name}
        className="w-100 h-100 object-cover"
      />
    </div>
  );
}
