let actualTemp = 65;
let desiredTemp = 70;

if (actualTemp < desiredTemp) {
  console.log("Run heat.");
} else if (actualTemp > desiredTemp) {
  console.log("Run A/C.");
} else {
  console.log("Stand by.");
}
let tempCelsius = 18.3;
let targetUnit = "F";

switch (targetUnit.toUpperCase()) {
  case "K":
    tempCelsius = tempCelsius + 273.15;
    break;
  case "C":
    tempCelsius = tempCelsius;
    break;
  case "F":
    tempCelsius = (tempCelsius * 9) / 5 + 32;
    break;
  default:
    tempCelsius = "Error";
}
console.log(`${tempCelsius}`);
