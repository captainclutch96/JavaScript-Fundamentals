let temperature = 75;

if (temperature < 65) {
    console.log('wear a jacket');
} else {
    console.log('no jacket necessary');
}

let myName = 'Alec';

if (myName === 'Alec') {
    console.log(`Hello, my name is ${ myName }.`);
} else {
    console.log(`Hello, is your name ${ myName }?`);
}

//ifElse

let age = 30;

//Older than 25, say "Yay, you can rent a car!"
//Older than 21 but less than 25, say "Hey, you can buy alcohol"
//Older than 18 but less than 21, say "Hey, you can vote!"
//Less than 18, say "Hey, you can do stuff one day."

if (age >= 25) {
    console.log('Yay, you can rent a car!')
} else if (age >= 21) {
    console.log('Hey, you can buy alcohol!')
} else if (age >= 18) {
    console.log('Hey, you can vote!')
} else {
    console.log('Sorry \'bout it.')
}