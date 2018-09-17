const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true},
]

const bolsas = alunos.map(a => a.bolsista);
const todosBolsistas = (resultado, bolsista) => resultado && bolsista

const bolsista = bolsas.reduce(todosBolsistas)
console.log(bolsista)


const algumBolsista = (resultado, bolsista) => resultado || bolsista
const umBolsista = bolsas.reduce(algumBolsista)
console.log(umBolsista)
