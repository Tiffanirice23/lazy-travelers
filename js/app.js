'use strict';

let travelArray = [];
let randomArray = [];

let counter = 0;

// Object Constructor
function Vacation(name, fileName, fileExtension = 'jpg') {
    this.name = name;
    this.fileName = fileName;
    this.src = `./img/${this.fileName}.${fileExtension}`;
    this.votes = 0;
}

function makeTravelArray() {
    let Travel1 = new Vacation('ireland', 'Travel1');
    let Travel2 = new Vacation('switzerland', 'Travel2');
    let Travel3 = new Vacation('mexico', 'Travel3');
    let Travel4 = new Vacation('zimbabwa', 'Travel4');
    let Travel5 = new Vacation('cockney', 'Travel5');

    travelArray.push(Travel1, Travel2, Travel3, Travel4, Travel5);
}



let myContainer = document.querySelector('#imgContainer');
let Travel1 = document.querySelector('#imgContainer img:first-child');
let Travel2 = document.querySelector('#imgContainer img:nth-child(2)');
let Travel3 = document.querySelector('#imgContainer img:nth-child(3)');

function selectRandomTravelNumber() {
    return Math.floor(Math.random() * travelArray.length);
}
// When the very first time the code loads what is the value of the array? Empty array, not Nothing.
function renderTravel() {
    while (randomArray.length < 3) {
        // How do we get the randomArray to become false? Length must be higher number than 6. How do we change the length of the array? 

        let random = selectRandomTravelNumber(); // 5
        while (!randomArray.includes(random)) {
            randomArray.push(random)
        }
        console.log(randomArray.length)
    }
}
console.log(travelArray)


makeTravelArray();

renderTravel();