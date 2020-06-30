/*
Make a tip calculator using a function
That takes in the BILL (number)
Have it RETURN the TIP (number)
Capture that returned TIP in a VARIABLE
Print that variable
*/

let tipCalc = (total) => {
    return total * 0.2;
}

let tip = tipCalc(70);

console.log(tip);