import instance from '../apiClient';

export const getListCart = (token) => {
  return instance.get('/cart', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
