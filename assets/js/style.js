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
    section.forEach(current => {
       const  sectionHeight = current.offsetHeight
       const  sectionTop = current.offsetTop - 50;
       sectionId = current.getAttribute('id');
       if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
           // const parent = document.querySelector('.menu a[href*=' + sectionId + ']').parentNode;
           // parent.classList.add('active');
       }else{
           // const parent = document.querySelector('.menu a[href*=' + sectionId + ']').parentNode;
           // parent.classList.remove('active');
       }
    });
}

window.addEventListener('scroll', scrollActive);

/*--------Project Section--------*/
//*--------Open description box--------

const items = document.querySelectorAll('.project .item'),
    itemsCount = items.length;
const discBox = document.querySelector('.discBox'),
    discBoxImg = discBox.querySelector('.discBox-img .img'),
    close = discBox.querySelector('.discBox-close'),
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
    if (e.target === close || e.target === discBox){
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

