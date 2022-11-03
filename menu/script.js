const letters = document.getElementById(`letters`);
const numbers = document.getElementById(`numbers`);
const buttonLetters = document.getElementById(`buttonLetters`);
const buttonNumbers = document.getElementById(`buttonNumbers`);
console.log(letters);
console.log(numbers);
console.log(buttonLetters);
console.log(buttonNumbers);
buttonLetters.ad
buttonLetters.addEventListener(`click`, lettersToggle);
buttonNumbers.addEventListener(`click`, numbersToggle);

function lettersToggle() {
    console.log(`hi`)
  letters.style.display = `block`;
  numbers.style.display = `none`;
}
function numbersToggle() {
    console.log(`hi`)
  letters.style.display = `none`;
  numbers.style.display = `block`;
}
