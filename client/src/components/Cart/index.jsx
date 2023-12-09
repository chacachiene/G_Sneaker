import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import delIcon from 'assets/trash.png'
import nike from 'assets/nike.png'
import QuantityInput from 'components/Quality'

import { updateItem, removeItem } from 'state/cart'
import { deleteCartItem, updateCartItem } from 'api/cartApi.js'
import './cart.scss'
const Cart = () => {
  const cart = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()
  const [sum, setSum] = useState(0)

  const handleDelete = item => {

    dispatch(removeItem(item._id))
    const fetchData = async () => {
      const data = await deleteCartItem(item._id);
      if (data){
        console.log('data is deleted' , data)
      }
    }
    fetchData();
  }
  const handleClickLower = (item, v) => {
    if (v ===0){
      dispatch(removeItem(item._id))
      const fetchData = async () => {
        const data = await deleteCartItem(item._id);
        
        if (data){
          console.log('data is deleted' , data)
        }
      }
      fetchData();
    } else{
      const newItem = { ...item };
      newItem.qty = v;
      dispatch(updateItem(newItem))
      const updateData = async () => {
        const data = await updateCartItem(newItem);
        if (data){
          console.log('update data', data)
        }
      }
      updateData();
    }
  }
  useEffect(() => {
    if (cart){
      let sum = 0
      cart.forEach(item => {
        sum += item.price * item.qty
      })
      setSum(sum.toFixed(2))
    }

  }, [cart])
  
  return (
    <div className = "cart">
        <div className="cart__logo">
          <img className="cart__img" src={nike} alt="logo" />
        </div>
        <div className="cart__title">Your cart <span className='cart__total'>${sum}</span></div>
        
        <div className="cart__items">
          {
          !cart|| cart.length===0 ? (
            <div className="cart__empty">No items in cart</div>
          ) :
          cart.map(item => (
            <div key={item.id} className="cart__block">
              <div className="cart__left" style={{ backgroundColor: item.color }}>
                <img className="cart__productimg" src={item.image} alt={item.productName} />
              </div>
              <div className = "cart__right">
                <div className="cart__name">{item.productName}</div>
                <div className="cart__price">${Number(item.price*item.qty).toFixed(2)}</div>
                <div className="cart__bottom">
                    <div className="cart__quantity">
                      <QuantityInput prop={handleClickLower} p={item} valueDef={item.qty}/>  
                    </div>
                    <div className="cart__remove">
                      <button
                        className="cart__del"
                        onClick={() => handleDelete(item)}
                      >
                        <img className="cart__iconDel" src={delIcon} alt="deleteIcon" />
                      </button>
                    </div>
                </div>
                </div>
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default Cart