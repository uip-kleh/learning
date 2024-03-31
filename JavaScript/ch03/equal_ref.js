let data1 = [0, 1, 2];
let data2 = data1;
data1 = [10, 20, 30];   // data1 ref adress which is defferent from that of data2
console.log(data2); // data2 doesn't ref data1 adress anymore
