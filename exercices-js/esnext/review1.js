// let and const
{
  var a = 2
  let b = 3
  console.log(b) // only inside the function
}

console.log(a) //accessible

// Template string
const product = 'ipad'
console.log(`${product} testing
breakline`)

// Destructuring
const [l, y, ...ricss]  = 'testing'
console.log(l,y,ricss)

const [x, ,z] = [1, 2, 3]
console.log(x, z)

const { age: ag, name } = { name: 'Ana', age:10 }
console.log(ag, name)