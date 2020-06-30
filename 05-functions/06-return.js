let returnToSender = () => {
    return 'Not Here';
}

let value = returnToSender();

console.log(value);

let what = () => returnToSender();

let hmm = what();

console.log(hmm);

function WhatCanIDo() {
    return 6;
}