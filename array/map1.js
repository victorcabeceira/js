//for com propósito - retorna novo array
const nums = [1,2,3,4,5]

const nums2 = nums.map(v =>{ return v*2 })

console.log(nums2)

const soma10 = e => e+10 
const triplo = e => e*3 
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

const resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)