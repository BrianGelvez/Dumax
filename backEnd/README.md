# Pizzeria Backend

Este proyecto es el backend de una aplicación de pizzería. El objetivo es exponer una API JSON para ser consumida por un cliente frontend para ordenar pizzas.

## Tecnologías utilizadas

- Node.js
- Express
- Jest para pruebas unitarias
- Express Validator para validación de datos

## Entidades

Las entidades en este proyecto son:

- **pizza**: tiene un nombre y un precio (por ejemplo, Margherita $5, Pepperoni $6, ...)
- **order**: tiene items
- **order item**: tiene una pizza y una cantidad

## Endpoints

Los endpoints que se exponen son:

- `/api/orders`: devuelve una lista de pedidos
- `/api/orders/:id`: devuelve los detalles de un pedido individual
- `/api/pizzas`: devuelve una lista de pizzas

## Pruebas

Se han escrito pruebas unitarias para todas las funciones principales utilizando Jest. Estas pruebas siguen las mejores prácticas de BDD.

## Principios SOLID

El código sigue los principios SOLID para garantizar que sea fácil de mantener y extender en el futuro.

## Validación

Se utiliza Express Validator para validar las entradas del usuario y garantizar que los datos que se envían a la API sean correctos.

## Cómo ejecutar el proyecto

1. Clona el repositorio de GitHub.
2. Navega hasta el directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm start` para iniciar el servidor.
5. Ejecuta `npm test` para ejecutar las pruebas unitarias.

## Documentación adicional

Se ha proporcionado una colección de Postman con ejemplos de cómo interactuar con la API.

## Enlace al repositorio de GitHub

[Repositorio en GitHub](enlace-al-repositorio)
