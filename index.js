let Player1, Player2;
let playersSet = false;

function getPlayerNames() {
  Player1 = prompt("Please enter Player 1 name:") || "Player 1"; 
  Player2 = prompt("Please enter Player 2 name:") || "Player 2";
  document.querySelectorAll("p")[0].innerHTML = Player1;
  document.querySelectorAll("p")[1].innerHTML = Player2;
}


function rollDice() {
  if (!playersSet) {
    getPlayerNames();
    playersSet = true;
  }
  
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var image1 = document.querySelectorAll("img")[0];
  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var randomImageSource = "images/" + randomDiceImage; 
  image1.setAttribute("src", randomImageSource);
  
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var image2 = document.querySelectorAll("img")[1];
  var randomDiceImage2 = "dice" + randomNumber2 + ".png";
  var randomImageSource2 = "images/" + randomDiceImage2; 
  image2.setAttribute("src", randomImageSource2);
  
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = `${Player1} Wins`;
  } 
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = `${Player2} Wins`;
  } 
  else {
    document.querySelector("h1").innerHTML = "It's a DRAW";
  }
}