'use strict';

let travelArray = [];
let randomArray = [];

let counter = 0;

let myContainer = document.getElementById('#imgContainer');
let vacationPicOne = document.getElementById('vacationPicOne');
let vacationPicTwo = document.getElementById('vacationPicTwo');
let vacationPicThree = document.getElementById('vacationPicThree');

function Vacation(name, fileName, fileExtension = 'jpg') {
    this.name = name;
    this.fileName = fileName;
    this.src = `./img/${this.fileName}.${fileExtension}`;
    this.votes = 0;

    // this.render = function() {
    //   let container = document.querySelector('#imgContainer');
    //   let image1 = document.getElementById('#imgContainer');



    //   let img = document.createElement('img');
    //   img.src = this.src;
    //   container.append(img);
    // }
}

function makeTravelArray() {
    let travel1 = new Vacation('ireland', 'travel1');
    let travel2 = new Vacation('switzerland', 'travel2');
    let travel3 = new Vacation('mexico', 'travel3');
    let travel4 = new Vacation('zimbabwa', 'travel4');
    let travel5 = new Vacation('cockney', 'travel5');

    travelArray.push(travel1, travel2, travel3, travel4, travel5);
}
// function renderVacation(img1, img2, img3) {
//   let container = document.querySelector('#imgContainer');
//   container.innerHTML = '';
//   for (let i = 0; i < travelArray.length; i++) {
//     // console.log('inside of the for loop');
//     let name = travelArray[i].name;
//     // console.log(name);
//     if (name === img1 || name === img2 || name === img3) {
//       console.log('inside of the if statement');
//       travelArray[i].render();
//       // this.render(travelArray[i]);
//     }
//   }
// }
function randomNumberGenerator () {
  return Math.floor(Math.random() * travelArray.length);
}

function renderVacation(){
  while (randomArray.length < 4) {
    let randomNum = randomNumberGenerator();
    if (!randomArray.includes(randomNum)) {
      randomArray.push(randomNum);
    }
  }
  console.log(travelArray);

  let imgOneIndex = randomArray.shift();
  let imgTwoIndex = randomArray.shift();
  let imgThreeIndex = randomArray.shift();
  
  vacationPicOne.src = travelArray[imgOneIndex].src;
  vacationPicOne.alt = travelArray[imgOneIndex].name;
  travelArray[imgOneIndex].votes++;
  vacationPicTwo.src = travelArray[imgTwoIndex].src;
  vacationPicTwo.alt = travelArray[imgTwoIndex].name;
  travelArray[imgTwoIndex].votes++;
  vacationPicThree.src = travelArray[imgThreeIndex].src;
  vacationPicThree.alt = travelArray[imgThreeIndex].name;
  travelArray[imgThreeIndex].votes++;
}



// function selectRandomTravelNumber() {
//   let randomNum;
//   do {
//     randomNum = Math.floor(Math.random() * travelArray.length);
//   } while (travelArray.includes(randomNum));
//   return randomNum;
// }
// function selectRandomTravelNumber() {
//     return Math.floor(Math.random() * travelArray.length);
// }
// When the very first time the code loads what is the value of the array? Empty array, not Nothing.


makeTravelArray();
renderVacation ();
