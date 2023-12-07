import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';
const AutoIncrement = AutoIncrementFactory(mongoose);

const cartItemSchema = mongoose.Schema({

    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number, 
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    productId: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    color:{
        type: String,
        required: false,
    },
});

const CartItem = mongoose.model("CartItem", cartItemSchema);
export default CartItem;