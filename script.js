const producto1 = {
  nombre: "remera",
  precio: 1500,
};
const producto2 = {
  nombre: "jean",
  precio: 5200,
};
const producto3 = {
  nombre: "buzo",
  precio: 7999,
};

let array = JSON.parse(localStorage.getItem("carrito")) ?? [];

let boton1 = document.querySelector("#boton1");
let boton2 = document.querySelector("#boton2");
let boton3 = document.querySelector("#boton3");

boton1.addEventListener("click", () => {
  if (array.some((producto) => producto.nombre == "remera")) {
    let indice = array.findIndex((producto) => producto.nombre == "remera");
    array[indice].cant++;
  } else {
    let remeraArray = {
      ...producto1,
      cant: 1,
    };
    array.push(remeraArray);
  }

  localStorage.setItem("carrito", JSON.stringify(array));
});

boton2.addEventListener("click", () => {
  if (array.some((producto) => producto.nombre == "jean")) {
    let indice = array.findIndex((producto) => producto.nombre == "jean");
    array[indice].cant++;
  } else {
    let jeanArray = {
      ...producto2,
      cant: 1,
    };
    array.push(jeanArray);
  }

  localStorage.setItem("carrito", JSON.stringify(array));
});

boton3.addEventListener("click", () => {
  if (array.some((producto) => producto.nombre == "buzo")) {
    let indice = array.findIndex((producto) => producto.nombre == "buzo");
    array[indice].cant++;
  } else {
    let buzoArray = {
      ...producto3,
      cant: 1,
    };
    array.push(buzoArray);
  }

  localStorage.setItem("carrito", JSON.stringify(array));
});
