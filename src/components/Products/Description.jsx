// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

export default function Description({ children }) {
  const checkDescriptionLength = (description, n = 75) => {
    if (description.length > n) {
      return description.slice(0, n) + ' ...';
    }
    return description;
  };
  return (
    <p className="text-sm text-center my-4">
      {checkDescriptionLength(children)}
    </p>
  );
}

Description.propTypes = {
  children: PropTypes.string.isRequired,
};
