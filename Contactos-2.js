/* Crea una lista de contactos con datos predefinidos, cada contacto debe contener el 
nombre y apellido como una sola cadena de caracteres
Crea una función para añadir un nuevo contacto a una lista
Crea una función para borrar un contacto existente de la lista
Crea una función para imprimir en consola los contactos presentes en la lista
Publica tu código en Github, en tu repositorio contact-list 
crea un branch llamado project-1 y compártelo con nosotros. 👍🏼⬇️ */

/* const listaContactos = [{nombreApellido: 'Kamila Vargas'}, 
                        {nombreApellido: 'Cesar Marley'}, 
                        {nombreApellido: 'Neo Marley'}]; */
//creando funcionflecha agregar contacto

const listaContactos = ["Kamila Vargas", "Cesar Marley", "Neo Marley"];
const agregarContacto = (nombreApellido) => {
  /*       const objAgregar = { //creando objeto
        nombreApellido: nombreApellido,}; */
  listaContactos.push(nombreApellido);
};
//creando funcionflecha borrar contacto contacto
const borrarContacto = (nombreApellido) => {
  /*         const objBorrar ={//creando objeto 
        nombreApellido:nombreApellido,}; */
  let indice = listaContactos.indexOf(nombreApellido);
  listaContactos.splice(indice, 1);
};

const imprimirLista = (listaContactos)=>{
    for (let indice = 0; indice < listaContactos.length; indice++) {
        console.log(indice+1,' ',listaContactos[indice]);
        console.log('_________________');
        }
}


console.log(listaContactos);
agregarContacto("Jessica Marley");
console.log(listaContactos);
borrarContacto('Cesar Marley');
console.log(listaContactos);
imprimirLista(listaContactos);


/* const listaContactosActualizada = (listaContactos) => {
    const objLista = { //creando objeto
        listaContactos:listaContactos,
};
console.log(objLista);
}; */
/* for (let i = 0; index < listaContactos.length; index++) {
    console.log(i, "", )
    
} */
