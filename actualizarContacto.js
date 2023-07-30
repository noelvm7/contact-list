/* Bonus Atualizar contacto*/
const listaContactos = ["Kamila Vargas", "Cesar Marley", "Mitchell Torres"];
//creando funcion agregar contacto contacto
const agregarContacto = (nombreApellido) => {
  listaContactos.push(nombreApellido);
};
//creando funcion para borrar contacto
const borrarContacto = (nombreApellido) => {
  let indice = listaContactos.indexOf(nombreApellido);
  console.log(indice);
  listaContactos.splice(indice, 1);
};
//creando funcion para imprimir lista

const imprimirLista = (listaContactos) => {
    console.log("Lista final es:");
  for (let indice = 0; indice < listaContactos.length; indice++) {
    console.log(indice + 1, "", listaContactos[indice]);
    console.log("_________________");
  }
  
};

const actualizarContacto = (nombreApellido, nuevoNombreApellido) => {
  const indice = listaContactos.findIndex((contacto) => contacto === nombreApellido);
  listaContactos[indice] = nuevoNombreApellido;
  console.log(nombreApellido,"se ha actualizado con exito!, nuevo nombre:", nuevoNombreApellido);
};

//lista inicial
console.log("lista inicial", listaContactos);
//agragando un contacto
agregarContacto("Jessica Marley");
console.log("contacto agregado", listaContactos);
//borrando contacto
borrarContacto("Mitchell Torres");
console.log("lista despues de eliminar", listaContactos);
//actualizando contacto
actualizarContacto("Kamila Vargas", "Kamila Marley");

imprimirLista(listaContactos);