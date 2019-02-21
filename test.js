const axios = require('axios');
const _ = require('lodash');
const instance = axios.create({
  baseURL: 'https://swapi.co/api/'
})

getData = async () => {
  return new Promise((res, rej) => {
    instance.get('people/')
      .then(result => res(result.data))
      .catch(error => rej(error))
  })
}

getData().then(data => {
  const unorderedArray = data.results.map(d => ({ name: d.name, height: d.height }));
  const orderedArrayLodash = _.sortBy(unorderedArray, ['name', 'age']);
  const orderedArraySort = unorderedArray.sort((a,b) => { return a.name > b.name });

  console.log('unorderedArray', unorderedArray)
  console.log('orderedArrayLodash', orderedArrayLodash)
  console.log('orderedArraySort', orderedArraySort)
})

const logger = async () => {
  try {
    const result = await getData();
    const unorderedArray = results.map(d => ({ name: d.name, height: d.height }));
    const orderedArrayLodash = _.sortBy(unorderedArray, ['name', 'age']);
    const orderedArraySort = unorderedArray.sort((a,b) => { return a.name > b.name });
    console.log('result 2222222', result);
    console.log('unorderedArray', unorderedArray)
    console.log('orderedArrayLodash', orderedArrayLodash)
    console.log('orderedArraySort', orderedArraySort)
  } catch (error) {
    console.log('error', error);
  }
}

logger()