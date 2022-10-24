const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0 
//html dosyasında hardcoded yapmış olmamıza rağmen
//javascript dosyasına da söylememiz lazım result'ın
//0 olduğunu
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {

    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    // 9 dahil deil
    //console.log(randomSquare)
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition) {
            result++
            console.log(result)
            score.textContent = result
            hitPosition = null
        }
    })
})


function moveMole() {
    timerId = setInterval(randomSquare,1000)
    //every 500 miliseconds randomSquare
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }

}

let countDownTimerId = setInterval(countDown, 1000)