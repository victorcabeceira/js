const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10:
    case 9:
      console.log('SS')
      break;
    case 8:
    case 7:
      console.log('MS')
      break;
    case 6:
    case 5:
      console.log('MM')
      break;
    case 4:
    case 3:
    case 2:
    case 1:
    case 0: 
      console.log('REPROVADO')
      break;
    default: 
      console.log('Nota inválida!')
  }
}

imprimirResultado(9.4)
imprimirResultado(7.5)
imprimirResultado(17.5)
imprimirResultado(6)
imprimirResultado(2)