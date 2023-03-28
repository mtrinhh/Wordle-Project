document.addEventListener('DOMContentLoaded', function() {
    createSquares();

    let guessedWords = [[]]
    let availableSpace = 1

    let word = 'HELLO'

    const keys = document.querySelectorAll('.keyboard-row')


    function getCurrentWordArray() {
        const numberOfGuessedWords = guessedWords.length;
        return guessedWords[numberOfGuessedWords - 1];
      }



    function updateGuessedWord(letter) {
        const currentWordArray = getCurrentWordArray()

        if (currentWordArray && currentWordArray.length < 5) {
            currentWordArray.push(letter)

            let availableSpaceElement = document.getElementById(availableSpace)

            availableSpace = availableSpace + 1
            availableSpaceElement.textContent = letter
        }
    }



    function handleSubmitWord() {
        const currentWordArray = getCurrentWordArray()
        if (currentWordArray.length !==5) {
            alert ('Must be 5 letters')
            return
        }

        const currentWord = currentWordArray.join('')

        if (currentWord === word) {
            alert ('You Win!')
        }


        if (guessedWords.length === 6) {
            alert (`No more guesses! The word is ${word}. Refresh page to play again`)
        }

        guessedWords.push([])
    }



    function createSquares() {
        const gridBoard = document.getElementById('grid');

        for (let index = 0; index < 30; index++) {
            let squares = document.createElement('div');
            squares.classList.add('squares');
            squares.setAttribute('id', index + 1);
            gridBoard.appendChild(squares);
        }
    }



    function handleClick(event) {
        const target = event.target;
        const letter = target.getAttribute('data-key');
      // console.log(letter);

        if (letter === 'enter') {
            handleSubmitWord()
            return
        }

        updateGuessedWord(letter);
      }
      for (let i = 0; i < keys.length; i++) {
         keys[i].onclick = handleClick;
      }



}); 
