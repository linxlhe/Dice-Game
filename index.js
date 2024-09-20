var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);

// set first image randomly
var newImage1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", newImage1);

// set second image randomly
var newImage2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", newImage2);

// game logic
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML= "Player 2 wins!🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}