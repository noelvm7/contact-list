


/* const moto = {
    color : 'azul'
}

let json = JSON.stringify(moto) //convierte objeto a texto
console.log(json);

let obj = JSON.parse('{"moto": "azul"}');  //conierte un json a objeto
console.log(obj);

fetch('Jasonejemplo1')
.then(Response=> Response.jason())
.then(data=> Response{
    //lo quehaga la data
    console.log(data);
    });

    .catch(error =>{
        console.error('error al traer informacion');
    }); */




    let perro = {
        nombre: 'Max',
        Edad: 8,
        hermanos : {nombre1: 'loky' , nombre2: 'danger' }, 
        numero: [1,2,3],
        ladrar: function(){
            console.log('gua gua!!');
        }
    }

    for (const propiedad in perro) {
        console.log(perro[propiedad]);
            
        }
    