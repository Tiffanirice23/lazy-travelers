'use strict';

// travelArray handles ALL travel images that pass through the website
let travelArray = [];
// While the randomArray sets the random image in the index to be selected.
let randomArray = [];

// let travelArrayFromStorage = localstorage.getItem('travelArray')
// if (travelArrayFromStorage){
//     travelArray = JSON.parse(travelArrayFromStorage);
// } else 

let counter = 0;
let maxCounter = 30;

// quereyselector would need a # or CSS selector.
// getelementByID just needs the ID of the element.
let myContainer = document.getElementById('imgContainer');

let vacationPicOne = document.getElementById('vacationPicOne');
let vacationPicTwo = document.getElementById('vacationPicTwo');
let vacationPicThree = document.getElementById('vacationPicThree');


// slashes break deploument on github pages
function Vacation(name, fileName, fileExtension = 'png') {
  this.name = name;
  this.fileName = fileName;
  this.src = `img/${fileName}.${fileExtension}`;
  this.votes = 0;
}

function createContinent() {
  // 24 instances
  const continentArray = ['aztec', 'california', 'candyland', 'ecuador', 'everest', 'france', 'germany', 'harbor', 'italy', 'lithuania', 'mayan', 'mexico', 'norway', 'paris', 'rome', 'sicily', 'switzerland', 'thailand', 'Travel1', 'Travel2', 'Travel3', 'Travel4', 'Travel5', 'viet'];

  // JPEG: aztec, thailand, viet

  // PNG: california, ecuador, everest, france, germany,  harbor, italy, lithuania, mayan, mexico, norway, paris, rome, sicily, switzerland

  // JPG: candyland, Travel 1-5, 

  for (let i = 0; i < continentArray.length; i++) {
    if (['aztec', 'thailand', 'viet'].includes(continentArray[i])) {
      travelArray.push(new Vacation(continentArray[i], continentArray[i], 'jpeg'))
    } else if (['candyland', 'Travel1', 'Travel2', 'Travel3', 'Travel4', 'Travel5'].includes(continentArray[i])) {
      travelArray.push(new Vacation(continentArray[i], continentArray[i], 'jpg'))
    } else {
      travelArray.push(new Vacation
      (continentArray[i], continentArray[i]))
    }
  }
  console.log(travelArray);
}
createContinent();

// function makeTravelArray() {
//     let travel1 = new Vacation('ireland', 'Travel1');
//     let travel2 = new Vacation('switzerland', 'Travel2');
//     let travel3 = new Vacation('mexico', 'Travel3');
//     let travel4 = new Vacation('zimbabwa', 'Travel4');
//     let travel5 = new Vacation('cockney', 'Travel5');

//     travelArray.push(travel1, travel2, travel3, travel4, travel5);
// }


function randomNumberGenerator() {
  return Math.floor(Math.random() * travelArray.length);
}

function renderVacation() {
  while (randomArray.length < 4) {
    let randomNum = randomNumberGenerator();
    if (!randomArray.includes(randomNum)) {
      randomArray.push(randomNum);
    }
  }

  let imgOneIndex = randomArray.shift();
  let imgTwoIndex = randomArray.shift();
  let imgThreeIndex = randomArray.shift();

  vacationPicOne.src = travelArray[imgOneIndex].src;
  vacationPicOne.alt = travelArray[imgOneIndex].name;
  vacationPicTwo.src = travelArray[imgTwoIndex].src;
  vacationPicTwo.alt = travelArray[imgTwoIndex].name;
  vacationPicThree.src = travelArray[imgThreeIndex].src;
  vacationPicThree.alt = travelArray[imgThreeIndex].name;
}

// create event.handler
function handleTravelClick(event) {
  console.log(travelArray);
  counter++;
  console.log(event.target.alt);
  let clickedTravel = event.target.alt;
  // find a the duck instance in the duck array whose name property equals the clickedTravel value.
  for (let i = 0; i < travelArray.length; i++) {
    if (clickedTravel === travelArray[i].name) {
      travelArray[i].votes++;
      console.log(travelArray);
    }
  }

  // check to see if the round has ended
  if (counter < maxCounter) {
    // the round can continue
    renderVacation();
  } else {
    // this removes the event listener in order to prevent continued voting.
    myContainer.removeEventListener('click', handleTravelClick);
    // make the button clickable
    viewResultsBtn.addEventListener('click', viewResults);
    // stop the game and render the results
    
  }
  let stringifyTravelArray = JSON.stringify(travelArray);
  localStorage.setItem('travelArray', stringifyTravelArray);
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


renderVacation();
myContainer.addEventListener('click', handleTravelClick);
