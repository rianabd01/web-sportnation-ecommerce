import instance from '../apiClient';

export const getProducts = () => {
  return instance.get('/products', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
