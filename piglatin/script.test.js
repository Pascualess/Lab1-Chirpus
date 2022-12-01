
let main = require(`./script`);

test(`"hello world" would return in pig latin "elloay orlday`, () => {
  let test = main.pigLatinTranslator(`hello world`);
  expect(test).toBe(`ellohay orldway`);
});
test(`"apple" would return "appleway"`, () => {
  let test = main.pigLatinTranslator(`apple`);
  expect(test).toBe(`appleway`);
});
test(`"else" would return "elseway"`, () => {
  let test = main.pigLatinTranslator(`else`);
  expect(test).toBe(`elseway`);
});
test(`"please" would return "easeplay"`, () => {
  let test = main.pigLatinTranslator(`please`);
  expect(test).toBe(`easeplay`);
});
test(`"Flip" would return "Ipflay"`, () => {
  let test = main.pigLatinTranslator(`Flip`);
  expect(test).toBe(`Ipflay`);
});
test(`"grab" would return "abgray"`, () => {
  let test = main.pigLatinTranslator(`grab`);
  expect(test).toBe(`abgray`);
});
test(`"just in case" would return "ustjay inway asecay"`, () => {
  let test = main.pigLatinTranslator(`just in case`);
  expect(test).toBe(`ustjay inway asecay`);
});
test(`"black" would return "ackblay"`, () => {
  let test = main.pigLatinTranslator(`black`);
  expect(test).toBe(`ackblay`);
});
test(`"shrimp" would return "impshray"`, () => {
  let test = main.pigLatinTranslator(`shrimp`);
  expect(test).toBe(`impshray`);
});
