//body
const body= document.getElementsByTagName('body')[0];
//selecting boxes
const boxesDiv= document.getElementsByClassName('boxes')[0];
boxesDiv.style.marginTop= '80px';
const boxes= document.getElementsByClassName('box');
const player1Tag= document.getElementById('player1');
const player1TagName= document.createElement('p');
player1Tag.appendChild(player1TagName);
const player2Tag= document.getElementById('player2');
const player2TagName= document.createElement('p');
player2Tag.appendChild(player2TagName);

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
//Name field and div 
const nameFieldDiv1= document.createElement('div');
const nameFieldDiv2= document.createElement('div');
startHeader.appendChild(nameFieldDiv1);
startHeader.appendChild(nameFieldDiv2);
const player1name= document.createElement('input');
const player2name= document.createElement('input');
nameFieldDiv1.appendChild(player1name);
player1name.style.display= 'inline-block';
player2name.style.display= 'inline-block';
player1name.style.marginTop= "20px";
player2name.style.marginTop= '20px';
nameFieldDiv2.appendChild(player2name);
player1name.placeholder= 'Player 1 Name';
player2name.placeholder= 'Player 2 Name';
//vs. AI button
const vsAIbutton= document.createElement('a');
vsAIbutton.textContent= "Play vs. AI";
vsAIbutton.href= "#";
vsAIbutton.className= "button";
vsAIbutton.style.marginTop= "20px";
startHeader.appendChild(vsAIbutton);
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
body.appendChild(winDiv);
winDiv.className= "screen screen-win";
winDiv.id= "finish";
winH1.textContent= "Tic Tac Toe";
winP.className= "message";
winNewGameButton.href= '#';
winNewGameButton.className= "button";
winNewGameButton.textContent= 'New game';
winDiv.style.display= "none";
//******************************************** */


//start button event listener.
startButton.addEventListener('click', ()=>{
    startDiv.style.display="none";
    vsGame();
});

//vsAIbutton event listener
vsAIbutton.addEventListener('click', ()=>{
    startDiv.style.display= "none";
    vsAIGame();

});

//win new game button event listener
winNewGameButton.addEventListener('click', ()=>{
    winDiv.style.display= "none";
    clearBoard();
    vsGame();
});


let oTagged= [];
let xTagged= [];
let squaresUsed= [];
let turnCount= 0;

function vsGame(){
    
    player1TagName.textContent= player1name.value;
    player2TagName.textContent= player2name.value;

    player1Tag.className= "players active";
    player2Tag.className= "players";
    for(let i=0; i< boxes.length; i++){
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
               
                boxes[i].style.backgroundImage= "";
                  
            }
        });
        boxes[i].addEventListener('click', ()=> {
        if(!boxes[i].classList.contains("checked")){
            if(turnCount % 2 == 0){
                boxes[i].className= "box checked box-filled-1"
                // turnCount ++;
                player2Tag.classList.add('active');
                player1Tag.classList.remove('active');
                oTagged.push(i);
                squaresUsed.push(i);
                console.log(turnCount);
            }else{
                boxes[i].className= "box checked box-filled-2";
                // turnCount ++;
                player1Tag.classList.add('active');
                player2Tag.classList.remove('active');
                xTagged.push(i);
                squaresUsed.push(i);
                console.log(turnCount);
            }
            turnCount ++;
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
        if(isDraw()== true){
            winDiv.style.display= "block";
            winDiv.style.backgroundColor= "#54D17A";
            winP.textContent= "Draw";
            }
    });
  }
}

let squaresAvail= [0, 1, 2, 3, 4, 5, 6, 7, 8];
function vsAIGame(){
    
    player1TagName.textContent= player1name.value;

    player1Tag.className= "players active";
    player2Tag.className= "players";
    for(let i=0; i< boxes.length; i++){
        //add hover effect on squares depending on player
        boxes[i].addEventListener('mouseover', ()=> {
            if(!boxes[i].classList.contains("checked")){
                if(player1Tag.classList.contains('active')){
                    boxes[i].style.backgroundImage= "url('../img/o.svg')";
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
        boxes[i].addEventListener('click', ()=> {
        if(!boxes[i].classList.contains("checked")){
           
            boxes[i].className= "box checked box-filled-1"
            player2Tag.classList.add('active');
            player1Tag.classList.remove('active');
            oTagged.push(i);
            squaresUsed.push(i);
            squaresAvail.splice(i, 1);
            console.log(squaresAvail);
           
            AIplay();
            
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
        if(isDraw()== true){
            winDiv.style.display= "block";
            winDiv.style.backgroundColor= "#54D17A";
            winP.textContent= "Draw";
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
    if(squaresUsed.length>= 9 &&
        winDiv.style.display== "none"){
        return true;
            }else {
                return false;
            }       
}


function clearBoard(){
    oTagged= [];
    xTagged= [];
    squaresUsed= [];
    turnCount=0;
    squaresAvail= [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for(let j=0; j<boxes.length; j++){
        boxes[j].className= "box";
        boxes[j].style.backgroundImage="";
    }
}

function AIplay(){
    let computerChoice= Math.floor(Math.random() * (squaresAvail.length));

    let compArray= squaresAvail[computerChoice];
    player1Tag.classList.add('active');
    player2Tag.classList.remove('active');

    boxes[compArray].className= "box checked box-filled-2";
    
    
    xTagged.push(compArray);
    squaresUsed.push(boxes[compArray]);//must stay
    squaresAvail.splice(computerChoice, 1);
    console.log(squaresAvail);
}