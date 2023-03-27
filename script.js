document.addEventListener('DOMContentLoaded', function() {
    createSquares();

    const keys = document.querySelectorAll('.keyboard-row button')

    function handleClick(event) {
      const target = event.target;
      const key = target.getAttribute('data-key');
      console.log(key);
    }
    for (let i = 0; i < keys.length; i++) {
       keys[i].onclick = handleClick;
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
