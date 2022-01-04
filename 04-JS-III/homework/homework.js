// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:

  return array.shift()
  //return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

  return array.pop()
  //return array[array.length-1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
//   // Tu código:

for (var i = 0; i < array.length; i++) {
    array[i] = array[i] + 1
}
return array;

// let nuevoArray = []
// for (let i = 0; i < array.length; i++) {
//   nuevoArray.push(array[i] + 1)
// }
// return nuevoArray;

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

array.push(elemento)
return array

// array[array.length] = elemento
// return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

array.unshift(elemento)
return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

// return palabras.join(" ")

  var string = '';
  for (let i = 0; i < palabras.length; i++) {
    if(i === palabras.length -1){
      string = string + palabras[i]
    }else string = string + palabras[i] + " "
    }
    return string;
  }


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  // return array.includes(elemento)

for (var i = 0; i < array.length; i++) {
    if(elemento === array[i])
    return true
    }
    return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:  

  var num = 0;

  for (var i = 0; i < numeros.length; i++) {
      num = num + numeros[i]
  }
    return num

  // let suma = 0;
  // for (let i = 0; i < numeros.length; i++) {
  //     suma += numeros[i];
  // }  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  let suma = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
      suma += resultadosTest[i];
  }  return suma/resultadosTest.length;
  
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
// numeros =  [2, 7, 6, 24]
//                |
// masGrande = 2

  var masGrande = numeros[0]

  for (var i = 1; i < numeros.length; i++) {
      if(numeros[i] > masGrande){
        masGrande = numeros[i] 
      }
  }
  return masGrande
}


function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   

  //return [0,6,12,18,24,30,36,42,48,54,60]

  var tabla =[];

  for(i = 0; i < 11; i++){ //aqui el bucle no es para recorrer nada sino que para dar 10 vueltas y anexar cada valor de la tabla de multiplicar
    tabla.push(6 * i);
  }
  return tabla;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  if(arguments.length === 0){
    return 0
  }
  if(arguments.length === 1){
    return arguments[0]
  }
  var resultado = 1
  for (var i = 0; i < arguments.length; i++) {
      resultado = resultado * arguments[i]
  }
  return resultado
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

var mayor18 = 0;

for (var i = 0; i < arreglo.length; i++) {
    if(arreglo[i] > 18){
      mayor18 = mayor18 + 1
    }
}
return mayor18
// let cuenta = 0;
// for (let i = 0; i < arreglo.length; i++) {
//   if(arreglo[i] > 18) cuenta++;
// }
// return cuenta;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: "Es fin de semana"si el día corresponde a Sábado o Domingo y "Es dia Laboral" en caso contrario. 
  //Escribe tu código aquí 

  if(numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana"
  else return "Es dia Laboral"

  // if(numeroDeDia > 1 && numeroDeDia < 7){
  //   return "Es dia Laboral"
  // }
  // return "Es fin de semana"

} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

if(n.toString()[0] === "9"){
  return true
}
else return false

  // var numero = n.toString()
  // if(numero[0] === 9) return true;
  // else return false;  
  // var entero = 10; 
  // while(entero > 9){
  //   entero = Math.trunc(n / 10)
  // }
  //   if(entero === 9 || n === 9) return true;
  //   else return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var contador = 0

  for (var i = 1; i < arreglo.length; i++) {
    if(arreglo[i - 1] !== arreglo[i]){
      contador++
    }
  }

  if(contador > 0){
    return false
  }
  return true

  // let iguales = arreglo[0];
  // for (let i = 0; i < arreglo.length; i++) {
  //     if(arreglo[i] != iguales) return false;
  // }
  // return true;
} 


function mesesDelAño(array) {
  // Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  // Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var arr = []
  for (var i = 0; i < array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
    arr.push(array[i])
    }
  }
  if(arr.length === 3) return arr;
  return "No se encontraron los meses pedidos"

  // var nuevoArray = []
  // for (let i = 0; i < array.length; i++) {
  //     if(array[i] === 'Enero' || array[i] === 'Marzo' ||array[i] === 'Noviembre') nuevoArray.push(array[i])

  //   }
  //   if(nuevoArray.length < 3) return "No se encontraron los meses pedidos"
  //   else return nuevoArray;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  
  var nuevoArray = []

  for (var i = 0; i < array.length; i++) {
    if(array[i] > 100){
      nuevoArray.push(array[i])
    }
    }
  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  tablaDelSeis,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
