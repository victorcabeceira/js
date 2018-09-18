const technologies = new Map()
technologies.set('react', { framework: false })
technologies.set('angular', { framework: true })

console.log(technologies.react)
console.log(technologies.get('react').framework)

const keys = new Map([
  [function() {}, 'Function'],
  [{}, 'Object'],
  [123, 'Number']
])

keys.forEach((value, key) => {
  console.log(value, key)
});

console.log(keys.has(123))
keys.delete(123)
console.log(keys.has(123))
console.log(keys.size)

keys.set(123, 'a')
keys.set(123, 'b') // doesnt accept repetition
console.log(keys)
