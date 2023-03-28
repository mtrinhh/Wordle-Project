document.addEventListener('DOMContentLoaded', function() {
    createSquares();

    let guessedWords = [[]]
    let availableSpace = 1

    const keys = document.querySelectorAll('.keyboard-row')

    function handleClick(event) {
      const target = event.target;
      const letter = target.getAttribute('data-key');
    // console.log(letter);
      updateGuessedWord(letter);
    }
    for (let i = 0; i < keys.length; i++) {
       keys[i].onclick = handleClick;
    }


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


    function createSquares() {
        const gridBoard = document.getElementById('grid');

        for (let index = 0; index < 30; index++) {
            let squares = document.createElement('div');
            squares.classList.add('squares');
            squares.setAttribute('id', index + 1);
            gridBoard.appendChild(squares);
        }
    }



}); 
