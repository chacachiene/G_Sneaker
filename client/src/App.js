import React, { useEffect } from 'react';
import Cart from 'components/Cart';
import Products from 'components/Products';
import { useDispatch } from 'react-redux';
import { setProducts } from 'state/index.js';
import { setCart} from 'state/cart.js';
import { getAllProducts } from 'api/productApi.js';
import { getCartItems } from 'api/cartApi.js';
import './app.scss'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts();
      if (data){
        console.log('products: ', data);
        dispatch(setProducts(data));
      }      
    }
    const fetchCart = async () => {
      const data = await getCartItems();
      if (data){
        dispatch(setCart(data));
        console.log('cart: ', data);
      }
    }

    fetchData();
    fetchCart();
  // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="containerApp">
        <div className="containerApp__left">
          <Products />
        </div>
        <div className="containerApp__left">
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
