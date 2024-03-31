let book = {
    title: `just keep buying`,
    publisher: `IDONTKNOW`,
    price: 2680,
};

let {title, ...rest} = book;
console.log(title);
console.log(rest);

