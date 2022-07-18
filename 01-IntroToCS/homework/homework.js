'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var numToString = String(num)
  var total = 0
  for (var i = 0; i < numToString.length; i++) {

    if (Number(numToString[i]) === 0) {
      continue
    } else {

      var binario = Math.pow(2, ((numToString.length - 1) - i))
      total = total + binario

    }
  }

  return total


}

function DecimalABinario(num) {
  // tu codigo aca
  var numero = num

  var binario = []
  while (numero > 1) {
    binario.unshift(numero % 2)
    numero = numero / 2
    numero = Math.floor(numero)
  }
  if (numero === 1) {
    binario.unshift(1)
  }
  binario = binario.join("")


  return binario




}





module.exports = {
  BinarioADecimal,
  DecimalABinario,
}