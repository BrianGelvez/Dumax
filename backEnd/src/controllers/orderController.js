const orderService = require('../services/orderService');

const getOrdersController = async (req, res) => {
  try {
    const orders = await orderService.getOrdersService();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Se ha producido un error al recuperar los pedidos.' });
  }
};

const getOrderByIdController = async (req, res) => {
  try {
    const order = await orderService.getOrderByIdService(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Pedido no encontrado.' });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Se ha producido un error al recuperar el pedido.' });
  }
};

const createOrderController = async (req, res) => {
  try {
    const newOrder = await orderService.createOrderService(req.body.items);
    res.json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Se ha producido un error al crear el pedido.' });
  }
};

module.exports = {
  getOrdersController,
  getOrderByIdController,
  createOrderController
};