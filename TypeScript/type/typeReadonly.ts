type User = {
    readonly name: string,
    gender: string,
};

let user: User = {
    name: `Yasuaki`,
    gender: `Male`,
};

// user.name = `error` // error
user.gender = `Female`;

console.log(user);

type Book = {
    title: string,
    price: number,
};

type UserReadonly = Readonly<Book>;

let userReadonly: UserReadonly = {
    title: `abc`,
    price: 1000,
};
// userReadonly.title = `ARC`;  // error
console.log(userReadonly)
