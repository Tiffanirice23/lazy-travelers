'Use Strict'

let imgArray = [];

let getimgArray = localStorage.getItem('imgArray');

const travelNames = []

if (getimgArray) {
  imgArray = JSON.parse(getimgArray);
} else {
  let ???? = new ???? ('');
  
  imgArray.push(image1, image2, image3);
}

let indexArray = [];

let myContainer = document.querySelector('section');

let imgElements = document.querySelectorAll('img');

let viewResultsBtn = document.querySelector('section ~ div');

let counter = 0;
let maxCounter = 7;

function ImgName(name, fileExtention = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtention}`;
  this.views = 0;
  this.votes = 0;
}

for (let i = 0; i < imgElements.length; i++) {
  let randomIndex = productIndexArray.shift()

  imgElements[i].src = state.allProducts[randomIndex].source
  imgElements[i].title = state.allProducts[randomIndex].name
  imgElements[i].alt = state.allProducts[randomIndex].name
  state.allProducts[randomIndex].timesShown++;
}


function selectRandomImgNumber() {
  return Math.floor(Math.random() * imgArray.length);
}

function renderImg() {
  while (indexArray.length < 6) {
    let randomIndex = selectRandomImgNumber();
    console.log(randomIndex);
    if (!indexArray.includes(randomIndex)) {
      indexArray.push(randomIndex);
    }
  }
  let imageOneIndex = indexArray.shift();
  let imageTwoIndex = indexArray.shift();
  let imageThreeIndex = indexArray.shift();

  image1.src = imgArray[imageOneIndex].src;
  image1.alt = imgArray[imageOneIndex].name;
  imgArray[imageOneIndex].views++;
  image2.src = imgArray[imageTwoIndex].src;
  image2.alt = imgArray[imageTwoIndex].name;
  imgArray[imageTwoIndex].views++;
  image3.src = imgArray[imageThreeIndex].src;
  image3.alt = imgArray[imageThreeIndex].name;
  imgArray[imageThreeIndex].views++;
}

function handleImgClick(event) {
  counter++;
  console.log(event.target.alt);
  let clickedImg = event.target.alt;
  for (let i = 0; i < imgArray.length; i++) {
    if (clickedImg === imgArray[i].name) {
      imgArray[i].votes++;
      console.log(imgArray);
    }
  }
  if (counter < maxCounter) {
    renderImg();
  } else {
    // remove event listeners
    myContainer.removeEventListener('click', handleImgClick);
    viewResultsBtn.addEventListener('click', viewResults);
  }
  let stringifyimgArray = JSON.stringify(imgArray);
  localStorage.setItem('imgArray', stringifyimgArray);
}

function viewResults() {
  viewResultsBtn.removeEventListener('click', viewResults);
}

renderImg();

myContainer.addEventListener('click', handleImgClick);

resetBtn.addEventListener('click', reset);

viewResultsBtn.addEventListener('click', viewResults);
myContainer.addEventListener('click', handleOddClick);

// console.log(imgArray.votes);
