/*--------Resize Header on Scroll--------*/
//*--------On Scroll--------
const header = document.querySelector('.header'),
    menuBtn = header.querySelector('.menu-btn'),
    menuBar = header.querySelector('.menu-bar'),
    menuName = header.querySelectorAll('.menu-name'),
    menu = header.querySelector('.menu'),
    menuLink = header.querySelectorAll('.menu-link');
const main = document.querySelector('.main');
window.onscroll = () =>{
    if (this.scrollY > 20){
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}
//*--------Menu btn click action--------
menuBtn.addEventListener('click', function () {
    menuBar.classList.toggle('active');
    menu.classList.toggle('active');
    main.classList.toggle('active');
    for (let i=0; i<menuLink.length; i++){
        menuName[i].classList.toggle('active');
        menuLink[i].classList.toggle('act');
    }
});
//*--------Menu btn click action--------
const section = document.querySelectorAll('.main>section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;
    for(let current of section){
       const  sectionHeight = current.offsetHeight
       const  sectionTop = current.offsetTop - 50;
       let sectionId = current.getAttribute('id');
       if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
           // document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active');
       }else{
           // document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active');
       }
    }
}
window.addEventListener('scroll', scrollActive);
/*--------Project Section--------*/
//*--------Open description box--------
const items = document.querySelectorAll('.project .item');
let itemsCount = items.length;
const discBox = document.querySelector('.discBox'),
    discBoxImg = discBox.querySelector('.discBox-img .img'),
    disBoxClose = discBox.querySelector('.discBox-close'),
    discBoxCaption = discBox.querySelector('.discBox-caption'),
    discBoxText = discBox.querySelector('.discBox-text'),
    prevItem = discBox.querySelector('.prev-item'),
    nextItem = discBox.querySelector('.next-item');
let itemIndex = 0;
for (let i=0; i<itemsCount; i++){
    items[i].addEventListener('click', function (){
        itemIndex = i;
        changeItem();
        toggleDiscBox();
    });
}
nextItem.addEventListener('click', function () {
    if (itemIndex === itemsCount-1){
        itemIndex = 0;
    }else {
        itemIndex++;
    }
    changeItem();
});
prevItem.addEventListener('click', function () {
    if (itemIndex === 0){
        itemIndex = itemsCount-1;
    }else {
        itemIndex--;
    }
    changeItem();
});
discBox.addEventListener('click', function (e) {
    if (e.target === disBoxClose || e.target === discBox){
        toggleDiscBox()
    }
});
function toggleDiscBox() {
    discBox.classList.toggle('open');
}
function changeItem() {
    discBoxImg.src = items[itemIndex].querySelector('.img').getAttribute('src');
    discBoxCaption.innerHTML = items[itemIndex].querySelector('.box .text').innerHTML;
    discBoxText.innerHTML = items[itemIndex].querySelector('p').innerHTML;
}
/*--------Skin color handler--------*/
//*--------Toggle switcher--------
const styleSwitchToggle = document.querySelector('.style-switcher-toggle');
styleSwitchToggle.addEventListener('click', function () {
    document.querySelector('.style-switcher').classList.toggle('open');
});
//*--------Scroll on switcher hide--------
window.addEventListener('scroll',function () {
    if (document.querySelector('.style-switcher').classList.toggle('open')){
        document.querySelector('.style-switcher').classList.remove('open');
    }
});
//*--------Theme color--------
const alternateStyle = document.querySelectorAll('.alternate-style');
function setActionStyle(color) {
    for(let style of alternateStyle){
        if (color === style.getAttribute('title')){
            style.removeAttribute('disabled');
        }else {
            style.setAttribute('disabled','true');
        }
    }
}
//*--------Theme color--------
const dayNight= document.querySelector('.day-night');
dayNight.addEventListener('click', function () {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
});
window.addEventListener('load', function () {
    if (document.body.classList.contains('dark')){
        dayNight.querySelector('i').classList.add('fa-sun');
    }else {
        dayNight.querySelector('i').classList.add('fa-moon');
    }
});
/*--------Assignment Section--------*/
const cards = document.querySelectorAll('.assignment .assignment-content .card');
let cardLength = cards.length;
const mainCard = document.querySelector('.assignment-content .main-card'),
    mainImg = mainCard.querySelector('.card-img'),
    mainName = mainCard.querySelector('.name'),
    mainDescription = mainCard.querySelector('.description'),
    mainButton = mainCard.querySelector('.button');
const cardMoveBtn = document.querySelector('.assignment-content .card-controls'),
    prevBtn = cardMoveBtn.querySelector('.prev-item'),
    nextBtn = cardMoveBtn.querySelector('.next-item');

const slidCard = document.querySelector('.assignment-content .card-wrapper'),
    firstImg = slidCard.querySelector('.card01 .card-img'),
    firstName = slidCard.querySelector('.card01 .name'),
    firstDescription = slidCard.querySelector('.card01 .description'),
    firstButton = slidCard.querySelector('.card01 .button'),
    secondImg = slidCard.querySelector('.card03 .card-img'),
    secondName = slidCard.querySelector('.card03 .name'),
    secondDescription = slidCard.querySelector('.card03 .description'),
    secondButton = slidCard.querySelector('.card03 .button');
let cardIndex = 1;
let firstIndex = 0;
let secondIndex = 2;
nextBtn.addEventListener('click', function () {
    if (cardIndex === cardLength-1){
        cardIndex = 1;
        firstIndex = 0;
        secondIndex = 2;
    }else {
        cardIndex++;
        firstIndex++;
        secondIndex++;
    }
    moveCard();
});
prevBtn.addEventListener('click', function () {
    if (cardIndex === 0){
        cardIndex = 0;
        firstIndex = cardLength-2;
        secondIndex = 1;
    }else {
        cardIndex--;
        firstIndex--;
        secondIndex--;
    }
    moveCard();
});
function moveCard() {
    mainImg.src = cards[cardIndex].querySelector('.card-img').getAttribute('src');
    mainName.innerHTML = cards[cardIndex].querySelector('h2').innerHTML;
    mainDescription.innerHTML = cards[cardIndex].querySelector('p').innerHTML;
    mainButton.href = cards[cardIndex].querySelector('.button').getAttribute('href');
    firstImg.src = cards[firstIndex].querySelector('.card-img').getAttribute('src');
    firstName.innerHTML = cards[firstIndex].querySelector('h2').innerHTML;
    firstDescription.innerHTML = cards[firstIndex].querySelector('p').innerHTML;
    firstButton.href = cards[firstIndex].querySelector('.button').getAttribute('href');
    secondImg.src = cards[cardIndex+1].querySelector('.card-img').getAttribute('src');
    secondName.innerHTML = cards[cardIndex+1].querySelector('h2').innerHTML;
    secondDescription.innerHTML = cards[cardIndex+1].querySelector('p').innerHTML;
    secondButton.href = cards[cardIndex+1].querySelector('.button').getAttribute('href');
}
/*--------Contact Section--------*/
//*--------Open map box--------
const mapBox = document.querySelector('.map-container');
const mapBtn = document.querySelector('.map-open');

mapBtn.addEventListener('click', function () {
    toggleMap();
});

mapBox.addEventListener('click', function (e) {
    if (e.target === mapBox){
        toggleMap();
    }
});
function toggleMap() {
    mapBox.classList.toggle('open');
}
window.addEventListener('scroll',function () {
    if (mapBox.classList.toggle('open')){
        mapBox.classList.remove('open');
    }
});