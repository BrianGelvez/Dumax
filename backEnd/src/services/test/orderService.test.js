// services/test/orderService.test.js
const { getOrdersService, getOrderByIdService, createOrderService } = require('../orderService');
const Order = require('../../models/order');
const OrderItem = require('../../models/orderItem');

describe('Order Services', () => {
  beforeEach(() => {
    // Limpiar el array de pedidos antes de cada prueba
    orders = [];
  });

  describe('getOrdersService', () => {
    test('should return array of orders', () => {
      const orders = getOrdersService();
      expect(Array.isArray(orders)).toBe(true);
    });
  });

  describe('getOrderByIdService', () => {
    test('should return order by id', () => {
      const orderItems = [{ pizza: 'Margarita', quantity: 2 }];
      const newOrder = createOrderService(orderItems);
      const order = getOrderByIdService(newOrder.id);
      expect(order).toEqual(newOrder);
    });
  });

  describe('createOrderService', () => {
    test('should create a new order', () => {
      const orderItems = [{ pizza: 'Margarita', quantity: 2 }];
      const newOrder = createOrderService(orderItems);
      expect(newOrder).toBeInstanceOf(Order);
      expect(newOrder.items[0]).toBeInstanceOf(OrderItem);
      expect(newOrder.items[0].pizza).toBe('Margarita');
      expect(newOrder.items[0].quantity).toBe(2);
    });
  });
});