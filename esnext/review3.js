// es8: Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Improvements on literal notation
const name = 'Carla'
const people = {
  name, 
  hi() { // doesnt need function
    return 'Hi people!'
  }
}
console.log(people.name, people.hi())

// Class
class Animal {}
class Dog extends Animal {
  bark() {
    return 'Woof'
  }
}

console.log(new Dog().bark())