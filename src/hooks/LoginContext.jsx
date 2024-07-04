// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext, createContext } from 'react';

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

// eslint-disable-next-line react/prop-types
export const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    const checkLogin = localStorage.getItem('token');
    setIsLogin(checkLogin);
  }, []);

  return (
    <LoginContext.Provider value={{ isLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
