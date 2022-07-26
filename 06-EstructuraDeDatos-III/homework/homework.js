"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class BinarySearchTree {
  constructor(valor) {
    this.value = valor;
    this.right = null;
    this.left = null;
  }
  
  size() {
    if (!this.right && !this.left){ 
      return 1
    } else if (this.right && this.left) {
      return 1 + this.right.size() + this.left.size()
    } else if (this.right && !this.left) {
      return 1 + this.right.size()

    } else if (!this.right && this.left) {
      return 1 + this.left.size()

    }
  }
  insert(value) {
    var hoja = new BinarySearchTree(value)
    
    if (value > this.value) {
      if (!this.right) {
        this.right = hoja

      } else {
        this.right.insert(value)
      }
    } else {
      if (!this.left) {
        this.left = hoja
        
      } else { 
        this.left.insert(value)
      }
    }


  }
  contains(value) {
    if (value === this.value) return true
    if (value > this.value) {
      if (!this.right) return false
      else return this.right.contains(value)

    } else {
      if (!this.left) return false
      else return this.left.contains(value)

    }
   


  }
  depthFirstForEach(callBack, order) {
    if (order === "pre-order") {
        callBack(this.value);
        if (this.left) {
            this.left.depthFirstForEach(callBack, order);
        }

        if (this.right) {
            this.right.depthFirstForEach(callBack, order);
        }
    } else if (order === "post-order") {
        if (this.left) {
            this.left.depthFirstForEach(callBack, order);
        }

        if (this.right) {
            this.right.depthFirstForEach(callBack, order);
        }
        callBack(this.value);
    } else {
        // in-order
        if (this.left) {
            this.left.depthFirstForEach(callBack, order);
        }
        callBack(this.value);

        if (this.right) {
            this.right.depthFirstForEach(callBack, order);
        }
    }
}
breadthFirstForEach(callBack, array) {
    if (array == null) {
        var array = [];
    }

    if (this.left) {
        array.push(this.left);
    }

    if (this.right) {
        array.push(this.right);
    }

    callBack(this.value);

    array.length > 0 && array.shift().breadthFirstForEach(callBack, array);
    // if(array.length > 0) array.shift().breadthFirstForEach(callBack, array)
}






}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};