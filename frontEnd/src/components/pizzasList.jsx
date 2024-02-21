// components/PizzaList.js
import { useState } from "react";
import axios from "axios";
import OrderConfirmation from "./orderConfirmation";

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]);
  const [order, setOrder] = useState([]);
  const [showPizzas, setShowPizzas] = useState(false);

  const handleClick = async () => {
    if (pizzas.length === 0) {
      try {
        const response = await axios.get("http://localhost:3333/api/pizzas");
        setPizzas(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    setShowPizzas(!showPizzas);
  };

  const addToOrder = (pizza) => {
    const existingPizzaIndex = order.findIndex(
      (item) => item.name === pizza.name
    );

    if (existingPizzaIndex !== -1) {
      const newOrder = [...order];
      newOrder[existingPizzaIndex].quantity += 1;
      setOrder(newOrder);
    } else {
      setOrder([...order, { ...pizza, quantity: 1 }]);
    }
  };

  console.log(order);

  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Ver Pizzas
        </button>
      </div>
      {showPizzas &&
        pizzas.map((pizza, index) => (
          <div key={index} className="border-2 border-blue-500 rounded p-4 m-2">
            <h1 className="uppercase text-blue-500">pizza N°{index}</h1>
            <h2 className="font-bold text-xl mb-2">{pizza.name}</h2>
            <p className="mb-2">
              <span>Price:</span> {pizza.price}
            </p>
            <p>
              <span>Ingredients:</span> {pizza.ingredients.join(", ")}
            </p>
            <button className="border-[1px] bg-red-200 border-red-700 rounded-md p-1 mt-2" onClick={() => addToOrder(pizza)}>Añadir al pedido</button>
          </div>
        ))}
      {order.length > 0 && (
        <div className="border-2 border-red-500 rounded p-4 m-2">
          <h2>Resumen del pedido:</h2>
          {order.map((pizza, index) => (
            <p key={index}>
              {pizza.name} - Cantidad: {pizza.quantity}
            </p>
          ))}
          <OrderConfirmation order={order} />
        </div>
      )}
    </div>
  );
};

export default PizzaList;
