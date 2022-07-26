"use strict";

const {
  has
} = require("markdown-it/lib/common/utils");

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;

  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una 
    lista de un solo nodo y de una lista vacía);

  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser
   un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el 
   segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true.

  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
class Node {
  constructor(data, ) {
    this.data = data;
    this.next = null;

  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.lenght = 0;
  }
  add(data) {
    var node = new Node(data);
    var actual = this.head;
    if (!this.head) {
      this.lenght++;
      this.head = node;
      return node
    }

    while (actual.next) {
      actual = actual.next;
    }

    actual.next = node;
    this.lenght++;
   }
  remove() {
    if (!this.head) return false;

  if (this.head.next === null) {
    
    let aux = this.head.data;
    this.head = null;
 
    return aux;
  } else {
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    let aux = current.next.data; 
    current.next = null;
   
    return aux;
  }


  }
  search(x) {
    if (!this.head) return null

   let current = this.head

    while (current){
      if (typeof x == "function"){
         if (x(current.data)=== current.data) return true        
      } else if (x== current.data) return current.data;
      else  current = current.next
      }

    return null



 /*   let actual = this.head;
    if (this.head == x) {
      console.log(actual.data)
      return actual.data
    }
    while (actual.next) {
      actual = actual.next;
      if (actual.data == x) {
        if (typeof (actual.data) === "function") {
          console.log("verdad")
          return true
        } else {
          console.log(actual.data)
          return actual.data
        }
      }

    }
    console.log("no se encontro")
    return null*/

  }
}


/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/


class HashTable {
  constructor() {
    this.numBuckets = 35;
    this.buckets = new Array(this.numBuckets);
    this.buckets.fill([]);

  }
  hash(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum = sum + key.charCodeAt(i);
    }
    return sum % this.numBuckets;
  }
  set(clave, valor) {
    if (typeof clave !== "string") throw new TypeError("no es string")

    let posicion = this.hash(clave)
    this.buckets[posicion].unshift({
      key: clave,
      value: valor
    })
    
  }
  get(clave) {
    let posicion = this.hash(clave)

    for (let i = 0; i < this.buckets[posicion].length; i++) {
      if (this.buckets[posicion][i].key === clave) {
        return this.buckets[posicion][i].value
      }
    }
    return false

  }
  hasKey(z) {
    let existe = this.get(z)
    if (existe) return true
    else return false
  }


}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};