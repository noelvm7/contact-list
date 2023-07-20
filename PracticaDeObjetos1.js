/* Crea un objeto que represente una persona/animal. 
Coloca todas las características que quieras, pero por lo menos una característica por cada tipo de dato primitivo que hemos visto.
Creale un método para saludar.(Imagínate como)
Imprime en pantalla alguno de los datos de tu objeto.
Llama al método saludar de tu objeto. */

const persona = {
    nombre: 'Juan',
    edad: 30,
    altura: 1.75,
    casado: true,
    coloresFavoritos: ['azul', 'verde'],
    saludar: function() {
      console.log(`¡Hola! Mi nombre es ${persona.nombre} y tengo ${persona.edad}  años.`); //usar ${persona.nombre} para traer el dato 
    }
  };
  
  console.log(persona.nombre);
  console.log(persona.edad);
  console.log(persona.altura);
  console.log(persona.esEstudiante);
  console.log(persona.coloresFavoritos);

  console.log(persona.nombre, persona.edad, persona.altura, persona.esEstudiante, persona.coloresFavoritos);
  
  persona.saludar();
  console.log(persona)