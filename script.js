document.addEventListener('DOMContentLoaded', function() {
    createSquares();

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
