

const board = [true, false, true, true, true, true, true, true, true, true, true,
  true, false, true, false, false, false, false, true, false, true, true, true,false, true, false, false, false, false, true, false, false, true, true, true, true, true, true, true,true, true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, false, true, true, false, false, false, false, true, true, true, true, false, true, true, true, true, true, true, true, true,true, true, false, false, true, true, true, false, false, false, false, true, true, false, true, true, true, true, true, true, true, true, true, true, false, true, true];

let character; // Store the chosen character
const killingSound = document.querySelector('#haha');
const characterButtons = document.querySelectorAll('.character-button');
characterButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    document.querySelector('.intro-page').style.zIndex = -1;
    character = event.target.getAttribute('src');
    moveGuy(guyPos);
    const downloadTimer = setInterval(function(){
      timeleft--;
      document.getElementById('countdowntimer').textContent = timeleft;
      if(timeleft === 0){
        //add do something if time is 0.
        //stop keys
        // different screen game over, etc
        clearInterval(downloadTimer);
      }

      const spidermanPos = Math.floor(Math.random()*110);
      const allSquares = document.querySelectorAll('.square');
      allSquares.forEach(square => {
        if (square.classList.contains('spiderman')) {
          square.classList.remove('spiderman');
        }
      });
      const spiderman = document.querySelectorAll('.square')[spidermanPos];

      spiderman.classList.add('spiderman');

    },1000);

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

const guy2Pos = 109;
const guy3Pos = 20;
const guy4Pos = 58;
const guy5Pos = 89;
const guy6Pos = 52;


//People
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

//Killer
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
let numberOfDead = 0;
function guysKilled(){
  if (guy1.classList.contains('guy2') || guy1.classList.contains('guy3') || guy1.classList.contains('guy4') || guy1.classList.contains('guy5') || guy1.classList.contains('guy6')) {
    // alert('u got him!!');
    killingSound.play();
    numberOfDead++;
    if(numberOfDead === 5){
      document.querySelector('.congrats').style.zIndex = '2';
      document.querySelector('.congrats-text').style.zIndex = '2';
    }
    console.log(numberOfDead);
    guy1.className = '';
    guy1.classList.add('square');
    guy1.classList.add('guy');
  }
}
function endOfGame(){

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

//timer
let timeleft = 25;

function handleMouseOver(domElement) {
  console.log(domElement.className);
  const characterName = domElement.className;
  const audio = document.getElementById(characterName);
  audio.play();
}
