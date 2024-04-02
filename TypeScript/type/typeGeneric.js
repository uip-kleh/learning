var Queue = /** @class */ (function () {
    function Queue() {
        this.array = [];
    }
    Queue.prototype.push = function (item) {
        this.array.push(item);
    };
    Queue.prototype.pop = function () {
        return this.array.shift();
    };
    Queue.prototype.display = function () {
        console.log(this.array.join(','));
    };
    return Queue;
}());
var queue = new Queue();
queue.push(111);
queue.push(112);
// queue.push(`hoge`);  // error
queue.display();
