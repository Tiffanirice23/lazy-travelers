'use strict';

let resultsVote = 7;
let productIndexArray = [];

let explore = new Travel ();

function generateRandomProduct() {
    return Math.floor(Math.random() * explore.travel.length);
}