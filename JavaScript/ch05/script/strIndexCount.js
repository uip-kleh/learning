let str = `THISISSTRING`;
let cnt = 0;
let keywd = `S`;
let pos = str.indexOf(keywd);

while(pos !== -1) {
    cnt++;
    pos = str.indexOf(keywd, pos + keywd.length);
}

console.log(`${keywd} is included ${cnt} times!`);
