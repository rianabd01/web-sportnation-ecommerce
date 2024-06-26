// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ButtonComponents from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/CartContext';

const Cart = () => {
  const navigate = useNavigate();

  const initialProducts = [
    {
      id: 1,
      name: 'Produk 1',
      price: 10000,
      isChecked: false,
      stockQuantity: 1,
      orderQuantity: 1,
    },
    {
      id: 2,
      name: 'Produk 2',
      price: 10000,
      isChecked: false,
      stockQuantity: 1,
      orderQuantity: 1,
    },
    {
      id: 3,
      name: 'Produk 3',
      price: 70000,
      isChecked: false,
      stockQuantity: 5,
      orderQuantity: 1,
    },
    {
      id: 4,
      name: 'Produk 3',
      price: 70000,
      isChecked: false,
      stockQuantity: 5,
      orderQuantity: 1,
    },
    {
      id: 5,
      name: 'Produk 3',
      price: 70000,
      isChecked: false,
      stockQuantity: 5,
      orderQuantity: 1,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [total, setTotal] = useState(0);
  // const [orderQty, setOrderQty] = useState(initialProducts);

  // Fungsi untuk menghitung total harga
  useEffect(() => {
    const total = products.reduce((acc, product) => {
      if (product.isChecked) {
        return acc + product.price * product.orderQuantity;
      }
      return acc;
    }, 0);
    setTotal(total);
  }, [products]);

  const increaseOrderQtyHandler = (id) => {
    // let order = orderQty;
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        if (product.orderQuantity < product.stockQuantity) {
          return { ...product, orderQuantity: product.orderQuantity + 1 };
        }
        return product;
      } else {
        return product;
      }
    });

    setProducts(updatedProducts);
  };
  const decreaseOrderQtyHandler = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        if (product.orderQuantity > 1) {
          return { ...product, orderQuantity: product.orderQuantity - 1 };
        }
        return product;
      } else {
        return product;
      }
    });

    setProducts(updatedProducts);
  };

  // Fungsi untuk meng-handle perubahan checkbox
  const handleCheck = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, isChecked: !product.isChecked }
        : product,
    );
    setProducts(updatedProducts);
  };

  const removeProductHandler = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  // Checkout handler
  const { cartItems, setCartItems } = useCart();
  const checkoutHandler = () => {
    const productCheckout = products.filter(
      (product) => product.isChecked == true,
    );

    setCartItems(productCheckout);
    console.log(cartItems);

    navigate('/checkout');
  };

  return (
    <>
      <div className="flex flex-col max-w-screen-xl min-h-screen bg-inherit mx-auto p-4 dark:text-white gap-10">
        <h1 className="text-black dark:text-white text-start font-bold text-2xl">
          Cart
        </h1>
        <div className="lg:flex lg:flex-row">
          <section className="flex flex-col dark:border-gray-800 border-gray-200 border-2 rounded-sm min-h-40 lg:w-2/3">
            {products.length === 0 ? (
              <p className="m-auto text-gray-500">
                Cart is empty,{' '}
                <Link to="/products" className="underline">
                  buy some stuff?
                </Link>
              </p>
            ) : (
              ''
            )}
            <ul className="flex flex-col w-full ">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex flex-wrap m-5 justify-between gap-5"
                >
                  <div className="flex flex-row gap-5 w-fit">
                    <input
                      type="checkbox"
                      className="w-4 h-4 m-auto accent-blue-950  border-black cursor-pointer focus:ring-blue-950 dark:focus:ring-blue-950 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={product.isChecked}
                      onChange={() => handleCheck(product.id)}
                    />
                    <img
                      src="https://via.placeholder.com/300"
                      alt=""
                      className="w-20 h-20 md:w-40 md:h-40 object-cover"
                    />
                  </div>

                  <div className="flex flex-row flex-[3] justify-between">
                    <div className="flex flex-col justify-between">
                      <h3 className="text-start align-middle font-bold">
                        {product.name}
                      </h3>

                      <div className="flex flex-row justify-evenly border-[1px] border-black dark:border-white w-20 md:w-24">
                        <button
                          className="text-md md:text-xl font-semibold text-center"
                          onClick={() => decreaseOrderQtyHandler(product.id)}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="text-center text-md md:text-xl w-10 focus:outline-none bg-transparent text-black dark:text-white"
                          readOnly
                          value={product.orderQuantity}
                        />
                        <button
                          className="text-md md:text-xl font-semibold text-center"
                          onClick={() => increaseOrderQtyHandler(product.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <button
                        className="text-end"
                        onClick={() => removeProductHandler(product.id)}
                      >
                        X
                      </button>
                      <p className="font-['Fjalla_one'] font-bold">
                        Rp.{' '}
                        {Number(product.price) * Number(product.orderQuantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <div className="flex flex-row justify-between sticky bottom-0 bg-inherit h-20 p-5 bg-white dark:bg-gray-900 lg:static lg:w-1/3">
            <div className="flex flex-col">
              <h3>Total</h3>
              <p className="font-['Fjalla_one']">
                Rp. {total.toLocaleString()}
              </p>
            </div>
            <ButtonComponents
              className="py-2 px-4"
              onClick={() => {
                checkoutHandler();
              }}
            >
              Checkout
            </ButtonComponents>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
