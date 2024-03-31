let x = 1;
let y = 0;

try {
    if(y === 0) {
        throw new Error(`number cannot be diveded by zero!`);
    }
    let z = x / y;
} catch(e) {
    console.log(e.message);
} finally {
    console.log(`process is completed!`)
}
