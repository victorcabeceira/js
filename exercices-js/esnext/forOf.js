for (let letter of 'Cod3r') {
  console.log(letter)
}

const ecma = ['Map', 'Set', 'Promies']

for (let i in ecma) {
  console.log(i) // index
}

for (let subject of ecma) {
  console.log(subject)
}

const subjectMap = new Map([
  ['Map', { given: true }],
  ['Set', { given: true}],
  ['Promise', { given: false }]
])

for (let subject of subjectMap) {
  console.log(subject)
}

for (let key of subjectMap.keys()) {
  console.log(key)
}

for (let value of subjectMap.values()) {
  console.log(value)
}

for (let [k,v] of subjectMap.entries()) {
  console.log(k,v)
}

const s = new Set(['a', 'b', 'c'])
  for (let letter of s) {
    console.log(letter)
  }