// Syntax and Variables
// Generate a random number between 1 and 100
let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

// Selecting DOM elements
// These constants store references to HTML elements we'll interact with
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const messageElement = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');
const historyElement = document.getElementById('history');
const timerElement = document.getElementById('timer');

// Arrays
// This array will store the history of user guesses
let guessHistory = [];

// Functions
// Updates the message displayed to the user, optionally styling it as a success message
function updateMessage(message, isSuccess = false) {
    messageElement.textContent = message;
    messageElement.className = isSuccess ? 'font-bold text-lg mb-2 text-green-600' : 'font-bold text-lg mb-2 text-red-600';
}

// Updates the attempts counter displayed to the user
function updateAttempts() {
    attemptsElement.textContent = `Attempts: ${attempts}/${maxAttempts}`;
}

// Updates the guess history displayed to the user
function updateHistory() {
    historyElement.innerHTML = '<h3 class="font-bold text-lg mb-2">Guess History:</h3>' + 
        guessHistory.map((guess, index) => `<p class="mb-1">${index + 1}. ${guess}</p>`).join('');
}

// Arrow function
// Checks if the game is over (max attempts reached)
const isGameOver = () => attempts >= maxAttempts;

// Event Listener (demonstrates scope)
// This function runs every time the user clicks the guess button
guessButton.addEventListener('click', function() {
    // Arithmetic and Conditionals
    const userGuess = parseInt(guessInput.value);
    attempts++;

    // Validate user input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        updateMessage('Please enter a valid number between 1 and 100.');
        attempts--;
        return;
    }

    // Arrays - push method
    // Add the user's guess to the history
    guessHistory.push(userGuess);

    // Check if the guess is correct, too low, or too high
    if (userGuess === targetNumber) {
        updateMessage(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts!`, true);
        guessButton.disabled = true;
    } else if (userGuess < targetNumber) {
        updateMessage('Too low! Try a higher number.');
    } else {
        updateMessage('Too high! Try a lower number.');
    }

    // Check if the game is over due to max attempts
    if (isGameOver()) {
        updateMessage(`Game over! The number was ${targetNumber}.`);
        guessButton.disabled = true;
    }

    // Update the UI
    updateAttempts();
    updateHistory();
    guessInput.value = '';
    guessInput.focus();
});

// Loops and Global Objects
// This function creates a countdown timer for the game
function countdownTimer() {
    let timeLeft = 60;

    // setInterval demonstrates use of global objects and loops
    const timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timerElement.textContent = `Time left: ${timeLeft} seconds`;
            timeLeft--;
        } else {
            clearInterval(timerInterval);
            timerElement.textContent = 'Time\'s up!';
            guessButton.disabled = true;
            updateMessage(`Game over! The number was ${targetNumber}.`);
        }
    }, 1000);
}

// Start the game
// Initialize the attempts display and start the timer
updateAttempts();
countdownTimer();