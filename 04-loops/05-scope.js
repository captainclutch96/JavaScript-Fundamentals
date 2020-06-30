let myName = "Carson";

function someProcess() {
    const myName = "X-AE-A12";
    console.log(myName);
}

//let myName = "Potato";

//console.log(myName);

//someProcess();

let y = 12;

function scopey() {
    y = 33;
    console.log(y);//1
}

console.log(y); //4
scopey();  //2
console.log(y); //3



var slope = 12;

function varTest() {
    var slope = 56;
    if (true) {
        var slope = 9001;
        console.log(slope);
    }
    console.log(slope);
}

varTest();
console.log(slope);