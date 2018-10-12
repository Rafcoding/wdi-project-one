// let guy = document.getElementById('guy');
// let container = document.getElementsByClassName('container');



window.addEventListener('keydown', function(e) {
  console.log(e.which);
  if (e.which === 38) {
    moveUp();
  } else if (e.which === 40) {
    moveDown();
  } else if (e.which === 37) {
    moveLeft();
  } else if (e.which === 39) {
    moveRight();
  }
});

const $allSquares = $('.square');
let guy2Pos = 35;
let guy2 = document.querySelectorAll('.square')[guy2Pos];
guy2.classList.add('guy2');

let guyPos = 0;
let guy1 = document.querySelectorAll('.square')[guyPos];
guy1.classList.add('guy');
// leftButton.addEventListener('click', moveLeft);
// rightButton.addEventListener('click', moveRight);

function moveRight(){
  guy1.classList.remove('guy');
  guyPos++;
  guy1 = document.querySelectorAll('.square')[guyPos];
  guy1.classList.add('guy');
}
function moveLeft(){
  guy1.classList.remove('guy');
  guyPos--;
  guy1 = document.querySelectorAll('.square')[guyPos];
  guy1.classList.add('guy');
}
function moveUp(){
  guy1.classList.remove('guy');
  guyPos-=6;
  guy1 = document.querySelectorAll('.square')[guyPos];
  guy1.classList.add('guy');
}
function moveDown(){
  guy1.classList.remove('guy');
  guyPos+=6;
  guy1 = document.querySelectorAll('.square')[guyPos];
  guy1.classList.add('guy');
}
//
// document.addEventListener('click', moveRight);
