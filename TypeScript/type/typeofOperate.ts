interface User {
    name: string;
    age: number;
    email: string;
}

type UserKey = keyof User;

const key1: UserKey = `name`;
// const key2: UserKey = `phone`;   // error

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user: User = {
    name: `yasuaki`,
    age: 24,
    email: `h23ms416@hirosaki-u.ac.jp`,
}

const userName = getProperty(user, `name`);
// const userGender = getProperty(user, `gender`);  // error
