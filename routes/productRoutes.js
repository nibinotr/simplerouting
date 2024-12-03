
const express = require('express');
const router = express.Router();
const products = require('../products'); // Assuming this imports an array of product objects

// Get all products
router.get('/', (req, res) => {
    try {
        res.status(200).json(products);
    } catch (error) {
        // Fixed typo 'massage' to 'message'
        res.status(404).json({ error: error.message });
    }
});

// Get product by ID
router.get('/:id', (req, res) => {
    try {
        const productId = parseInt(req.params.id); // Convert the id to an integer

        // Fixed typo: 'productID' should be 'productId' (case-sensitive)
        const product = products.find(prod => prod.id === productId);

        res.status(200).json(product);
    } catch (error) {
        // Fixed typo 'massage' to 'message'
        res.status(404).json({ error: error.message });
    }
});

//Post-create product

router.post('/', (req, res) => {
    try {
        console.log(req.body)
        // res.status(200).json(products);
    } catch (error) {
        // Fixed typo 'massage' to 'message'
        res.status(404).json({ error: error.message });
    }
});

module.exports = router;

