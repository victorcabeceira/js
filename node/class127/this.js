

console.log(this === module.exports)
console.log(this === exports)


function logThis() {
  console.log('Dentro de uma função...')
  console.log(this === exports)
  console.log(this === module.exports)
  console.log(this === global)
  // dentro do global

}

// dentro do module.exports

logThis()