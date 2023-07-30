/* Ajusta las funciones de crear y eliminar un contacto para que puedan almacenar la siguiente información como objetos:
id, nombres, apellidos, teléfono, ciudades, ciudad, dirección */
const listaContactos = [
  {
    id: 1,
    nombre: "Kamila",
    apellido: "Vargas",
    telefono: "95959528",
    ubicacion: { ciudad: "Tegucigalpa", direccion: "Prados" },
  },
  {
    id: 2,
    nombre: "Cesar",
    apellido: "Vargas",
    telefono: "97770876",
    ubicacion: { ciudad: "Florida", direccion: "Florida" },
  },
  {
    id: 3,
    nombre: "Alexa",
    apellido: "Vargas",
    telefono: "+158829282",
    ubicacion: { ciudad: "Oita", direccion: "Fukuoka" },
  },
];

//funcion para agregar contacto.
const agregarContacto = (id, nombre, apellido, telefono, ciudad, direccion) => {
  const contactoAdd = {
    id: id,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    ubicacion: { ciudad, direccion },
  };
  console.log("Agregando contacto con exito!, ID #:",id);
  listaContactos.push(contactoAdd);
};

//funcion para borrar contacto existente.
const borrarContacto = (id) => {
  const indice = listaContactos.findIndex((contacto) => contacto.id === id);
  if (indice !== -1) { //condicionante para contacto existente
    listaContactos.splice(indice, 1);
    console.log("Contacto con ID #",id, "ha sido eliminado con exito!, en la posicion #:", indice,"del arreglo.");
  } else {
    console.log("El ID de contacto que desea eliminar no es valido!, favor revisa los contactos existentes.");
  }
};


//------------------------------------------------------------------------//
//lista de contactos inicial
console.log("lista de contactos inicial:", listaContactos);

//se ingresan datos para un nuevo contacto con todos los elementos
agregarContacto(4,"Jessica", "Marley","97002622","Tegucigalpa","Col. 21 de Octubre");
console.log(listaContactos);

//se elimina un contacto por ID
borrarContacto(2);
console.log("Contactos luego de eliminar:", listaContactos);