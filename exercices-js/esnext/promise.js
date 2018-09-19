function talkAfter(seconds, phrase) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(phrase)
    }, seconds * 1000);
  })
}

talkAfter(3, 'Very cool')
  .then(phrase => phrase.concat('!!'))
  .then(phrase2 => console.log(phrase2))

  