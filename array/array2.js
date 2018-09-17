const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop() // remove último elemento

console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona no primeiro
console.log(pilotos)

// splice pode add e remover elementos

// adicionar
pilotos.splice(2,0, 'Botas', 'Massa')
console.log(pilotos)

// remover 1 a partir do indice 3
pilotos.splice(3,1)
console.log(pilotos)

// slice retorna novo array (first, second]
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
