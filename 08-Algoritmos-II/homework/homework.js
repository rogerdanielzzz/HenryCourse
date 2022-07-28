'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let aux = [...array]

  if (aux.length <= 1) {
    return aux
  } else {
    let pivot = aux[0]
    let mayores = aux.filter(function (n) {
      return (n > pivot)
    })
    let menores = aux.filter(function (n) {
      return (n < pivot)
    })
    return [...quickSort(menores), pivot, ...quickSort(mayores)]
  }
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
   let aux = [...array]

  if (aux.length <= 1) {
    return aux
  } else {
    divisor= Math.ceil(aux.length/2)

    let a = pop = aux.filter((n)=>aux[n]<aux[divisor])
    let b =pop = aux.filter((n)=>aux[divisor]<aux[n])

    return (mergeSort(a),mergeSort(b))  
  }

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};