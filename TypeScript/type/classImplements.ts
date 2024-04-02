interface IUser {
    name: string;
    age: number;
    sayHello: () => string,
}

class User implements IUser {
    name: string;
    age: number;

    constructor() {
        this.name = ``;
        this.age = 0;
    }

    sayHello(): string {
        return `hello, my name is ${this.name}. ${this.age} years old.`;
    }
}

const user = new User();
user.name = `Yasuaki`;
user.age = 24;
console.log(user.sayHello());
