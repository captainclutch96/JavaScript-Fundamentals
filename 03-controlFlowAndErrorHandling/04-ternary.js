let num = 6;

//ternary

num > 0 ? console.log('yeah') : console.log('nah');

(num > 0)
? console.log('yeah')
: console.log('nah');

(num > 0 && num < 5)
? console.log('yes')
: (num > 5)
    ? console.log('I`m greater than 5')
    : console.log('Nah');

// Challenge, write the AGE IF/ELSE as a big ternary

let age = 50;

(age >= 25)
? console.log('Yay, you can rent a car!')
: (age >= 21)
  ? console.log('Yay, you can drink!')
  : (age >= 18)
    ? console.log('Yay, you can vote!')
    : console.log('Sorry bout it');