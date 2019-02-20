const object = {
  'uuid1' : 'vic1',
  'uuid2' : 'vic2',
  'uuid3' : 'vic3',
  'uuid4' : 'vic4',
  'uuid5' : 'vic5',
  'uuid6' : 'vic6',
}

const parse1 = Object.entries(object);
const parse2 = Object.keys(object);
const parse3 = Object.values(object);
console.log('parse1', parse1)
console.log('parse2', parse2)
console.log('parse3', parse3)
const invertedParse1 = parse1.map(data => ([data[1], data[0]]));
console.log('invertedParse1', invertedParse1)
