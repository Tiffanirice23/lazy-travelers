'use strict';

// travelArray handles ALL travel images that pass through the website
let travelArray = [];
// While the randomArray sets the random image in the index to be selected.
let randomArray = [];


let counter = 0;
let maxCounter = 29;

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
    this.img = new Image();
    this.votes = 0;

    this.img.src = this.src;
}

function createContinent() {
    // 24 instances
    const continentArray = ['aztec', 'california', 'candyland', 'ecuador', 'everest', 'italy', 'mayan', 'mexico', 'norway', 'paris', 'rome', 'sicily', 'switzerland'];

    // JPEG: aztec, thailand, viet

    // PNG: california, ecuador, everest, france, germany,  harbor, italy, lithuania, mayan, mexico, norway, paris, rome, sicily, switzerland

    // JPG: candyland, Travel 1-5, 

    for (let i = 0; i < continentArray.length; i++) {
        if (['aztec'].includes(continentArray[i])) {
            travelArray.push(new Vacation(continentArray[i], continentArray[i], 'jpeg'));
        } else if (['candyland'].includes(continentArray[i])) {
            travelArray.push(new Vacation(continentArray[i], continentArray[i], 'jpg'));
        } else {
            travelArray.push(new Vacation
                (continentArray[i], continentArray[i]));
        }
    }
    console.log(travelArray);
}
createContinent();



function randomNumberGenerator() {
    return Math.floor(Math.random() * travelArray.length);
}

function renderVacation() {

    const imgContainer = document.getElementById('imgContainer');
    imgContainer.innerHTML = '';

    while (randomArray.length < 4) {
        let randomNum = randomNumberGenerator();
        if (!randomArray.includes(randomNum)) {
            randomArray.push(randomNum);
        }
    }

    let imgOneIndex = randomArray.shift();
    let imgTwoIndex = randomArray.shift();
    let imgThreeIndex = randomArray.shift();

    imgContainer.append(travelArray[imgOneIndex].img);
    imgContainer.append(travelArray[imgTwoIndex].img);
    imgContainer.append(travelArray[imgThreeIndex].img);
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
