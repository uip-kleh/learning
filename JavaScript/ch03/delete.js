let data = [`Python`, `Ruby`, `C++`];
console.log(delete data[0]);
console.log(data);  // only value of data[0] is deleted
console.log(data.length);   // 3

let langs = {primary: `Japanese`, secondary: `English`};
console.log(delete langs.primary);
console.log(langs);
console.log(delete langs.secondary);
