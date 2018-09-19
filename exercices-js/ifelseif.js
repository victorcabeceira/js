Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
  if (nota.entre(9,10)) {
    console.log('SS')
  } else if (nota.entre(7, 8.99)) {
    console.log('MS')
  } else if (nota.entre(5, 6.99)) {
    console.log('MM')
  } else if (nota.entre(3, 4.99)) {
    console.log('MI')
  } else if (nota.entre(1,2.99)) {
    console.log('II')
  } else if (nota.entre(0,0.99)) {
    console.log('SR')
  } else {
    console.log('NOTA INVÁLIDA')
  }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(4)
imprimirResultado(2)
imprimirResultado(0.5)
imprimirResultado(11.5)
imprimirResultado(-1.5)