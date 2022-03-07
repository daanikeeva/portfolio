
let url = 'https://api.unsplash.com/search/photos?query=code&per_page=30&client_id=knaBQnnE0zjn_xVQxuaYOf4bQuRZ8ySQDJQBTQJdsuo';
let search = document.querySelector('.header__search');
const galleryContainer = document.querySelector('.gallery');
search.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    console.log('Enter...');
    url = `https://api.unsplash.com/search/photos?query=${search.value}&per_page=30&client_id=knaBQnnE0zjn_xVQxuaYOf4bQuRZ8ySQDJQBTQJdsuo`;
    console.log(url);
    console.log(search.value);
    galleryContainer.innerHTML = "";
    getData();
  }
})
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  showData(data);
}
getData();
function showData(data) {
    data.results.map((el) => {
        const img = document.createElement('img');
        img.classList.add('gallery__img');
        img.src = `${el.urls.regular}`;
        img.alt = `image`;
        galleryContainer.append(img);    
    })
}
