interface User {
    name: string,
    social?: {
        facebook: boolean,
        twitter: boolean,
    },
};

let user: User = {
    name: `Yasuaki`,
    social: {
        facebook: true,
        twitter: true,
    }
};

console.log(user.social?.facebook); // true

user = {name: `Yasuaki`};
console.log(user.social?.facebook); // undefined
