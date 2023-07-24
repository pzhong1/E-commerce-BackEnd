const router = require('express').Router();// import express package libaray and create new routes

const categoryRoutes = require('./category-routes');// import category-routes
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);//tell the router when a request's path starts with '/categories', the 'categoryRoutes' shoul used to handle the request
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
