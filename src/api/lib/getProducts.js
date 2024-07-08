import instance from '../apiClient';

export default function getProducts() {
  return instance.get('/products', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}
