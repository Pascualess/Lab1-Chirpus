const howMany = document.querySelector(`#howMany`);
const form = document.querySelector(`#moneyForm`);
const moneyType = document.querySelector(`#moneyType`);
const coinHolder = document.querySelector(`#coinHolder`);

form.addEventListener(`submit`, makeMoney);

coinHolder.addEventListener(`click`, (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
  e.target.remove();
});

function makeMoney(event) {
  // when submit, create a NUMBER of img of the TYPE of coin
  event.preventDefault();

  let data = new FormData(form);

  let number = data.get(`number`);
  // check what moneyType if or switch statment
  console.log(moneyType.value);
  console.log(number);

  for (let i = 1; i <= number; i++) {
    let image = document.createElement(`img`);
    switch (moneyType.value) {
      case `q`:
        image.src = `./quarter.jpg`;
        image.style.width = "156px";
        image.style.height = "auto";
        coinHolder.appendChild(image);
        console.log(`hi ${i}`);

        break;

      case `d`:
        image.src = `./dime.jpg`;
        image.style.width = "115px";
        image.style.height = "auto";
        coinHolder.appendChild(image);
        console.log(`hi ${i}`);

        break;

      case `p`:
        image.src = `./penny.jpg`;
        image.style.width = "122px";
        image.style.height = "auto";
        coinHolder.appendChild(image);
        console.log(`hi ${i}`);

        break;

      case `n`:
        image.src = `./nickle.jpg`;
        image.style.width = "135px";
        image.style.height = "auto";
        coinHolder.appendChild(image);
        console.log(`hi ${i}`);

        break;

      //make that coin howMany times
    }
  }
}
