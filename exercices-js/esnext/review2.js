// Arrow Function
const add = (a, b) => a + b
console.log(add(2,3))

const double = a => 2 * a
console.log(double(3))

// Arrow function (this)
const lexic1 = () => console.log(this === exports)
const lexic2 = lexic1.bind({}) // impossible with arrow
lexic1()
lexic2()

// default params
function log(texto = 'Node') {
  console.log(texto)
}

log()
log(null)
log('stronger')

// rest/spread operator
function total(...numbers) {
  let total = 0
  numbers.forEach(n => total += n)
  return total
}
console.log(total(2,3,4,5))