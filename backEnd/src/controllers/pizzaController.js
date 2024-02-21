const pizzaService = require('../services/pizzaService');

const getPizzasController = (req, res) => {
  try {
    const pizzas = pizzaService.getPizzasService();
    res.status(200).json(pizzas);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'An error occurred while fetching pizzas.'})
  }
};

module.exports = {
    getPizzasController,
};