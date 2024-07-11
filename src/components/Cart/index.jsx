import CartItem from './CartItem';
import { useLogin } from '../../hooks/LoginContext';
import { getListCart } from '../../api/lib/getListCart';
import { useCart } from '../../hooks/CartContext';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { setCartItems } = useCart();

  const { isLogin } = useLogin();
  const userData = JSON.parse(isLogin);

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
  return (
    <section className="flex flex-col shadow-sm shadow-gray-100 border-2 rounded-sm min-h-40 lg:w-2/3">
      <ul className="flex flex-col w-full">
        {products.map((product) => (
          <CartItem key={product.cartId} {...product}></CartItem>
        ))}
      </ul>
    </section>
  );
}
