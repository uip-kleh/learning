for(let i=1; i<10; i++) {
    let result = i % 3;
    switch(result) {
        case 0:
            break;
        case 1:
        case 2:
            console.log(`${i} cannot be divided by 3!`);
            break;
    }
}
