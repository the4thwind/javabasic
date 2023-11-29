document.querySelector('form').addEventListener('submit', checkAge);


const license = 18;
const jrop = 16;
const rental = 25;

let myAge = 15;

function checkAge(e) {
e.preventDefault();

    let myAge = document.querySelector('input').value;

    let message = `<ul>`;
    
    console.log('RUNNIN THE CALCS!!!!'+myAge);

    if (myAge < license && myAge >= jrop){
    message += `<li>you can have a jrOp License</li>`;
    }

    if (myAge >= license){
        message += `<li>you can have a regular license</li>`;
    }

    if (myAge >= rental) {
        message += `<li>you can rent a car</li>`;
    }

    if (myAge < jrop) {
        message +=  `<li>you're too young to drive!!!</li>`;
    }
    message += `</ul>`
document.querySelector('#output').innerHTML = message;
}