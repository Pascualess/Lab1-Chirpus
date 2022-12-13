import { Greeter } from "./greeting";

class HtmlGreeter extends Greeter {
  tagName: string;
  constructor(greeting: string, tagName: string = `h1`) {
    super(greeting);
    this.tagName = tagName;
  }
  greet(name:string):string{
    return `<${this.tagName}>${this.greeting}, ${name}!</${this.tagName}>`
  }
}
let test = new HtmlGreeter(`Welcome`,`p`)

export {HtmlGreeter}