const route = require('express').Router();

route.get('/', (req, res) => {
    res.json({
        message: `homepage`
    })
})

const userRoutes = require('./user');
route.use('/users', userRoutes);

const productRoutes = require('./product');
route.use('/products', productRoutes);

const LineItemRoutes = require('./line_item');
route.use('/line_items', LineItemRoutes);

const orderRoutes = require('./order');
route.use('/orders', orderRoutes);

const productImageRoutes = require('./product_image');
route.use('/product_images', productImageRoutes);

const shoppingCartRoutes = require('./shopping_cart');
route.use('/shopping_carts', shoppingCartRoutes);


module.exports = route;