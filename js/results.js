‘use strict’;
// let resultsVote = 7;
// let productIndexArray = [];
// let explore = new Travel ();
// function generateRandomProduct() {
//     return Math.floor(Math.random() * explore.travel.length);
// }
/* view results function
takes the voting data and find the array item with the highest votes
for loop i = 0 <
Highest votes are
if statement helper
*/
let travelArray = [];
let savedArray = localStorage.getItem(‘travelArray’);
if (savedArray) {
  travelArray = JSON.parse(savedArray);
}
let currentHighest = 0;
let highestVotesGetter = {};
for (let i = 0; i < travelArray.length; i++) {
<<<<<<< HEAD
    if (travelArray[i].votes > currentHighest) {
        currentHighest = travelArray[i].votes;
        highestVotesGetter = travelArray[i];
    }
}
console.log(highestVotesGetter.src);
document.getElementById('resultsImg').src = highestVotesGetter.src;
=======
  if (travelArray[i].votes > currentHighest) {
    currentHighest = travelArray[i].votes;
    highestVotesGetter = travelArray[i];
  }
}
console.log(highestVotesGetter.src);
document.getElementById(‘resultsImg’).src = highestVotesGetter.src;
// 3:30 work on presentation 4pm meeting

>>>>>>> 0d0d92e44cd8edc9a9ee2f983adffb1ec9058373


