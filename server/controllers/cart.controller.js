import CartItem from "../models/Cart.js";
import Product from "../models/Product.js";

export const getCartItems = async (req, res) => {
    try {
        const cartItems = await CartItem.find();
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateCartItems = async (req, res) => {
    try{
        const { id } = req.params;
        const {change} = req.body;
        const cartItemExists = await CartItem.findById(id);
        const newQty =  change.qty;
        if (newQty < 1){
            await CartItem.deleteOne({ _id: id });
            res.status(200).json({ message: "Cart item deleted successfully.", cartItemExists });
        }
        if (!cartItemExists) return res.status(404).send('No cart item with that id');
        const updateCartItem = await CartItem.findByIdAndUpdate(id, { qty: newQty }, { new: true });
        res.status(200).json(updateCartItem);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const deleteCartItem = async (req, res) => {
    try{
        const { id } = req.params;
        const cartItemExists = await CartItem.findById(id);
        
        if (!cartItemExists) return res.status(404).send('No cart item with that id');
        await CartItem.deleteOne({ _id: id });
        res.status(200).json({ message: "Cart item deleted successfully.", cartItemExists });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }   
}

export const createCartItem = async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await Product.findById(productId);
        const newCartItem = new CartItem({
            productName: product.name,
            price: product.price,
            image: product.image,
            qty: 1,
            productId: product._id,
            color: product.color,
        });
        const newCartItemSave = await newCartItem.save();
        res.status(201).json(newCartItemSave);
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
}