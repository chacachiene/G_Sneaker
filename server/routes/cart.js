import express from 'express';
import { getCartItems, updateCartItems, deleteCartItem, createCartItem } from '../controllers/cart.controller.js';

const router = express.Router();
router.get('/', getCartItems);
router.put('/:id', updateCartItems);
router.delete('/:id', deleteCartItem);
router.post('/', createCartItem);


export default router;