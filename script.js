//Weird scope - don't use
//var x = 5;
//regualr old variable
console.log("Hello World");

let y = 6;
y=10; //You can change the value

const z = 7; //can't be changed
//z=10; becomes error

console.log (y,z);
console.log (y+z);
console.log (y-z);
console.log (y*z);
console.log (y/z);
console.log (y%z);
console.log (y**z);

let fname="Vi";
let lname="Horne";
console.log(fname + " " + lname);
console.log(`${fname} ${5*3}`);
console.log(lname + 6);

let user="the4thwind";
let pass="foo";

if (user == "the4thwind" && pass == "foo"){
    console.log('you are ' + user + 'your pass is ' + pass);
} else {
    console.error("NUH UH YOU ISN'T");
}

const license = 18;
const jrop = 16;
const rental = 25;

let myAge = 15;

function checkAge( myAge) {
    console.log('RUNNIN THE CALCS!!!!'+myAge);
    if (myAge < license && myAge >= jrop){
    console.log('you can have a jrOp License');
    }

    if (myAge >= license){
    console.log('you can have a regular license');
    }

    if (myAge >= rental) {
    console.log('you can rent a car');
    }

    if (myAge < jrop) {
    console.log ("you're too young to drive!!!");
    }
}

checkAge(6);
checkAge(17);
checkAge(19);
checkAge(37);