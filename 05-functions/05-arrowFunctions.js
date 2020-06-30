// FAT ARROW FUNCTION

let fatArrow = () => {
    console.log('I reside in the NEW way of writing functions.');
}

fatArrow();

// Concise body only allows for a single statement in the function body;
let conciseBody = () => console.log('I am concise');

conciseBody();

let testMyLimits = () => console.log(7);

testMyLimits();

// Block body allows for multiple line statements
let blockBody = () => {
    let y = 0;
    y += 4;
    console.log(y);
}

blockBody();