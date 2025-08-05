let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showMainSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showMainSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showMainSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}
function setPositionThumbnail () {
    let thumbnailActive = document.querySelector('.thumbnail .item.active');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showMainSlider();
    })
})

// models

let next1Button = document.getElementById('next1');
let prev1Button = document.getElementById('prev1');
let models = document.querySelector('.models');
let listHTML = document.querySelector('.models .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

next1Button.onclick = function(){
    showModelsSlider('next1');
}
prev1Button.onclick = function(){
    showModelsSlider('prev1');
}
let unAcceppClick;
const showModelsSlider = (type) => {
    next1Button.style.pointerEvents = 'none';
    prev1Button.style.pointerEvents = 'none';

    models.classList.remove('next1', 'prev1');
    let items = document.querySelectorAll('.models .list .item');
    if(type === 'next1'){
        listHTML.appendChild(items[0]);
        models.classList.add('next1');
    }else{
        listHTML.prepend(items[items.length - 1]);
        models.classList.add('prev1');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        next1Button.style.pointerEvents = 'auto';
        prev1Button.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        models.classList.remove('next1', 'prev1');
        models.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    models.classList.remove('showDetail');
}

// navbar
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});
