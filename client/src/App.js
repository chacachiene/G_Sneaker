import React, { useEffect } from 'react';
import Cart from 'components/Cart';
import Products from 'components/Products';
import { Box, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
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
      dispatch(setProducts(data));
    }
    const fetchCart = async () => {
      const data = await getCartItems();
      dispatch(setCart(data));
    }

    fetchCart();
    fetchData();
  }, []);

  const isPc = useMediaQuery('(min-width: 1000px)');
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
