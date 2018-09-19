const pessoa = { nome: 'Joao' }
pessoa.nome = 'victor'
console.log(pessoa)

// pessoa -> endereço de memória -> { ... }
// pessoa = { nome: 'loiane'} - n é possível

// Após congelá-lo, n é possível alterar
Object.freeze(pessoa)

pessoa.nome = 'luzia' // será ignorado
pessoa.end = 'rua abc'
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'vitao' })
pessoaConstante.nome = 'jehaue'
console.log(pessoaConstante
)