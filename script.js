const pixelBoard = document.getElementById('pixel-board');
let numberOfPixels = 5;

function criaTabela() {
  for (let index = 1; index <= numberOfPixels; index += 1) {
    const divLinhas = document.createElement('div');
    divLinhas.className = 'divLinhas';
    pixelBoard.appendChild(divLinhas);
    for (let i = 1; i <= numberOfPixels; i += 1) {
      const divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      divLinhas.appendChild(divPixel);
    }
  }
}

criaTabela();

// function definingBoardSize() {
const inputBoardSize = document.getElementById('board-size');
const generateBoard = document.getElementById('generate-board');
generateBoard.addEventListener('click', function () {
  apagar();
  numberOfPixels = parseInt(inputBoardSize.value);
  if (inputBoardSize.value === '') {
    alert('Board inválido!');
  }
  else if (parseInt(inputBoardSize.value) < 5) {
    numberOfPixels = 5;
  }
  else if (parseInt(inputBoardSize.value) > 50) {
    numberOfPixels = 50;
  }
  criaTabela();
});

// }
// definingBoardSize();

function apagar() {
  let classePixel = document.getElementsByClassName('pixel');
  for (let i = classePixel.length - 1; i >= 0; i--) {
    classePixel[i].remove();
  }
  let classeDivLinhas = document.getElementsByClassName('divLinhas');
  for (let i = classeDivLinhas.length - 1; i >= 0; i--) {
    classeDivLinhas[i].remove();
  }
}

// const selectedElement = document.querySelector('.selected');

const firstLi = document.getElementsByClassName('color')[0];
const secondLi = document.getElementsByClassName('color')[1];
const thirdLi = document.getElementsByClassName('color')[2];
const fourthLi = document.getElementsByClassName('color')[3];

const botaoLimpar = document.getElementById('clear-board');
const selectAllPixels = document.querySelectorAll('div.pixel');

botaoLimpar.addEventListener('click', function () {
 apagar();
 criaTabela();
  // for (i = 0; i < numberOfPixels * numberOfPixels; i += 1) {
  //   selectAllPixels[i].style.backgroundColor = "white";
  // }
});

// Gerando cores aleatórias:
function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(generateColor()) // #8432EA

const colorLi1 = 'black';
const colorLi2 = generateColor();
const colorLi3 = generateColor();
const colorLi4 = generateColor();

firstLi.style.backgroundColor = colorLi1;
secondLi.style.backgroundColor = colorLi2;
thirdLi.style.backgroundColor = colorLi3;
fourthLi.style.backgroundColor = colorLi4;


// window.onload = function () {

firstLi.addEventListener('click', function () {
  secondLi.classList.remove('selected');
  thirdLi.classList.remove('selected');
  fourthLi.classList.remove('selected');
  firstLi.classList.add('selected');
  selecionaCor();
});

secondLi.addEventListener('click', function () {
  secondLi.classList.add('selected');
  firstLi.classList.remove('selected');
  thirdLi.classList.remove('selected');
  fourthLi.classList.remove('selected');
  selecionaCor();
});

thirdLi.addEventListener('click', function () {
  firstLi.classList.remove('selected');
  secondLi.classList.remove('selected');
  fourthLi.classList.remove('selected');
  thirdLi.classList.add('selected');
  selecionaCor();
});
fourthLi.addEventListener('click', function () {
  firstLi.classList.remove('selected');
  secondLi.classList.remove('selected');
  thirdLi.classList.remove('selected');
  fourthLi.classList.add('selected');
  selecionaCor();
});

let colorToFill = 'black';
function selecionaCor(){
if (secondLi.classList.contains('selected') === true) {
  colorToFill = colorLi2;
} else if (thirdLi.classList.contains('selected') === true) {
  colorToFill = colorLi3;
} else if (fourthLi.classList.contains('selected') === true) {
  colorToFill = colorLi4;
} else { colorToFill = 'black' };
};

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = colorToFill;
  }
}, false);

// }

