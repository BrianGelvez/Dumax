const Order = require('../models/order');
const OrderItem = require('../models/orderItem');

let orders = []; 

const getOrdersService = () => {
  return orders;
};

const getOrderByIdService = (id) => {
  return orders.find(order => order.id === Number(id));
};

const createOrderService = (items) => {
  const orderItems = items.map(item => new OrderItem(Date.now(), item.pizza, item.quantity));
  const newOrder = new Order(Date.now(), orderItems);
  orders.push(newOrder);
  return newOrder;
};

module.exports = {
  getOrdersService,
  getOrderByIdService,
  createOrderService
};