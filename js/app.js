//body
const body= document.getElementsByTagName('body')[0];
//selecting boxes
const boxesDiv= document.getElementsByClassName('boxes')[0];
const boxes= document.getElementsByClassName('box');
const player1Tag= document.getElementById('player1');
const player2Tag= document.getElementById('player2');

//creating start screen************************
const startDiv= document.createElement('div');
const startHeader= document.createElement('header');
const startH1= document.createElement('h1');
const startButton= document.createElement('a');
startDiv.appendChild(startHeader).appendChild(startH1);
startHeader.appendChild(startButton);
startDiv.className= "screen screen-start";
startDiv.id= "start";
startH1.textContent= "Tic Tac Toe";
startButton.textContent= "Start game";
startButton.href= '#';
startButton.className= "button";
body.appendChild(startDiv);
//******************************************* */

//creating win screen***********************
const winDiv= document.createElement('div');
const winHeader= document.createElement('header');
const winH1= document.createElement('h1');
const winP= document.createElement('p');
const winNewGameButton= document.createElement('a');
winDiv.appendChild(winHeader).appendChild(winH1);
winHeader.appendChild(winP);
winHeader.appendChild(winNewGameButton);
winDiv.className= "screen screen-win";
winDiv.id= "finish";
winH1.textContent= "Tic Tac Toe";
winP.className= "message";
winNewGameButton.href= '#';
winNewGameButton.className= "button";
winNewGameButton.textContent= 'New game';
//******************************************** */



//start button event listener.
startButton.addEventListener('click', ()=>{

startDiv.style.display="none";

vsHumanGame();
});

//function which adds class to squares to show x or o
function listenClicks(playerNumber){
    //test for button clicks. 
    for(let i=0; i<boxes.length; i++){
        if(!boxes[i].classList.contains("checked")){
            boxes[i].addEventListener('click', ()=>{
                boxes[i].className= "box checked box-filled-"+playerNumber;
                if(playerNumber== 1){
                    player2active();
                }else{
                    player1active();
                }
            });
            
        }
    }
}


//game function
function vsHumanGame(){
    player1active();


}

//player 1 is active
function player1active(){
    player1Tag.className= "players active";
    player2Tag.className= "players";
    listenClicks(1);
}


//player 2 is active
function player2active(){
    player2Tag.className= "players active";
    player1Tag.className= "players";
    listenClicks(2);
}

function whichPlayerActive(){
    if(player1Tag.classList.contains("active")===true){
        return true;
    }else{
        return false;
    }
}