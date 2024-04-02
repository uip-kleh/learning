function addOne(value) {
    if (typeof value === "string") {
        return Number(value) + 1;
    }
    return value + 1;
}
console.log(addOne(1));
console.log(addOne("1"));
var response = {};
var user = response;
if (user.info) {
    console.log(user.info.name);
}
