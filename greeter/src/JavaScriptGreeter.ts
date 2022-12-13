import { Greeter } from "./greeting";

class JavaScriptGreeter extends Greeter {
  constructor(greeting: string) {
    super(greeting)
  };
 greet(name:string) {
    return `console.log(${this.greeting}, ${name}!)`
 }
}
export {JavaScriptGreeter}