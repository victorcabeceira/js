const array = [1, 2, 3, 4, 5]


for (let i in array) {
  console.log(i, array[i])
}

const object = {
  nome: 'victor',
  idade: '24',
  peso: '120',
}

for (let att in object) {
  console.log(`${att}: ${object[att]}`)
}