let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess = null;
while (guess !== secretNumber) {
    guess = parseInt(prompt("Guess the number between 1 and 100:"));
    if (guess === secretNumber) {
        alert(" Correct! The secret number was " + secretNumber);
    } else if (guess < secretNumber) {
        alert("Too low! Try again.");
    } else if (guess > secretNumber) {
        alert("Too high! Try again.");
    } else {
        alert("Please enter a valid number.");
    }
}
