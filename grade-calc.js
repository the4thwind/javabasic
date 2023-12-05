document.querySelector('form').addEventListener('submit', checkGrade);

const A=90;
const B=80;
const C=70;
const D=60;
const F=59;

function checkGrade(e) {
e.preventDefault();

    let myGrade = document.querySelector('input').value;

    let message = `<ul>`;
    
    console.log('RUNNIN THE CALCS!!!!');

    if (myGrade >= A){
    message += `<li>You have an A!</li>`;
    }

    if (myGrade >= B){
        message += `<li>You have a B!</li>`;
    }

    if (myGrade >= C) {
        message += `<li>You have a C..</li>`;
    }

    if (myGrade >= D) {
        message +=  `<li>You have a D...</li>`;
    }

    if (myGrade <= F) {
        message += `<li>You have a F. You are failing.</li>`
    
    }
    message += `</ul>`
document.querySelector('#output').innerHTML = message;
}