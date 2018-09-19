// rest(group) and spread - use as function parameter

// using spread with objects
const employee = { name: 'Maria', salary: 12345.99 }
const clone = { active: true, ...employee}

console.log(clone)

// using spread with array
const groupA = ['Mark', 'Pedro', 'Katarina']
const finalGroup = ['Jake', ...groupA]
console.log(finalGroup)