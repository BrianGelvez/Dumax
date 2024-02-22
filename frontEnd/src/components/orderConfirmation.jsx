import { useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';

const OrderConfirmation = ({ order }) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleConfirm = async () => {
    const items = order.map(item => ({
      pizza: {
        name: item.name,
        price: item.price
      },
      quantity: item.quantity
    }));
  
    try {
        const response = await axios.post("http://localhost:3333/api/orders", { items });
        const orderSummary = response.data.items.map(item => 
          `Pizza: ${item.pizza.name}, Price: ${item.pizza.price}, Quantity: ${item.quantity}`
        ).join(' | ');
        setMessage(`Su pedido está confirmado. Resumen del pedido: ${orderSummary}`);
    } catch (error) {
      console.error(error);
      setError(error.response.data.errors[0].msg)
    }
  };

  return (
    <div>
      {error}
      <button className="text-green-500" onClick={handleConfirm}>Confirmar pedido</button>
      {message && <p>{message}</p>}
    </div>
  );
};

OrderConfirmation.propTypes = {
  order: PropTypes.array.isRequired,
};

export default OrderConfirmation;