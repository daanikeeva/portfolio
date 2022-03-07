const bird = document.querySelectorAll('.nav__item');
const logo = document.querySelector('.header__logo');
const allBirds = document.querySelector('.nav__list');
const main = document.querySelector('.main');
const btn = document.querySelector('button')
const audio = new Audio('./assets/audio/forest.mp3');
let audioSrc = './assets/audio/forest.mp3';
let isPlay = false; 
bird.forEach(el => {
    el.addEventListener('click', changeImg)
})
function changeImg(event) {
    if (event.target.classList.contains('nav__item')) {
        main.classList.add('effect');
        setTimeout(() => main.classList.remove('effect'), 1000);
        setTimeout(() => main.style.backgroundImage = `url('./assets/img/${event.target.dataset.bird}.jpg')`, 500);
        audioSrc = `./assets/audio/${event.target.dataset.bird}.mp3`;
        playAudio();
    }
    bird.forEach((elem) => elem.classList.remove("active"));
    logo.classList.remove("active");
    event.target.classList.add('active')
}
logo.addEventListener('click', goHomepage)
function goHomepage(event) {
    main.style.backgroundImage = `url('./assets/img/forest.jpg')`;
    audioSrc = `./assets/audio/forest.mp3`;
    bird.forEach((elem) => elem.classList.remove("active"));
    event.target.classList.toggle('active')
}

btn.addEventListener('click', () => {
    isPlay ? pauseAudio() : playAudio()
})
function playAudio() {
        isPlay = true;
        btn.classList.remove('play');
        btn.classList.add('pause');
        audio.src = audioSrc;
        audio.currentTime = 0;
        audio.play();
}
function pauseAudio() {
    btn.classList.remove('pause');
    btn.classList.add('play');
    isPlay = false;
    audio.pause();
}
