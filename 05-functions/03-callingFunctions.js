// Function Declaration
// 1     2           3
function greeting() {
    console.log(`Hi, I'm Paul!`);
}

//1=>Keyword Function
//2=>Name of Function, and () that denote parameters
//3=>Body of the function

function hi() {
    console.log('Ayo');
}

/*hi();
hi;
console.log(hi);
console.log((hi));
*/

//Create a function that, when invoked, lists out the numbers between 1-10;

let printNumbers = function() {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

printNumbers();

console.log(printNumbers);

//IIFE
(function () { console.log('Why is this working') })();