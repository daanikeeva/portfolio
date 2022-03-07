const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'phone': 'Phone',
      'message': 'Message',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'phone': 'Телефон',
      'message': 'Сообщение',
      'send-message': 'Отправить'
    }
  }

//   menu burger ===============
const iconMenu = document.querySelector('.menu__burger');
const menuList = document.querySelector('.menu__list');
iconMenu.addEventListener('click', function(){
    document.body.classList.toggle('lock');
	menuList.classList.toggle('open');
    iconMenu.classList.toggle('open');
})
const nav = document.querySelector('.menu');
nav.addEventListener('click', closeMenu)
function closeMenu() {
    if (iconMenu.classList.contains('open') && menuList.classList.contains('open')) {
        document.body.classList.remove('lock');
        menuList.classList.remove('open');
        iconMenu.classList.remove('open');

    }
}

// ================ PART 3 =================

//change images and buttons ===========
const portfolioBtns = document.querySelectorAll('.portfolio__buttons');
const portfolioBtn = document.querySelectorAll('.portfolio__btn');
const portfolioImages = document.querySelectorAll('.portfolio__img');
portfolioBtns.forEach(element => {
    element.addEventListener('click', changeImage)
});
function changeImage(event) {
    if(event.target.classList.contains('portfolio__btn')) {
        let season = event.target.dataset.season;
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
    };
    portfolioBtn.forEach((elem) => elem.classList.remove("active"));
    event.target.classList.add('active')
}

function preloadImages() {
    const img = new Image();
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
     seasons.forEach((item) => {
       for (let i = 1; i <= 6; i++) {
          img.src = `./assets/img/jpg/${item}/${i}.jpg`;
       }
    })
 }
  preloadImages()
 
// change languages =============

const enLanguage = document.querySelector(".switch-lng__en");
const ruLanguage = document.querySelector(".switch-lng__ru");
const language = document.querySelectorAll('[data-i18]');
function getTranslate(lang) {
    language.forEach((el) => {
        if (el.placeholder) {
            el.textContent = ''
            el.placeholder = (i18Obj[lang])[el.dataset.i18];
        }
        else {el.textContent = (i18Obj[lang])[el.dataset.i18]      }  
    })
    if (lang === "ru") {
        enLanguage.classList.remove('active');
        ruLanguage.classList.add('active')    
    }
    if (lang === "en") {
        ruLanguage.classList.remove('active');
        enLanguage.classList.add('active')
    }
}
enLanguage.addEventListener('click', () => {getTranslate('en')});
ruLanguage.addEventListener('click', () => {getTranslate('ru')})

// change theme =================
const switchTheme = document.querySelector('.switch-theme');
switchTheme.addEventListener('click', function() {
    switchTheme.classList.toggle('light');
    if (switchTheme.classList.contains('light')) {
        document.documentElement.style.setProperty('--bg-color', '#fff');
document.documentElement.style.setProperty('--text-color', '#000');
document.documentElement.style.setProperty('--bg-img', "url('./assets/svg/sun.svg')");
    } 
    else {
        document.documentElement.style.setProperty('--bg-color', '#000');
        document.documentElement.style.setProperty('--text-color', '#fff');
        document.documentElement.style.setProperty('--bg-img', "url('./assets/svg/moon.svg')");
        
    }
})

// localStorage =============
let lang = 'en';
let theme = 'dark';
function setLocalStorage() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
  }
  window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('lang')) {
      const lang = localStorage.getItem('lang');
      getTranslate(lang);
    }
  }
  window.addEventListener('load', getLocalStorage)



  
console.log('Смена изображений в секции portfolio +25 \n'+
'\tпри кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием +20\n'+
'\tкнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными +5\n'+
'Перевод страницы на два языка +25\n'+
'\tпри клике по надписи ru англоязычная страница переводится на русский язык +10\n'+
'\tпри клике по надписи en русскоязычная страница переводится на английский язык +10\n'+
'\tнадписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем +5\n'+
'Переключение светлой и тёмной темы +25\n'+
'\tтёмная тема приложения сменяется светлой +10\n'+
'\tсветлая тема приложения сменяется тёмной +10\n'+
'\tпосле смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) +5\n'+
'Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5\n'+
'Score: 80')

