
// Fabian Gal

//Most of this code has been inspired from https://www.w3schools.com/, We have tried to look for similar code but unfortunately, in most cases it was irrelevant or too advanced for us to understand. If any content has been copied, there are references available in the comments.

// https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array#:~:text=var%20value%20%3D%20array.splice(,of%20the%20item%20as%20well).

const playebleSlots = [1,2,3,4,5,6,7,8,9]; //This is the enrire grid 1 to 9
console.log(playebleSlots); // All console logs are used to observe the progress and errors

var index; // This index is being used to remove a specific number from the array in the functions oneX,twoX...
var showOnClick; //This variable is used to display the player choice once a cell is selected.
var i; //This variable is used for loops.
var playerChoices = [];
var computerRandomChoice;
var computerChoices =[];
var computerWon = false;
var playerWon = false;


// These functions are the boxes that are going to display the x on click. There must have been a better way to do it unfortunatelly I am not aware of it for the time being
// I am keeping it like this for now as it works and if there is time I will hopefully look on how to rewrite this.

function oneX() {
	showOnClick = document.getElementById("1"); //this will look for the id of 1
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");// this will look inside the id of 1 for an image with the calass of x and remove the class of game-hide-x to reveal the x img.

    // console.log("you have picked slot no: 1"); //Checking the code 

    playerChoices.push(1);
    console.log("player Choices: [" + playerChoices + "]");

    index = playebleSlots.indexOf(1); //this will look for the number 1 inside the playebleSlots and will take it away.
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
    
    blockPlayerFromSelecting(); //this will run a function that will not allow the player to select any other box as the turn of the computer is due. After there will be another function letting the player continue playing.
    checkForWinPlayer()
}
// From here on is copy/paste and changing the numbers
function twoX() {
	showOnClick = document.getElementById("2");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");

    // console.log("you have picked slot no: 2");

    playerChoices.push(2);
    console.log("player Choices: [" + playerChoices + "]");

    index = playebleSlots.indexOf(2);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
    
    blockPlayerFromSelecting();

    checkForWinPlayer()

}
function threeX() {
	showOnClick = document.getElementById("3");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");

    // console.log("you have picked slot no: 3");

    playerChoices.push(3);
    console.log("player Choices: [" + playerChoices + "]");

    index = playebleSlots.indexOf(3);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
    
    blockPlayerFromSelecting();

    checkForWinPlayer()

}

function fourX() {
	showOnClick = document.getElementById("4");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");

    // console.log("you have picked slot no: 4");

    playerChoices.push(4);
    console.log("player Choices: [" + playerChoices + "]");

    index = playebleSlots.indexOf(4);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
    
    blockPlayerFromSelecting();

    checkForWinPlayer()
 
}
function fiveX() {
	showOnClick = document.getElementById("5");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");

    // console.log("you have picked slot no: 5");

    playerChoices.push(5);
    console.log("player Choices: [" + playerChoices + "]");

    index = playebleSlots.indexOf(5);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
    
    blockPlayerFromSelecting();

    checkForWinPlayer()

}
function sixX() {
	showOnClick = document.getElementById("6");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");

    // console.log("you have picked slot no: 6");

    playerChoices.push(6);
    console.log("player Choices: [" + playerChoices + "]");

    index = playebleSlots.indexOf(6);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
    
    blockPlayerFromSelecting();

    checkForWinPlayer()
 
}

function sevenX() {
	showOnClick = document.getElementById("7");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    
    // console.log("you have picked slot no: 7");

    playerChoices.push(7);
    console.log("player Choices: [" + playerChoices + "]");

    index = playebleSlots.indexOf(7);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
    
    blockPlayerFromSelecting();

    checkForWinPlayer()
}
function eightX() {
	showOnClick = document.getElementById("8");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");

    // console.log("you have picked slot no: 8");

    playerChoices.push(8);
    console.log("player Choices: [" + playerChoices + "]");

    index = playebleSlots.indexOf(8);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
    
    blockPlayerFromSelecting();
    
    checkForWinPlayer()

}
function nineX() {
	showOnClick = document.getElementById("9");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    
    // console.log("you have picked slot no: 9");
    
    playerChoices.push(9);
    console.log("player Choices: [" + playerChoices + "]");

    index = playebleSlots.indexOf(9);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }

    blockPlayerFromSelecting();

    checkForWinPlayer()
    
}




// Fawas Omoshonwon
function checkChoices(){
	console.log("available slots: " + playebleSlots);
	console.log(playebleSlots);
}



function computerTurn(){
    if (playebleSlots.length > 0){
        computerRandomChoice = playebleSlots[Math.floor(Math.random()*playebleSlots.length)];//Select a random number from the number of items left

        index = playebleSlots.indexOf(computerRandomChoice);
        if (index > -1){
            playebleSlots.splice(index, 1);
        }

        computerChoices.push(computerRandomChoice);
        console.log("Computer Choices: [" + computerChoices + "]");

        var showComputerChoice; //place the O
        showComputerChoice = document.getElementById(computerRandomChoice);
        showComputerChoice.querySelector("img.o").classList.remove("game-hide-o");
        showComputerChoice.classList.add("disabled"); // This disacbles the cell from being clicked

        // console.log("computer random choice: " + computerRandomChoice);
        console.log(playebleSlots);
        
        allowPlayerToSelect();
        checkForWinComputer();
    }
}


