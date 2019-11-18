/* jshint browser: true */
/* jshint expr: true */
var scores, roundScore, activePlayer, diceDisplay1,diceDisplay2,gameOn;
newGame();

diceDisplay1 = document.querySelector('#dice-0');
diceDisplay2 = document.querySelector('#dice-1');


document.querySelector('.btn-roll').addEventListener("click",function(){ 
    if(gameOn){
//    random dice
    var dice1 = Math.floor(Math.random() * 6) +1;
        var dice2 = Math.floor(Math.random() * 6) +1;

//    view dice image
    diceDisplay1.style.display='block';
    diceDisplay1.src="css/images/dice-"+dice1+".png";
    diceDisplay2.style.display='block';
    diceDisplay2.src="css/images/dice-"+dice2+".png";
    
//    update score or change player

    var currentScore = document.getElementById('current-'+activePlayer);
    
        if(dice1!==1 && dice2!==1){
        roundScore += (dice1+dice2) ;
        currentScore.textContent=roundScore;
    }
    else{nextPlayer();}
       
    }});

document.querySelector('.btn-hold').addEventListener("click",function(){

scores[activePlayer]+=roundScore;
if(gameOn){
var playerScore  = document.querySelector('#score-'+activePlayer);
playerScore.textContent=scores[activePlayer];
    
    var input = document.querySelector('.score-limit').value;
    var scoreLimit;
    if(input){
        scoreLimit= input;
    }else{
        scoreLimit = 100;
    }
    if(scores[activePlayer]>=scoreLimit){
        gameOn=false;
        document.querySelector('#name-'+activePlayer).textContent="Winner!";
        diceDisplay1.style.display='none';
        diceDisplay2.style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    }else{
        nextPlayer();
    }  } 
});

document.querySelector('.btn-new').addEventListener("click", newGame);

function nextPlayer(){

var currentScore = document.getElementById('current-'+activePlayer);
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
        roundScore=0;
        currentScore.textContent=0;
       document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        diceDisplay1.style.display='none';
        diceDisplay2.style.display='none';
}

function newGame(){
    gameOn=true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('#dice-0').style.display ='none';
    document.querySelector('#dice-1').style.display ='none';
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    document.querySelector('#name-0').textContent="player 1";
    document.querySelector('#name-1').textContent="player 2";
    document.querySelector('#score-0').textContent='0';
    document.querySelector('#score-1').textContent='0';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}