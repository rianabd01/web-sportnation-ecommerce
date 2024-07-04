// auth.js
import instance from '../apiClient';

export const login = (username, password) => {
  return instance.post('/auth/login', { username, password });
};
