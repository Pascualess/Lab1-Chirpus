function pigLatinTranslator(words) {
  console.log(typeof(words));
  const wordsArray = words.split(` `);
  //   console.log(wordsArray);
  for (let word of wordsArray) {
    let wordIndex = wordsArray.indexOf(word);
    let firstVowel = word.match(/[aeiouAEIOU]/);
    let firstPosition = word.indexOf(firstVowel);
    let casing = checkCase(word);
    word = word.toLowerCase();
    if (firstPosition > 0) {
      wordsArray[wordIndex] =
        word.slice(firstPosition) + word.slice(0, firstPosition) + `ay`;
      if (casing) {
        upperCaseFirstLetter(wordsArray, wordIndex);
      }
    } else if (firstPosition === 0) {
      wordsArray[wordIndex] = word + `way`;
      if (casing) {
        upperCaseFirstLetter(wordsArray, wordIndex);
      }
    } else {
      wordsArray[wordIndex] += `ay`;
      if (casing) {
        upperCaseFirstLetter(wordsArray, wordIndex);
      }
    }
  }

  sentence = wordsArray.join(` `);
  cleanWords = sentence
    .replace(/[.',\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{2,}/g, " ");
  console.log(cleanWords);
  return cleanWords;
}

function checkCase(word) {
  let regex = /[a-zA-Z1-9]/;
  if (regex.test(word)) {
    if (word[0].toUpperCase() === word[0] && word != ` `) {
      return true;
    } else {
      return false;
    }
  }
}

function upperCaseFirstLetter(wordsArray, wordIndex) {
  wordsArray[wordIndex] =
    wordsArray[wordIndex][0].toUpperCase() + wordsArray[wordIndex].slice(1);
}
pigLatinTranslator(`hello`)
module.exports = { pigLatinTranslator };
