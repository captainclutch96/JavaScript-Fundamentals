let coffee = ['espresso', 'nitro cold brew', 'cappuccino', 'frappuccino'];

console.log(coffee[2]);

let veryBest = coffee.pop();
console.log(veryBest);

console.log(coffee);

coffee.push('latte');

console.log(coffee);

// Stack (LIFO) stack of pancakes
// array.pop();
// array.push(<item>);

// Queue (FIFO) line for a rollercoaster
// Array.shift();
// Array.unshift(<item>);

let firstItem = coffee.shift();
console.log(firstItem);
console.log(coffee);

coffee.unshift('instant', 'drip');
console.log(coffee);

console.log(coffee.indexOf('cappuccino'));

coffee.forEach((item) => {
    console.log(item.length);
});