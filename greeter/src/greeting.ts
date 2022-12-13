class Greeter{
    greeting:string;

    constructor(greeting :string){
        this.greeting = greeting
    }

    greet(name:string) :string{
        return `${this.greeting}, ${name}!`
    }
}
let test = new Greeter(`Hello`)
export { Greeter}

