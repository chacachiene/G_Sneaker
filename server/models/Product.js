import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    _id: {
        type: Number,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number, 
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    color: {   
        type: String,
        required: false,
    },
},{
    _id:false,
    timestamps: true,
});

const Product = mongoose.model("Product", productSchema);
export default Product;