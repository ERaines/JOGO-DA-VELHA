let squares = document.querySelectorAll(".square");

let score = document.querySelectorAll(".score")
let scoreO = 0
let scoreX = 0
let scoreOX = 0

document.addEventListener('DOMContentLoaded',()=>{

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event){

    let square = event.target;
    let position = square.id;

    if (handleMove(position)){

        setTimeout(resetGame,1000)
        updateResult(playerTime)

    }else if ((countTurn0 >= 5 || countTurn1 >= 5) && !gameOver) {
        scoreOX++
        score[2].innerHTML = + scoreOX
        setTimeout(resetGame,1000)
    }

    updateSquares()
    
}

function updateResult(playerTime){

    playerTime ==0? scoreO++: scoreX ++;
    score[0].innerHTML = + scoreO
    score[1].innerHTML = + scoreX
}

function resetGame() {

    reset()
    squares.forEach((square)=>{
        square.innerHTML = ''

    })
    updateSquares()
}


function updateSquares(){

    squares.forEach((square)=>{

        let position = square.id
        let symbol = board[position]

        if(symbol != ''){
            square.innerHTML = `<div class ='${symbol}''></div>`
        }
    })

}

/* function updateSquares(position){

    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div`
    
} */





/* function updateSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        let position = square.id;
        let symbol = board[position];

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div`
        }
    })

} */

