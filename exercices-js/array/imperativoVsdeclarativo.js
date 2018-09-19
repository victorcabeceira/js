const alunos = [
    {nome: 'João', nota: 8.2},
    {nome: 'Maria', nota: 8.9},
]

let total1 = 0
for (let i= 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1/alunos.length)

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma);
const total3 = alunos.map(a => a.nota).reduce(
    (total, atual) => total + atual)
console.log(total2/alunos.length)
console.log(total3/alunos.length)