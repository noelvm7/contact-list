//crear funcion para conertir cadena de texto
//al estilo capitalized

//crean funcion que reciba 2 numeros


let perro = {
    nombre: 'Max',
    Edad: 8,
    hermanos : {nombre1: 'loky' , nombre2: 'danger' }, 
    numero: [1,2,3],
    ladrar: function(){
        console.log('gua gua!!');
    }
}
perro.numero[3]=26;
console.log(perro);
console.log(perro.numero[0]); 
//puedo llamar especificamente la piscision del arreglo

perro.ladrar() //propiedad necesita () si no no funciona
