// validateOrder.js
const { body, validationResult } = require('express-validator');

module.exports = [
  body('items').isArray().withMessage('Los elementos deben ser una matriz'),
  body('items.*.pizza').exists().withMessage('Cada artículo debe tener una pizza'),
  body('items.*.pizza.name').isString().withMessage('Cada pizza debe tener un nombre'),
  body('items.*.pizza.price').isNumeric().withMessage('Cada pizza debe tener un precio'),
  body('items.*.quantity').isInt({ gt: 0 }).withMessage('Cantidad debe ser superior a 0'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];