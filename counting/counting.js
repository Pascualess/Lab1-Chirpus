// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }
// for (i = 10; i >= 1; i--) {
//   console.log(i);
// }
// i = 1;
// while (i <= 10) {
//   console.log(i);
//   i += 1;
// }
// i = 10;
// while (i >= 1) {
//   console.log(i);
//   i -= 1;
// }
// i = 1;
// do {
//   console.log(i);
//   i += 1;
// } while (i <= 10);
// i = 10;
// do {
//   console.log(i);
//   i -= 1;
// } while (i >= 1);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (number of numbers) {
//   console.log(number);
// }

function spaceAdder(word) { 

  for (i = word.length; i <= 10; i++) {
    word = ` ${word}`;
    return;
  }
  console.log(word);
}
spaceAdder("planet");

let test = "planet";
i = test.length;

for (i; i <= 10; i++) {
  test = ` ${test}`;
}
console.log(test);
