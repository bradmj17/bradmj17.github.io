const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const bestscore = document.querySelector('#bestscore')
const btn = document.querySelector('#rules')

let result = 0;
let record = 0;
let hitPosition = 0;
let currentTime = 30;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('click', () => {
        if(square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval (randomSquare,500)
}


moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent= currentTime;

    if (currentTime == 0){
        if(result > record){
            record = result;
            bestscore.textContent = record;
        }
        clearInterval(currentTime)
        
        alert('Game over! Your final score is ' + result)
        result = 0;
        score.textContent = 0;
        currentTime = 30;
        timeLeft.textContent= 30;
        start(countDownTimerId)
    }
}

btn.addEventListener('click', () => {
    alert('Click on the mole to earn score before the timer runs out! Try to get a high score.')
})


let countDownTimerId = setInterval(countDown, 1000)