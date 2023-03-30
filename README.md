# Wordle-Project


## HTML

1. Created a HTML layout. Include Header, seperate container for the grid and keyboard, assign class and id's. Keyboard buttons taken from w4d1 flexbox keyboard homework.


## Javascript

1. Create 30 squares/grid using DOM, assign class to squares and id's for each square.
```js
// Define a function called createSquares
function createSquares() {

    // Select the HTML element with the id "grid" and store it in a variable called gridBoard
    const gridBoard = document.getElementById('grid');

    // Loop through 30 times using a for loop
    for (let index = 0; index < 30; index++) {

        // Create a new HTML element called "div" and store it in a variable called squares
        let squares = document.createElement('div');
        
        // Add the class "squares" to the new "div" element
        squares.classList.add('squares');
        
        // Set the "id" attribute of the new "div" element to be the current value of the "index" variable plus 1
        squares.setAttribute('id', index + 1);
        
        // Append the new "div" element to the "gridBoard" element
        gridBoard.appendChild(squares);
    }
}

```
2. Create a function and add event listener to each element with the class 'keyboard-row'.
   
   * In the handleClick function, the event.target property is used to get the specific button that was clicked. The getAttribute method is used to get the value of the data-key attribute of that button
  
```js
// Select all the elements with class "keyboard-row" and store them in the keys variable
 const keys = document.querySelectorAll('.keyboard-row')

// This function is triggered when a button is clicked
function handleClick(event) {

  // Get the target element that was clicked
  // Get the value of the data-key attribute on the clicked element
  const letter = event.target.dataset.key;;
}

// Select all the button elements in the keyboard and set their onclick handler to the handleClick function
for (let i = 0; i < keys.length; i++) {
  keys[i].onclick = handleClick;
}
```

3. Update the guessed word array with a new letter, and display the newly added letter on the game board.

```js
// Initialise guessedWords as an array containing an empty array and set availableSpace to 1
let guessedWords = [[]]
let availableSpace = 1

// This function retrieves the current word array from the guessedWords array
function getCurrentWordArray() {
  const numberOfGuessedWords = guessedWords.length;
  return guessedWords[numberOfGuessedWords - 1];
}

// This function updates the guessed word with the given letter
function updateGuessedWord(letter) {
  // Get the current word array
  const currentWordArray = getCurrentWordArray();

  // Check if the current word array exists and has fewer than 5 letters
  if (currentWordArray && currentWordArray.length < 5) {
    // Add the letter to the current word array
    currentWordArray.push(letter);

    // Get the available space element and update its text content with the letter
    let availableSpaceElement = document.getElementById(availableSpace);
    availableSpace = availableSpace + 1;
    availableSpaceElement.textContent = letter;
  }
}
```

4. When the user clicks the "Enter" button, it submits the guessed word. Check if the guessedWord equals word ('HELLO'), alert the result.
   
```js
    function handleSubmitWord() {

        // get the current word array
        const currentWordArray = getCurrentWordArray()

        // check if the length of the current word array is not equal to 5
        if (currentWordArray.length !==5) {
            alert ('Must be 5 letters')
            return
        }

    // join the letters in the current word array to form a word
        const currentWord = currentWordArray.join('')

    // check if the current word is equal to the word to guess  
        if (currentWord === word) {
            alert ('You Win!')
        }

        //if guessedWords is not equal to word in 6 tries, alert user the correct word
        if (guessedWords.length === 6) {
            alert (`No more guesses! The word is ${word}`)
        }

    // add an empty array to the guessedWords array
        guessedWords.push([])
    }
   ```

5. Call the handleSubmitWord() in the HandleClick() using if statement. I hard coded the work 'HELLO' so i can check if it works

```js
    let word = 'HELLO'

    if (letter === 'enter') {
         handleSubmitWord()
         return
     }
```

5. Function to delete the last letter from getCurrentWordArray using pop. The updated current word array is then stored in the guessedWords array

```js
let guessedWords = [[]]

function handleDeleteLetter() {
  // Get the current word array
  const currentWordArray = getCurrentWordArray()

  // Remove the last letter from the current word array
  const removeLetter = currentWordArray.pop

  // Replace the last array in guessedWords with the updated currentWordArray
  guessedWords[guessedWords.length - 1] = currentWordArray

  // Get the element for the last letter that was added
  const lastLetterElement = document.getElementById(availableSpace - 1)

  // Clear the text content of the last letter element
  lastLetterElement.textContent = ''

  // Decrement availableSpace to update the ID of the last letter element
  availableSpace = availableSpace - 1
}
```

6. If statment to check if letter is in the right postion and turn green. If letter is in wrong position turn yellow

```js
let squareCounter = 0

squareCounter++;

// Check if the letter is in the correct position
const position = currentWordArray.length - 1
                
    if (word[position] === letter) {
        // If the letter is in the correct position, add a CSS class to the square element
        const squareElement = document.getElementById(squareCounter);
        squareElement.classList.add('correct');
    } else {
        // check if the letter is in the word but in the wrong position
        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                const squareElement = document.getElementById(squareCounter);
                squareElement.classList.add('almost');
            }
        }
    }    
```