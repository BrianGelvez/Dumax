const { Router } = require("express");
const router = Router();
const pizzaController = require("../controllers/pizzaController");
const validateOrder = require('../middleware/validateOrder');
const orderController = require('../controllers/orderController');


router.get("/api/pizzas", pizzaController.getPizzasController);
router.get('/api/orders', orderController.getOrdersController);
router.get('/api/orders/:id', orderController.getOrderByIdController);
router.post('/api/orders',validateOrder, orderController.createOrderController);

  
  module.exports = router;