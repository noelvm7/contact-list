//crear lista que contenga nombre y precio
//funcion debe permitos agg nuvos productos
const listaCompras = 
    [
    {nombre:'manzana',
    precio: 20},
    ];

//creando funcionflecha
const agregarCompra = (nombre,precio) =>{
    //creando objeto    
    const obj  = 
    {
        nombre: nombre,
        precio: precio,
    };
    listaCompras.push(obj);
};
agregarCompra('uva', 10);
agregarCompra('fresa', 15);
console.log(listaCompras);
listaCompras.splice(0,1);
console.log(listaCompras);