let list = [1, 2, null, 3, 5];

try {
    list.forEach(function(value) {
        if(value === null) {
            throw new Error(`Found null!`);
        }
        console.log(value);
    });
} catch(e) {
    console.log(e.message);
}
