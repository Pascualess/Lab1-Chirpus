import { Greeter } from "../src/greeting";
import { HtmlGreeter } from "../src/htmlgreeter";
import { JavaScriptGreeter } from "../src/JavaScriptGreeter";
import { LoudGreeter } from "../src/loudgreeter";

describe("Greeter tests", () => {
  test(`"Hello"  and "Jake" should return "Hello, Jake!"`, () => {
    let greeterTest = new Greeter("Hello");
    expect(greeterTest.greet("Jake")).toMatch("Hello, Jake!");
  });
  test(`"Welcome"  and "Sephiroth" should return "Welcome, Sephiroth!"`, () => {
    let greeterTest = new Greeter("Welcome");
    expect(greeterTest.greet("Sephiroth")).toMatch("Welcome, Sephiroth!");
  });
});

describe("HtmlGreeter tests", () => {
  test(`"Hello"  and "Jake" should return "<h1>Hello, Jake!</h1>"`, () => {
    let greeterTest = new HtmlGreeter("Hello");
    expect(greeterTest.greet("Jake")).toMatch("<h1>Hello, Jake!</h1>");
  });
  test(`"Welcome"  and "Sephiroth" should return ""<p>Welcome, Sephiroth!</p>""`, () => {
    let greeterTest = new HtmlGreeter("Welcome", "p");
    expect(greeterTest.greet("Sephiroth")).toMatch(
      "<p>Welcome, Sephiroth!</p>"
    );
  });
});

describe("LoudGreeter tests!!!", () => {
  test(`"Hello"  and "Jake" should return "Hello, Jake!"`, () => {
    let greeterTest = new LoudGreeter("Hello");
    expect(greeterTest.greet("Jake")).toMatch("Hello, Jake!!!");
  });
  test(`"Welcome"  and "Sephiroth" should return "Welcome, Sephiroth!!!!"`, () => {
    let greeterTest = new LoudGreeter("Welcome");
    greeterTest.addVolume();
    expect(greeterTest.greet("Sephiroth")).toMatch("Welcome, Sephiroth!!!!");
  });[[]]
});

describe("Greeter tests", () => {
  test(`"Hello"  and "Jake" should return "console.log(Hello, Jake!)"`, () => {
    let greeterTest = new JavaScriptGreeter("Hello");
    expect(greeterTest.greet("Jake")).toMatch("console.log(Hello, Jake!)");
  });
  test(`"Welcome"  and "Sephiroth" should return "console.log(Welcome, Sephiroth!)"`, () => {
    let greeterTest = new JavaScriptGreeter("Welcome");
    expect(greeterTest.greet("Sephiroth")).toMatch(
      "console.log(Welcome, Sephiroth!)"
    );
  });
});
