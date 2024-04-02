let books = [
    {title: `ABC: for beginner`, rank: 2000},
    {title: `ARC: for regular`, rank: 3000},
    {title: `AGC: for greater`, rank: 4000},
];

console.log(books.some(function(value) {
    return value.rank < 4000;   // judge the existance
}));
