const fs = require("fs");
const path = require("path");
const Pizza = require('../models/pizza');

let pizzaData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../../api/example-pizzas.json'), "utf-8")
);

pizzaData = pizzaData.map(pizza => new Pizza(pizza.id, pizza.name, pizza.price, pizza.ingredients));

const getPizzasService = () => {
  return pizzaData;
};

module.exports = {
    getPizzasService,
};