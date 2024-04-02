var User = /** @class */ (function () {
    function User() {
        this.name = "";
        this.age = 0;
    }
    User.prototype.sayHello = function () {
        return "hello, my name is ".concat(this.name, ". ").concat(this.age, " years old.");
    };
    return User;
}());
var user = new User();
user.name = "Yasuaki";
user.age = 24;
console.log(user.sayHello());
