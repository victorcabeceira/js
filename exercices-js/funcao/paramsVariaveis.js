function soma() {
  let soma = 0
  for (i in arguments) {
    soma += arguments[i]
  }
  return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'ddd')) // Problema de precisão number
console.log(soma('Abc',1.1,2.2)) //O esperado é 0, do soma = 0, seguido da concatenação
console.log(soma('a', 'b', 'c'))
