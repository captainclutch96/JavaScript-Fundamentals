//Booleans
let isOn = true;

let isRaining = false;

//NULL
let empty = null;

//Undefined
let undef = undefined;
console.log(undef);

let whatAmI;
console.log(whatAmI);

//Numbers
let degrees = 90;
console.log(degrees);

let ratherLarge = 999999999999999;   //this is 15 9's
console.log(ratherLarge);

let whatIsGoingOnHere = 9999999999999999;  //this is 16 9's
console.log(whatIsGoingOnHere);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 + 10 ) / 10
console.log(numbersAreHard);

let created = Number('123'); //turn 123 into the number 123
console.log(created);

//Strings
let stringOne = 'doubleydoos';
let stringTwo = 'singleydoos';

let first = 1050 + 100;
let second = '1050' + 100;
let third = 1050 + '100';
let last = '1050' + '100';
console.log(first, second, third, last);

let firstName = "Alec";
let lastName = "Martin";
console.log(firstName + " " + lastName);

//Escape characters
let myMessage = '\\don\'t do this\\';
console.log(myMessage);

//Objects
let frodo = {
    race: 'Hobbit',
    rings: 1,
    cloak: true,
    primaryWeapon: {
        'Sting'
        attack: 30,
        damage: false
    }
};

console.log(typeof frodo);

//Arrays

let groceryList = [
    'Banana',
    'Kiwi',
    'Coconut',
    21
];

let aThing = [23, {isOn: true, electricity: 'AC'}, ['wallaby']];
console.log(aThing instanceof Array);

//Strings: Methods
let userTitle = "a dAy in ThE lIfE of DeV";
console.log(userTitle.toUpperCase());
console.log(userTitle.trim());
console.log(userTitle.includes('in'));