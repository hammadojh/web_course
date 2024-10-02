// Welcome to the Number Guessing Game starter!
// Your task is to implement a browser-based number guessing game.
// Follow the instructions in the comments to complete the game.

// TODO: Generate a random number between 1 and 100
// Hint: Use Math.random() and Math.floor()
// let targetNumber = ...

// TODO: Initialize variables for tracking attempts and max attempts
// let attempts = ...
// const maxAttempts = ...

// TODO: Create an empty array to store guess history
// let guessHistory = ...

// TODO: Select DOM elements
// Hint: Use document.getElementById() to select elements
// const guessInput = ...
// const guessButton = ...
// const messageElement = ...
// const attemptsElement = ...
// const historyElement = ...
// const timerElement = ...

// TODO: Implement the updateMessage function
function updateMessage(message, isSuccess = false) {
  // Update the message element's text content
  // Set the appropriate class for styling (success or failure)
}

// TODO: Implement the updateAttempts function
function updateAttempts() {
  // Update the attempts element to show current attempts out of max attempts
}

// TODO: Implement the updateHistory function
function updateHistory() {
  // Clear the history element
  // Add a heading for the guess history
  // Add each guess from the guessHistory array to the history element
}

// TODO: Implement the isGameOver function
// Hint: Use an arrow function
// const isGameOver = ...

// TODO: Implement the game logic
// Add an event listener to the guess button
guessButton.addEventListener('click', function() {
  // 1. Get the user's guess from the input
  // 2. Validate the user input (should be a number between 1 and 100)
  // 3. Increment the attempts counter
  // 4. Add the guess to the guessHistory array
  // 5. Check if the guess is correct, too low, or too high
  // 6. Update the message, attempts, and history displays
  // 7. Check if the game is over (correct guess or max attempts reached)
  // 8. If the game is over, disable the guess button
  // 9. Clear the input field and focus on it for the next guess
});

// TODO: Implement the countdownTimer function
function countdownTimer() {
  // Set up a 60-second countdown timer
  // Update the timer element every second
  // When the timer reaches 0, end the game
}

// TODO: Start the game
// 1. Update the attempts display
// 2. Start the countdown timer

// Remember to test your game thoroughly and handle edge cases!
// Good luck, and have fun implementing your number guessing game!