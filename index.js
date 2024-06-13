// Generate a random number between 1 and 6 (inclusive) for the first player's dice roll
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6//dice1.png - dice6.png

// Create the image source path for the first player's dice image
var randomImageSource = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png

// Set the source attribute of the first image on the page to display the corresponding dice image for the first player's roll
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

// Generate a random number between 1 and 6 (inclusive) for the second player's dice roll
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 3) + 3; // 3 ile 6 arasında sayı üretir
if (randomNumber2 === 3) {
  randomNumber2++; // 3 ise 4'e çevir
}


// Create the image source path for the second player's dice image
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Set the source attribute of the second image on the page to display the corresponding dice image for the second player's roll
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Compare the numbers rolled by both players and display the result in the heading element on the page
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎉 First Player Has Won! 🎉";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🎉 Second Player Has Won! 🎉";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
