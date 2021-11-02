const x_class = "x";
const o_class = "o";

let cells = document.querySelectorAll('.cells');
let board = document.querySelector('.box');
let circleTurn;

let winning_board = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let end = document.querySelector('.resultBoard');
let msg = document.querySelector('.win-msg');
let btn = document.querySelector('.btn');
// ----------------------------------------------------
let checkwin = (currentCell) => {

    return winning_board.some(combinations => {
        return combinations.every(ell => {
            return cells[ell].classList.contains(currentCell);
        })
    })
}

btn.addEventListener("click", () => { start() });
// -----------------------------------------------
let endGame = (para) => {
    end.style.display = "block";

    if (para) {
        msg.innerHTML = "it's draw";

    } else {

        msg.innerHTML = `${circleTurn?'o':'x'} wins`;
    }
}



// ---------------------------------------------------   
function isDraw() {
    return [...cells].every(ell => {
        return ell.classList.contains(x_class) || ell.classList.contains(o_class);
    })
}
// ----------------------------------------------------
let fun = (e) => {

    let cell = e.target;
    let currentCell = circleTurn ? o_class : x_class;

    setMark(cell, currentCell);

    if (checkwin(currentCell)) {
        endGame(false);
    } else if (isDraw(currentCell)) {
        endGame(true);
    } else {
        swapTurns();
        showHower();

    }



}



// -----------------------------------------------
let setMark = (para1, para2) => {

        para1.classList.add(para2);

    }
    // ---------------------------------------------

let swapTurns = () => circleTurn = !circleTurn;

// ------------------------------------------------
let showHower = () => {


    board.classList.remove('xx');
    board.classList.remove('oo');

    if (circleTurn) {
        board.classList.add('oo');

    } else {
        board.classList.add('xx');

    }
}

// =========================== final execution of the function ==============

start();

function start() {
    circleTurn = false;

    cells.forEach(elements => {

            elements.classList.remove(x_class);
            elements.classList.remove(o_class);
            elements.removeEventListener("click", fun);
            elements.addEventListener("click", fun, { once: true });
        }



    )
    end.style.display = "none";
    showHower();


}
