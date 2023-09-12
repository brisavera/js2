const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:

//EJ A
console.log("///ejercicio a: Las pizzas que tengan un id impar///.");

const pizzaImpar = (pizzasArray) => {
  pizzasArray.forEach((pizza) => {
    if (pizza.id % 2 !== 0) {
      return console.log(`la ${pizza.nombre} cuyo id es ${pizza.id} es impar!`);
    }
  });
};
pizzaImpar(pizzas);

//EJ B
console.log("///ejercicio b:¿Hay alguna pizza que valga menos de $600?///");

const pizzaMenos600 = (pizzasArray) => {
  let indPizza = pizzasArray.findIndex((pizza) => pizza.precio < 600);

  console.log(
    `La  ${pizzasArray[indPizza].nombre} cuesta $ ${pizzasArray[indPizza].precio} es decir, menos de $600`
  );
};
pizzaMenos600(pizzas);

//EJ C

console.log("///ejercicio c: nombre de cada pizza con su respectivo precio.");

// EJ D

console.log("///ejercicio d : Todos los ingredientes de cada pizza///");

const ingredientesdePizzas = (pizzasArray) => {
  pizzasArray.forEach((pizza) => {
    console.log(
      `¡Nuestra pizza ${
        pizza.nombre
      } es exquisita!, tiene como ingredientes: ${pizza.ingredientes.join(
        "/"
      )}.`
    );
  });
};

ingredientesdePizzas(pizzas);
