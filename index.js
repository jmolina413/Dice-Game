let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6

let leftDiceImage = document.querySelector('.img1');
let rightDiceImage = document.querySelector('.img2');    // Select the left image element

leftDiceImage.setAttribute('src', 'images/dice' + randomNumber1 + '.png');    // Change the image source based on the random number
rightDiceImage.setAttribute('src', 'images/dice' + randomNumber2 + '.png'); 

let title = document.querySelector('h1');

if (randomNumber1 > randomNumber2) {
    title.innerHTML = '🚩Player 1 Wins!';
} else if (randomNumber2 > randomNumber1) {
    title.innerHTML = '🚩Player 2 Wins!';
} else {
    title.innerHTML = "Draw!";
}

