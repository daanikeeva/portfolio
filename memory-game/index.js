const cards = document.querySelectorAll('.memo__card');
const win = document.querySelector('.win-game');
const restart = document.querySelector('.restart')
const move = document.querySelector('.moves-counter');
const result = document.querySelector('.result');
const ratingTable = document.querySelector('.rating__table')
const ratingPositions = document.querySelectorAll('.rating__pos');
const lastGamesList = document.querySelector('.last-games__list');
const lastGamesElem = document.querySelectorAll('.last-games__pos');
const ratingBtn = document.querySelector('.rating h2');
const lastGamesBtn = document.querySelector('.last-games h2');
console.log(lastGamesBtn)
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let moveCounter = 0;
let openCard = 0;
// ------------------- перемешиваем карты 
setTimeout(shufflCard())
function shufflCard() {
    cards.forEach(card => {
        let random = Math.floor(Math.random() * cards.length);
        card.style.order = random;
    })
}
// --------------------- переворот карточек
cards.forEach(card => card.addEventListener('click', flipCard));
function flipCard() {
    if (lockBoard) return;
    this.classList.add('flip');
    if (!hasFlippedCard) {
     hasFlippedCard = true;
     firstCard = this;
   }
   else{
       secondCard = this;
       hasFlippedCard = false;
       checkForMatch()
   }
}
// ------------------ сравниваем карточки, и скрываем или оставляем открытыми
function checkForMatch() {
    moveCounter++
    let isMatch = firstCard.dataset.princess === secondCard.dataset.princess;
    isMatch ? disableCards() : unflipCards();
    move.innerText = `${moveCounter}`;
}
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    openCard += 2;
    setTimeout(() => {
        firstCard.classList.add('open')
        secondCard.classList.add('open')
    }, 1200)
    setTimeout(winGame(), 2000);
}
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        firstCard.classList.remove('open');
        lockBoard = false;
    }, 1500)
}
// --------------- окончание игры 
function winGame() {
    if (openCard === cards.length) {
        setTimeout(() => {
            win.style.transform = 'scale(1)';
            result.innerText = `You won with ${moveCounter} moves`;
        }, 1500);
        setLocalStorage()
        addResultInRating();
        addResultInLastGames();
    }
}
restart.addEventListener('click', newGame)

// ------------ добавляем последние 10 игр в localStorage
let lastGamesArr = [];
JSON.parse(localStorage.getItem('lastGames')) == null ? lastGamesArr = [] : lastGamesArr = JSON.parse(localStorage.getItem('lastGames'));
function setLocalStorage() {
    let Data = new Date() 
    while (lastGamesArr.length >= 10) {
        lastGamesArr.shift();
    }
    lastGamesArr.push([`${moveCounter}`, `${Data.toLocaleString()}`]);
    localStorage.setItem('lastGames', JSON.stringify(lastGamesArr));
    rating.push([`${moveCounter}`, `${Data.toLocaleString()}`]);
    ratingSort = rating.sort((a,b) => a[0] - b[0]).slice(0,10);
    localStorage.setItem('bestGames', JSON.stringify(ratingSort));
}
function addResultInLastGames() {
    lastGamesList.innerHTML='';
    lastGamesArr.forEach(function(elem) {
        let lastGame = document.createElement('li');
        lastGame.textContent = `${elem[0]} moves ${elem[1]}`;
        lastGamesList.appendChild(lastGame);
    })
}
// ------------лучшие 10 результатов
let rating = [];
JSON.parse(localStorage.getItem('bestGames')) == null ? rating = [] : rating = JSON.parse(localStorage.getItem('bestGames'));
function addResultInRating() {
    ratingTable.innerHTML='';
    rating.forEach(elem => {
        let bestGame = document.createElement('li');
        bestGame.textContent = `${elem[0]} moves ${elem[1]}`;
        ratingTable.appendChild(bestGame);
    })
}

window.addEventListener('load', addResultInLastGames)
  window.addEventListener('load', addResultInRating)
// -------------- новая игра
function newGame() {
    win.style.transform = 'scale(0)';
    cards.forEach(card => {
        card.classList.remove('flip');
        card.classList.remove('open');
        hasFlippedCard = false;
        lockBoard = false;
        moveCounter = 0;
        openCard = 0;       
        shufflCard();  
        card.addEventListener('click', flipCard);
    })
}


// ----------- таблицы результатов на мобильных
ratingBtn.addEventListener('click', function() {
    ratingTable.classList.toggle('open')
})
lastGamesBtn.addEventListener('click', function() {
    lastGamesList.classList.toggle('open')
})