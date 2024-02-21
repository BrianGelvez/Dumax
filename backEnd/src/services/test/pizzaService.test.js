const { getPizzasService } = require('../pizzaService');
const Pizza = require('../../models/pizza');

describe('getPizzasService', () => {
  test('debe devolver un array de objetos Pizza', () => {
    const pizzas = getPizzasService();

    // Verificar que se devolvió un array
    expect(Array.isArray(pizzas)).toBe(true);

    // Verificar que cada elemento del array es una instancia de Pizza
    pizzas.forEach(pizza => {
      expect(pizza).toBeInstanceOf(Pizza);
    });
  });
});