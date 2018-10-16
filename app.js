

const board = [true, false, true, true, true, true, true, true, true, true, true,
  true, false, true, false, false, false, false, true, false, true, true, true,false, true, false, false, false, false, true, false, false, true, true, true, true, true, true, true,true, true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, false, true, true, false, false, false, false, true, true, true, true, false, true, true, true, true, true, true, true, true,true, true, false, false, true, true, true, false, false, false, false, true, true, false, true, true, true, true, true, true, true, true, true, true, false, true, true];
let character; // Store the chosen character

const characterButtons = document.querySelectorAll('.character-button');
characterButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    document.querySelector('.intro-page').style.zIndex = -1;
    character = event.target.getAttribute('src');
    moveGuy(guyPos);
    console.log('clicked on', character);
  });
});

window.addEventListener('keydown', function(event) {

  if (event.which === 38) {
    event.preventDefault();
    moveUp();

  } else if (event.which === 40) {
    event.preventDefault();
    moveDown();
  } else if (event.which === 37) {
    event.preventDefault();
    moveLeft();
  } else if (event.which === 39) {
    event.preventDefault();
    moveRight();
  }
});

// const $allSquares = $('.square');

const guy2Pos = 109;
const guy3Pos = 20;
const guy4Pos = 58;
const guy5Pos = 89;
const guy6Pos = 52;
let spidermanPos = Math.floor(Math.random()*110);
const spiderman = document.querySelectorAll('.square')[spidermanPos];
spiderman.classList.add('spiderman');
const moveSpiderMan = setInterval(function(){

}, 500);

const guy2 = document.querySelectorAll('.square')[guy2Pos];
guy2.classList.add('guy2');
const guy3 = document.querySelectorAll('.square')[guy3Pos];
guy3.classList.add('guy3');
const guy4 = document.querySelectorAll('.square')[guy4Pos];
guy4.classList.add('guy4');
const guy5 = document.querySelectorAll('.square')[guy5Pos];
guy5.classList.add('guy5');
const guy6 = document.querySelectorAll('.square')[guy6Pos];
guy6.classList.add('guy6');

let guyPos = 0;
let guy1 = document.querySelectorAll('.square')[guyPos];

function moveRight(){
  const newPos = guyPos + 1;
  moveTo(newPos);
}

function moveLeft(){
  const newPos = guyPos - 1;
  moveTo(newPos);
}

function moveUp(){
  const newPos = guyPos - 11;
  moveTo(newPos);
}

function moveDown(){
  const newPos = guyPos + 11;
  moveTo(newPos);
}

function moveTo(newPos) {
  if (board[newPos]){
    moveGuy(newPos);
    guysKilled();
  } else {
    return false;
  }
}

function guysKilled(){
  if (guy1.classList.contains('guy2') || guy1.classList.contains('guy3') || guy1.classList.contains('guy4') || guy1.classList.contains('guy5') || guy1.classList.contains('guy6')) {
    alert('u got him!!');
    guy1.className = '';
    guy1.classList.add('square');
    guy1.classList.add('guy');
  }
}

function moveGuy(newPos) {
  guy1.style.backgroundImage = '';
  guy1.classList.remove('guy');
  guy1 = document.querySelectorAll('.square')[newPos];
  console.log('character is', character);
  guy1.style.backgroundImage = `url(${character})`;
  guy1.classList.add('guy');
  guyPos = newPos;
}

// const jason = {className: 'jason', image: url('images/Jason-icon (1).png')};
// const chuckie = {className: 'chuckie', image: url('images/Chuckie-icon (1).png')};
// const scream  = {className: 'scream', image: url('images/Ghostface-icon.png')};
// const pennywise = {className: 'penny', image: url('images/Pennywise-icon (1).png')};

// const startGame(){
//   // pickYourKiller
//   // startTimer
//
// // }
// document.getElementsByClassName("killers").addEventListener("click", characterSelected);
//
// function characterSelected() {
//     document.getElementsByClassName("killers").innerHTML = ;
// }
