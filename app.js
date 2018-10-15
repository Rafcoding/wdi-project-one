

const board = [true, false, true, true, true, true, true, true, true, true, true,
  true, false, true, false, false, false, false, true, false, true, true, true,false, true, false, false, false, false, true, false, false, true, true, true, true, true, true, true,true, true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, false, true, true, false, false, false, false, true, true, true, true, false, true, true, true, true, true, true, true, true,true, true, false, false, true, true, true, false, false, false, false, true, true, false, true, true, true, true, true, true, true, true, true, true, false, true, true];


window.addEventListener('keydown', function(event) {

  if (event.which === 38) {
    moveUp();

  } else if (event.which === 40) {
    moveDown();
  } else if (event.which === 37) {
    moveLeft();
  } else if (event.which === 39) {
    moveRight();
  }
});

const $allSquares = $('.square');

const guy2Pos = 109;
const guy3Pos = 20;
const guy4Pos = 58;
const guy5Pos = 89;
const guy6Pos = 52;
// const guy2Pos = Math.floor(Math.random()*110);
// const guy3Pos = Math.floor(Math.random()*110);
// const guy4Pos = Math.floor(Math.random()*110);
// const guy5Pos = Math.floor(Math.random()*110);
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
guy1.classList.add('guy');


function moveRight(){
  if (board[guyPos + 1]){
    guy1.classList.remove('guy');
    guyPos++;
    guy1 = document.querySelectorAll('.square')[guyPos];
    guysKilled();
  } else {
    return false;
  }

}
function moveLeft(){

  if (board[guyPos - 1]){
    guy1.classList.remove('guy');
    guyPos--;
    guy1 = document.querySelectorAll('.square')[guyPos];
    guysKilled();
  } else {
    return false;
  }
}
function moveUp(){
  if (board[guyPos - 11]){
    guy1.classList.remove('guy');
    guyPos-=11;
    guy1 = document.querySelectorAll('.square')[guyPos];
    guysKilled();
  } else {
    return false;
  }
}
function moveDown(){
  if (board[guyPos + 11]){
    guy1.classList.remove('guy');
    guyPos+=11;
    guy1 = document.querySelectorAll('.square')[guyPos];
    guysKilled();
  } else {
    return false;
  }

}
function guysKilled(){
  if (guy1.classList.contains('guy2') || guy1.classList.contains('guy3') || guy1.classList.contains('guy4') || guy1.classList.contains('guy5') || guy1.classList.contains('guy6')) {
    alert('u got him!!');
    guy1.className = '';

  }
  guy1.classList.add('guy', 'square');
}