// Emiraldo Fernandes
// these are the possible winning combinations for both playerand computer
const h1= [1,2,3];
const h2= [4,5,6];
const h3= [7,8,9];
const v1= [1,4,7];
const v2= [2,5,8];
const v3= [3,6,9];
const x1= [1,5,9];
const x2= [3,5,7];


// I took the contains from: https://www.tutorialspoint.com/how-to-check-whether-multiple-values-exist-within-a-javascript-array
// this contains element is going to look for matching numbers in const from h1 to x2 above
const contains = (first, second) => {
    const indexArray = first.map(el => {
       return second.indexOf(el);
    });
    return indexArray.indexOf(-1) === -1;
}
// this fuction will tell which combination the player won with
function checkForWinPlayer(){
    if (contains(h1,playerChoices) == true){
        console.log("Player won, using H1 !!!");
        blockPlayerFromSelecting();
        playerWon = true;
    }else if (contains(h2,playerChoices) == true){
        console.log("Player won, using H2 !!!");
        blockPlayerFromSelecting();
        playerWon = true;
    }else if (contains(h3,playerChoices) == true){
        console.log("Player won, using H3 !!!");
        blockPlayerFromSelecting();
        playerWon = true;
    }else if (contains(v1,playerChoices) == true){
        console.log("Player won, using V1 !!!");
        blockPlayerFromSelecting();
        playerWon = true;
    }else if (contains(v2,playerChoices) == true){
        console.log("Player won, using V2 !!!");
        blockPlayerFromSelecting();
        playerWon = true;
    }else if (contains(v3,playerChoices) == true){
        console.log("Player won, using V3 !!!");
        blockPlayerFromSelecting();
        playerWon = true;
    }else if (contains(x1,playerChoices) == true){
        console.log("Player won, using X1 !!!");
        blockPlayerFromSelecting();
        playerWon = true;
    }else if (contains(x2,playerChoices) == true){
        console.log("Player won, using X2 !!!");
        blockPlayerFromSelecting();
        playerWon = true;
    }else if (playebleSlots.length == 0){
        console.log("Draw");
        document.getElementById("winningText").innerHTML = "Draw."
        $('#modal').modal('show');
    }else{
        setTimeout(function(){ computerTurn(); }, 400); //This lets the computer to play after 400 ms If the player did not win. 
        showOnClick.classList.add("disabled"); //this prevents the cell from being clicked again
    }
    console.log(playerWon);
    if(playerWon == true){
        $('#modal').modal('show');
        console.log("This will trigger the  modal");
    }
}
// this fuction will tell which combination the computer won with
function checkForWinComputer(){
    if (contains(h1,computerChoices) == true){
        console.log("Computer won, using H1 !!!");
        blockPlayerFromSelecting();
        computerWon= true;
    }else if (contains(h2,computerChoices) == true){
        console.log("Computer won, using H2 !!!");
        blockPlayerFromSelecting();
        computerWon= true;
    }else if (contains(h3,computerChoices) == true){
        console.log("Computer won, using H3 !!!");
        blockPlayerFromSelecting();
        computerWon= true;
    }else if (contains(v1,computerChoices) == true){
        console.log("Computer won, using V1 !!!");
        blockPlayerFromSelecting();
        computerWon= true;
    }else if (contains(v2,computerChoices) == true){
        console.log("Computer won, using V2 !!!");
        blockPlayerFromSelecting();
        computerWon= true;
    }else if (contains(v3,computerChoices) == true){
        console.log("Computer won, using V3 !!!");
        blockPlayerFromSelecting();
        computerWon= true;
    }else if (contains(x1,computerChoices) == true){
        console.log("Computer won, using X1 !!!");
        blockPlayerFromSelecting();
        computerWon= true;
    }else if (contains(x2,computerChoices) == true){
        console.log("Computer won, using X2 !!!");
        blockPlayerFromSelecting();
        computerWon= true;
    }else{
        console.log("Computer did not win yet.")
    }
    if(computerWon == true){
        document.getElementById("winningText").innerHTML = "You lost."
        $('#modal').modal('show');
        console.log("This will trigger the  modal");
    }
}

//Fabian Gal -

//This blocks the player from selecting any other slot while the computer's turn is due.
function blockPlayerFromSelecting(){
    // console.log("Player can no longer select.");
    for( i=0; i<playebleSlots.length; i++){
        var disableSlots = playebleSlots[i];
        document.getElementById(disableSlots).classList.add("disabled");
    }
}

//  This removes the desable class from all the ids that are left in the playeblle slots and allows the player to continue playing.
function allowPlayerToSelect(){
    for( i=0; i<playebleSlots.length; i++){
        var disableSlots = playebleSlots[i];
        document.getElementById(disableSlots).classList.remove("disabled");
    }
    // console.log("Player can now select a box.");
}

function checkButton(){
    console.log("PlayerChoices: ["+playerChoices+"]");
    console.log("Computer Choices: ["+computerChoices+"]");
}

// Fawas Omoshonwon
function refreshButton() {
	location.reload();
}



