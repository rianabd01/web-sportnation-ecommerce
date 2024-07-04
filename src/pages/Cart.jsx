/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ButtonComponents from '../components/Button';
import { useLogin } from '../hooks/LoginContext';
import { getListCart } from '../api/lib/getListCart';
import { useCart } from '../hooks/CartContext';

const Cart = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { setCartItems } = useCart();

  const { isLogin } = useLogin();
  const userData = JSON.parse(isLogin);

  const calculateTotal = (checked) => {
    const totalAmount = checked.reduce((acc, product) => {
      return acc + product.product.price * product.quantity;
    }, 0);
    setTotal(totalAmount);
  };

  const getCartList = async () => {
    try {
      const { token } = userData;
      const response = await getListCart(token);
      setProducts(response.data.data);
      setError('');
    } catch (err) {
      // console.log(err);
      setError('Failed to fetch cart items.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userData) {
      getCartList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  console.log('halo', products);
  const decreaseOrderQtyHandler = (productId) => {
    // Implement logic to decrease order quantity
  };

  const increaseOrderQtyHandler = (productId) => {
    // Implement logic to increase order quantity
  };

  const removeProductHandler = (productId) => {
    // Implement logic to remove product from cart
  };

  const checkoutHandler = () => {
    // Implement checkout logic
    setCartItems(checked);
    navigate('/checkout');
  };

  const [checked, setChecked] = useState([]);

  const handleCheck = (cartId) => {
    setChecked((prevChecked) => {
      const isAlreadyChecked = prevChecked.some(
        (item) => item.cartId === cartId,
      );
      if (isAlreadyChecked) {
        const checkResult = prevChecked.filter(
          (item) => item.cartId !== cartId,
        );
        calculateTotal(checkResult);
        return checkResult;
      } else {
        const productToAdd = products.find(
          (product) => product.cartId === cartId,
        );
        const checkResult = [...prevChecked, productToAdd];
        calculateTotal(checkResult);
        return checkResult;
      }
    });
  };

  console.log(checked);

  if (!isLogin) {
    return <p>Please log in to view your cart.</p>;
  }

  return (
    <div className="flex flex-col max-w-screen-xl min-h-screen bg-inherit mx-auto p-4 dark:text-white gap-10">
      <h1 className="text-black dark:text-white text-start font-bold text-2xl">
        Cart
      </h1>
      <div className="lg:flex lg:flex-row">
        <section className="flex flex-col dark:border-gray-800 border-gray-200 border-2 rounded-sm min-h-40 lg:w-2/3">
          {loading ? (
            <p className="m-auto text-gray-500">Loading...</p>
          ) : error ? (
            <p className="m-auto text-red-500">{error}</p>
          ) : products.length === 0 ? (
            <p className="m-auto text-gray-500">
              Cart is empty,{' '}
              <Link to="/products" className="underline">
                buy some stuff?
              </Link>
            </p>
          ) : (
            <ul className="flex flex-col w-full">
              {products.map((product) => (
                <li
                  key={product.cartId}
                  className="flex flex-wrap m-5 justify-between gap-5"
                >
                  <div className="flex flex-row gap-5 w-fit">
                    <input
                      type="checkbox"
                      className="w-4 h-4 m-auto accent-blue-950 border-black cursor-pointer focus:ring-blue-950 dark:focus:ring-blue-950 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={product.isChecked}
                      onChange={() => handleCheck(product.cartId)}
                    />
                    <img
                      src="https://via.placeholder.com/300"
                      alt={product.product.name}
                      className="w-20 h-20 md:w-40 md:h-40 object-cover"
                    />
                  </div>
                  <div className="flex flex-row flex-[3] justify-between">
                    <div className="flex flex-col justify-between">
                      <h3 className="text-start align-middle font-bold">
                        {product.product.name}
                      </h3>
                      <div className="flex flex-row justify-evenly border-[1px] border-black dark:border-white w-20 md:w-24">
                        <button
                          className="text-md md:text-xl font-semibold text-center"
                          onClick={() =>
                            decreaseOrderQtyHandler(product.cartId)
                          }
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="text-center text-md md:text-xl w-10 focus:outline-none bg-transparent text-black dark:text-white"
                          readOnly
                          value={product.quantity}
                        />
                        <button
                          className="text-md md:text-xl font-semibold text-center"
                          onClick={() =>
                            increaseOrderQtyHandler(product.cartId)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <button
                        className="text-end"
                        onClick={() => removeProductHandler(product.cartId)}
                      >
                        X
                      </button>
                      <p className="font-['Fjalla_one'] font-bold">
                        Rp.{' '}
                        {Number(product.product.price) *
                          Number(product.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
        <div className="flex flex-row justify-between sticky bottom-0 bg-inherit h-20 p-5 bg-white dark:bg-gray-900 lg:static lg:w-1/3">
          <div className="flex flex-col">
            <h3>Total</h3>
            <p className="font-['Fjalla_one']">Rp. {total.toLocaleString()}</p>
          </div>
          <ButtonComponents className="py-2 px-4" onClick={checkoutHandler}>
            Checkout
          </ButtonComponents>
        </div>
      </div>
    </div>
  );
};

export default Cart;
