let i = 7;

//For loop controller ie: ()
//pos1: Variable declaration and/or initialization
//pos2: Condition to run the loop (needs to be true)
//pos3: Incrementation or change to allow the condition to fail

for(i = 0; i < 10; i++) {
    console.log('nice');
    //increment i
    //verify conditional (hop up if true, leave loop if false)
}

let a = [];

for (let a = 0; a <= 20; a += 2) {
    console.log(a);
}

console.log(a);

for (let z = 10; z >= 0; z--) {
    console.log(z);
}

/* let name = "Patrick";
let pCharacter = name[3];
console.log(pCharacter);
*/

let name = "Alec";  //length= 4

for (let i=0; i < name.length; i++) {
    console.log(name[i]);
}

for (let n of name) {
    console.log(n);
}

let invoice = [3.1, 4.1, 89.98, 3.50];
let total = 0;

for (let i = 0; i < invoice.length; i++) {
    total = total + invoice[i];
}

console.log(total);