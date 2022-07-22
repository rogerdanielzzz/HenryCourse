
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);

/* 10
8
8
9
10
1
*/


```

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

/*
undefined
error
Hola!

*/

```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
/*
Franco

*/


```



```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);
/*
Tony
Franco
Tony

*/


```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);
/*
The Flash
Reverse Flash
The flash
Franco

Porque usa Var que cambia el valor global 


*/



```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2
"2" * "3" // 6 
4 + 5 + "px"//9px
"$" + 4 + 5//$45 porque conviernte todos en string
"4" - 2 //2
"4px" - 2 //nAn
7 / 0 // error (Infinity)
{}[0] // ???
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5// 5 porque el 0 es false or devuelve el primer verdadero y && el ultimo verdader3
[3]+[3]-[10] // lo resuelve concatenendo como string 33-10 = 23
3>2>1 // false   pero da false por alguna razon (3>2 = true y true>1 = false porque true es igual a 1)
[] == ![] // true ( un array vacio cohersiona a stringo vacio que es igual a 0 y el ![] se interpreta como false y 0 y false es igual entonces es true)
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
/*
undefined
2

por el hoisting que sube la funcion al principio de su entorno y el undenfined declara la variable al principio del entorno pero no su valor hasta que la linea de codigo llega
*/


```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);

/*

undefined ya que no tiene valor para retornar ya que snack esta en otro entorno como el del if y

*/
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());


// ni idea
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();



/* primero va a terminar con la linea de codigo y luego pasa al asincronico segun tiempo programado
1
4
3
2

*/
```
