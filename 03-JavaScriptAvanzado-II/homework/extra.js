/*## Extra Credit

### OOP - Prototypes

### Repeatify

Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. La función retorna el string repetido el número de veces que indicamos. Controlar que el número no sea menor que cero, y si es cero que devuelva `''` (String vacío).

```javascript
console.log('hola'.repeatify(3));   //holaholahola*/

String.prototype.repeatfy = function(x){
var strMultiplicado = this
 if (x<1){
    strMultiplicado =""
    return strMultiplicado

 } else if (x==1) {
    strMultiplicado = this
    return strMultiplicado

 } 
  
 
 var contador= 1
 while(contador <x){
    contador++
        strMultiplicado = strMultiplicado+ this
        

 }
 return strMultiplicado


 
}




/*
### Shapes

* Crea un objeto llamado `shape` que tenga una propiedad `type` y un método `getType`.
* Ahora defini una función `Triangle` cuyo prototipo sea `shape`. Los objetos creados con `Triangle`
 deberían tener tres propiedades: `a`, `b` y `c`. Que representan cada lado del triángulo. `type` 
 debe ser `Triangle`.
* Agregá un nuevo método al prototipo llamado `getPerimeter`.

Probá tu solución con el siguiente código:

```javascript
> var t = new Triangle(1, 2, 3);
> t instanceof Triangle
// true
> Shape.prototype.isPrototypeOf(t);
// true
> t.getPerimeter();
// 6
> t.getType();
// "Triangle"
```



* Ahora creá un nuevo constructor que herede de `shape`, llamado `Circle`. Implementalo de tal modo que puedas calcular su perímetro en la función `getPerimeter`.

Probá tu solución con el siguiente código:

```javascript
> var c = new Circle(2);
> c instanceof Circle
// true
> Shape.prototype.isPrototypeOf(c);
// true
> c.getPerimeter();
// 12.566370614359172
> c.getType();
// "Circle"
```

* Creá una última `shape` llamada `Square`.
* Agregá el método `getArea` de todas las `shape`s.



*/



shape = {
   type: type,
   getType:  function() {

   }
}



let Triangle = new Shape ("Triangle")

Triangle.prototype