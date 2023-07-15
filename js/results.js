'use strict';
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
let savedArray = localStorage.getItem('travelArray');
if (savedArray) {
  travelArray = JSON.parse(savedArray);
}
console.log('test', travelArray);
let currentHighest = 0;
let highestVotesGetter = {};
for (let i = 0; i < travelArray.length; i++) {
  if (travelArray[i].votes > currentHighest) {
    currentHighest = travelArray[i].votes;
    highestVotesGetter = travelArray[i];
  }
}
console.log(highestVotesGetter.src);
document.getElementById('resultName').innerHTML = highestVotesGetter.name;
document.getElementById('resultsImg').src = highestVotesGetter.src;
