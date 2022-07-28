'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var arr = [1]
  var factor = 2
  if(num%2!==0) factor= 3
  if (num=== 1) return arr
  
  while (num % factor === 0) {
    arr.push(factor)
    if (num === factor) return arr
    num = num / factor
    while (num % factor !== 0) {
      factor++
    }
  }
}




function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:{}
  var contador=0
while(contador<array.length){
  for (let i= 1; i<array.length; i++){
     if (array[i]< array[i-1]){
      let auxA= array[i];
      let auxB= array[i-1]

      array[i-1]= auxA
      array[i]= auxB
   }

  }
  contador++
}

  return array

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
  for (let i =1;i<array.length;i++){
    var contador= array[i]-1
    while(contador=>0){
    if(array[contador]>array[i]){
      let auxA= array[i];
      let auxB= array[i-1]

      array[i-1]= auxA
      array[i]= auxB 
    }
    contador --
  }
  }
  
    return array



}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var minimo=array[0];
  let indice= 0
  let auxA= null
  
  let auxIndice= null;

 while(indice<array.length) {  
  for(let i=indice;i<array.length; i++){
      if(array[i]<minimo){
        
        auxIndice=i
        minimo = array[i]
      } 
    
  }

  auxA= array[indice]
  array[auxIndice]= auxA
  array[indice]=minimo
  indice++
} return array

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};