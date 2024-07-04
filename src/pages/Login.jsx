// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { login } from '../api/lib/login';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await login(username, password);

      localStorage.setItem('token', JSON.stringify(response.data.data));
      window.location.href = '/';
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="max-w-screen-xl bg-inherit mx-auto p-4 dark:text-white">
      <h1 className="text-black dark:text-white text-center font-bold text-2xl">
        Login
      </h1>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-5 w-2/5 mx-auto my-20 bg-gray-100 p-10 rounded-md"
      >
        <div className="flex flex-col gap-2">
          <label className="text-black ">Username:</label>
          <input
            className="text-black bg-gray-50 w-full h-10 px-2"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black ">Password:</label>
          <input
            className="text-black bg-gray-50 w-full h-10 px-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="block w-28 h-10 outline rounded mt-5 hover:rounded-none"
        >
          Login
        </button>
        {error && <p className="text-red-600 text-sm">{error}</p>}{' '}
      </form>
      {/* Menampilkan pesan error */}
    </div>
  );
};
