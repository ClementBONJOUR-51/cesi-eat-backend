const express = require('express');
const port = 3000;
const { getAllOrders, getOneOrder, createOrder, updateOrder, deleteOrder, getOrdersWithProducts, getOrdersByCustomerId, getOneOrderWithProducts, getOrdersWithRestorants, getOneOrderWithRestorant, assignDeliveryPersonToOrder, getOrdersWithProductsAndRestorantsByCustomerId, getOrdersWithoutDeliveryPerson, getOrdersByRestorantId, getOneOrderByCustomerId, getStatisticRestaurant, getOrdersByDeliveryId, getStatisticCommercial, getOrdersNotPaidByCustomerId } = require('../controllers/order.controller.js');
const router = express.Router();

router.get('/getAllOrders', async (req, res) => getAllOrders(req, res));
router.get('/getOneOrder/:id', async (req, res) => getOneOrder(req, res));
router.post('/createOrder', async (req, res) => createOrder(req, res));
router.put('/updateOrder/:id', async (req, res) => updateOrder(req, res));
router.delete('/deleteOrder/:id', async (req, res) => deleteOrder(req, res));
router.get('/getOrdersWithProducts', async (req, res) => getOrdersWithProducts(req, res));
router.get('/getOneOrderWithProducts/:id', async (req, res) => getOneOrderWithProducts(req, res));
router.get('/getOrdersWithRestorants', async (req, res) => getOrdersWithRestorants(req, res));
router.get('/getOneOrderWithRestorant/:id', async (req, res) => getOneOrderWithRestorant(req, res));
router.put('/assignDeliveryPersonToOrder/:id', async (req, res) => assignDeliveryPersonToOrder(req, res));
router.get('/getOrdersWithProductsAndRestorantsByCustomerId/:id', async (req, res) => getOrdersWithProductsAndRestorantsByCustomerId(req, res));
router.get('/getOrdersWithoutDeliveryPerson', async (req, res) => getOrdersWithoutDeliveryPerson(req, res));
router.get('/getOrdersByRestorantId/:id', async (req, res) => getOrdersByRestorantId(req, res));
router.get('/getOneOrderByCustomerId/:id', async (req, res) => getOneOrderByCustomerId(req, res));
router.get('/getStatisticRestaurant/:id', async (req, res) => getStatisticRestaurant(req, res));
router.get('/getOrdersByCustomerId/:id', async (req, res) => getOrdersByCustomerId(req, res));
router.get('/getOrdersByDeliveryId/:id', async (req, res) => getOrdersByDeliveryId(req, res));
router.get('/getStatisticCommercial', async (req, res) => getStatisticCommercial(req, res));
router.get('/getOrdersNotPaidByCustomerId/:id', async (req, res) => getOrdersNotPaidByCustomerId(req, res));

module.exports = router;