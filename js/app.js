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
    vsGame();
});

//win new game button event listener
winNewGameButton.addEventListener('click', ()=>{
    winDiv.style.display= "none";
    clearBoard();
    turnCount=0;//does not reset game to start on o 
    vsGame();
});

let oTagged= [];
let xTagged= [];
let squaresUsed= [];

function vsGame(){
    let turnCount= 0;

    player1Tag.className= "players active";
    player2Tag.className= "players";
    for(let i=0; i< boxes.length; i++){
        boxes[i].addEventListener('click', ()=> {
        if(!boxes[i].classList.contains("checked")){
            if(turnCount % 2 == 0){
                boxes[i].className= "box checked box-filled-1"
                turnCount ++;
                player2Tag.classList.add('active');
                player1Tag.classList.remove('active');
                oTagged.push(i);
                squaresUsed.push(i);
                console.log(squaresUsed);
            }else{
                boxes[i].className= "box checked box-filled-2";
                turnCount ++;
                player1Tag.classList.add('active');
                player2Tag.classList.remove('active');
                xTagged.push(i);
                squaresUsed.push(i);
                console.log(squaresUsed);
            }
        }
        checkWin(oTagged, 0,1,2);
        checkWin(xTagged, 0,1,2);
        checkWin(oTagged, 0,3,6);
        checkWin(xTagged, 0,3,6);
        checkWin(oTagged, 0,4,8);
        checkWin(xTagged, 0,4,8);
        checkWin(oTagged, 1,4,7);
        checkWin(xTagged, 1,4,7);
        checkWin(oTagged, 2,4,6);
        checkWin(xTagged, 2,4,6);
        checkWin(oTagged, 2,5,8);
        checkWin(xTagged, 2,5,8);
        checkWin(oTagged, 3,4,5);
        checkWin(xTagged, 3,4,5);
        checkWin(oTagged, 6,7,8);
        checkWin(xTagged, 6,7,8);

        //add hover effect on squares depending on player
        boxes[i].addEventListener('mouseover', ()=> {
            if(!boxes[i].classList.contains("checked")){
                if(player1Tag.classList.contains('active')){
                   boxes[i].style.backgroundImage= "url('../img/o.svg')";
                }else{
                    boxes[i].style.backgroundImage= "url('../img/x.svg')";
                }
            }
        });
        //remove hover effect when mouse leaves square 
        boxes[i].addEventListener('mouseleave', ()=> {
            if(!boxes[i].classList.contains("checked")){
                if(player1Tag.classList.contains('active')){
                   boxes[i].style.backgroundImage= "";
                }else{
                    boxes[i].style.backgroundImage= "";
                }
            }
        });

    }
}



function checkWin(playerArray, a, b, c){
    if(playerArray.includes(a) &&
        playerArray.includes(b) &&
        playerArray.includes(c)){
            body.appendChild(winDiv);
            winDiv.style.display= "block";
            if(playerArray== oTagged){
            winDiv.style.backgroundColor= "#FFA000";
            winP.textContent= "Player 1 Wins";
            }else if(playerArray== xTagged){
                winDiv.style.backgroundColor= "#3688C3";
                winP.textContent= "Player 2 Wins"; 
            }
    }
}


//cannot get this function to return true when draw
function isDraw(){
    if(squaresUsed.length== 9 &&
        winDiv.style.display== "none"){
        return true;
            }else {
                return false;
            }

            // if(isDraw()==true){
            //     winDiv.style.display== "block";
            //     winDiv.style.backgroundColor= "#54D17A";
            //     winP.textContent= "Draw";
            //     }
            // });
}


function clearBoard(){
        //clear board
        //need a lot of work here. 
        for(let j=0; j<boxes.length; j++){
            boxes[j].className= "box";
            oTagged= [];
            xTagged= [];
            squaresUsed= [];
        }
}

//draw div

