import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import "./product.scss";
import nike from "assets/nike.png";
import { addToCart } from "api/cartApi";

import { addItem } from "state/cart.js";

import checkicon from "assets/check.png";

const Products = () => {
  const shopItems = useSelector((state) => state.product.products);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [itemButton, setItemButton] = useState([]);

  useEffect(() => {
    if (!cart || cart.length === 0) {
      setItemButton(shopItems);
    } else if (cart.length > 0) {
      const items = shopItems.filter(
        (item) => !cart.find((i) => i.productId === item._id)
      );
      setItemButton(items);
    }
  }, [shopItems, cart]);

  const handleClick = (item) => {
    const fetchData = async () => {
      const data = await addToCart(item._id);
      if (data) dispatch(addItem(data));
    };
    fetchData();
  };

  return (
    <div className="product">
      <div className="product__logo">
        <img className="product__img" src={nike} alt="logo" />
      </div>
      <div className="product__title">Picked items</div>
      <div className="product__items">
        {shopItems.map((item) => (
          <div key={item.id} className="product__block">
            <div
              className="product__area"
              style={{ backgroundColor: item.color }}
            >
              <img
                className="product__productimg"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="product__name">{item.name}</div>
            <div className="product__description">{item.description}</div>
            <div className="product__bottom">
              <div className="product__price">${item.price}</div>
              {itemButton.find((i) => i._id === item._id) ? (
                <button
                  className="product__add"
                  onClick={() => handleClick(item)}
                >
                  Add to cart
                </button>
              ) : (
                <Avatar sx={{ bgcolor: "#f6c90e" }}>
                  <img className="product__checked" src={checkicon} alt="" />
                </Avatar>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;