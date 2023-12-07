import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    try{
    const { id } = req.params;
    const product = req.body;
    const productExists = await Product.findById(id);
    if (!productExists) return res.status(404).send('No product with that id');
    const updateProduct = await Product.findByIdAndUpdate(id, product, { new: true });
    res.status(200).json(updateProduct);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    try{
        const { id } = req.params;
        const productExists = await Product.findById(id);
        if (!productExists) return res.status(404).send('No product with that id');
        await Product.deleteOne({ _id: id });
        res.status(200).json({ message: "Product deleted successfully.", productExists });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }   
}
