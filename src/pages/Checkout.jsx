// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useCart } from '../hooks/CartContext';
import { useState } from 'react';

const Checkout = () => {
  const { cartItems } = useCart();

  const [expeditionCost, setExpeditionCost] = useState(0);

  const expeditionPrice = [
    {
      id: 1,
      name: 'JNE',
      price: 20000,
    },
    {
      id: 2,
      name: 'JNT',
      price: 30000,
    },
    {
      id: 3,
      name: 'TIKI',
      price: 40000,
    },
  ];
  const expeditionHandler = (price) => {
    console.log(price);
    setExpeditionCost(price);
  };
  const handleChange = (event) => {
    const selectedId = parseInt(event.target.value, 10);
    const selectedExpedition = expeditionPrice.find(
      (item) => item.id === selectedId,
    );
    if (selectedExpedition) {
      expeditionHandler(selectedExpedition.price);
    }
  };
  return (
    <>
      <div className="max-w-screen-xl bg-inherit mx-auto p-4 dark:text-white">
        <h1 className="text-black dark:text-white text-center font-bold text-2xl">
          Home
        </h1>
        <section className="flex flex-row justify-between">
          <div>
            <div className="flex flex-col ">
              <label htmlFor="address">Address</label>
              <textarea
                name="address"
                id="address"
                cols="30"
                rows="10"
                className="text-black p-2 w-96 h-10"
              ></textarea>
            </div>
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.product.productId}
                  className="flex flex-row gap-2 my-5"
                >
                  <img
                    src="https://via.placeholder.com/300"
                    alt=""
                    className="w-20 h-20 object-cover border-2 border-black dark:border-black"
                  />
                  <div className="flex flex-col justify-between ">
                    <p>{item.product.name}</p>
                    <p className="text-gray-400">
                      {item.quantity}x{item.product.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <select
              name="expedition"
              id=""
              className="bg-inherit"
              onChange={handleChange}
            >
              {expeditionPrice.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} {item.price}
                </option>
              ))}
            </select>
            <p>
              Total:{' '}
              {(
                cartItems.reduce(
                  (acc, item) => acc + item.product.price * item.quantity,
                  0,
                ) + expeditionCost
              ).toLocaleString()}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Checkout;
