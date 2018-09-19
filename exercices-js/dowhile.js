function soma (min,max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = -1 

do {
  opcao = soma(-1,10);
  console.log(opcao)
} while (opcao !== -1)

console.log('saiu')