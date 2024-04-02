function addOne(value: number | string) {
    if(typeof value === `string`) {
        return Number(value) + 1;
    }
    return value + 1;
}

console.log(addOne(1));
console.log(addOne(`1`));


type User = {
    info?: {
        name: string;
        age: number,
    }
}

let response = {};
const user: User = (response as any) as User;

if(user.info) { // user.info is undefined
    console.log(user.info.name);
}
