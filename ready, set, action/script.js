function main() {
  let growMe = document.querySelector("#grow-me");
  let shrinkMe = document.querySelector("#shrink-me");
  let li = document.querySelectorAll("li");
  let link = document.querySelector(".link");
  let hideMe = document.querySelector(`#hide-me`);
  let showMe = document.querySelector(`#show-me`)
  let newName = document.querySelector(`h1`)
  let input = document.querySelector(`#name`)
  console.log(input.value);
  growMe.classList.add("big");
  shrinkMe.classList.remove("big");
  for (i of li) {
    console.log(i.innerText);
  }
  link.setAttribute("href", "https://www.example.com");
  link.innerText = "somewhere";
  hideMe.style.display = "none";
  showMe.style.display = `block`
  newName.innerText = `Welcome ${input.value}!`

}
