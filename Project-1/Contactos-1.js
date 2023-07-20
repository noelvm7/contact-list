/* Crea una lista de contactos con datos predefinidos, cada contacto debe contener el 
nombre y apellido como una sola cadena de caracteres
Crea una función para añadir un nuevo contacto a una lista
Crea una función para borrar un contacto existente de la lista
Crea una función para imprimir en consola los contactos presentes en la lista
Publica tu código en Github, en tu repositorio contact-list 
crea un branch llamado project-1 y compártelo con nosotros. 👍🏼⬇️ */
/* Crea una lista de contactos con datos predefinidos,*/
const listaContactos = ["Kamila Vargas", "Cesar Marley", "Mitchell Torres"];
//creando funcion agregar contacto contacto
const agregarContacto = (nombreApellido) => {
  listaContactos.push(nombreApellido);
};
//creando funcion para borrar contacto
const borrarContacto = (nombreApellido) => {
  let indice = listaContactos.indexOf(nombreApellido);
  listaContactos.splice(indice, 1);
};
//creando funcion para imprimir lista
const imprimirLista = (listaContactos) => {
  for (let indice = 0; indice < listaContactos.length; indice++) {
    console.log(indice + 1, "", listaContactos[indice]);
    console.log("_________________");
  }
};

console.log(listaContactos);
agregarContacto("Jessica Marley");
console.log(listaContactos);
borrarContacto("Cesar Marley");
console.log(listaContactos);
imprimirLista(listaContactos);
