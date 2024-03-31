let classes = [`one`, `two`, `three`];
let member = [
    {name: 1, class: `one`},
    {name: 2, class: `two`},
    {name: 3, class: `three`},
    {name: 4, class: `one`},
];

console.log(member.sort(function(x, y) {
    return classes.indexOf(x.class) - classes.indexOf(y.class);
}));

