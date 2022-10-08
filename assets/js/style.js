/*--------Resize Header on Scroll--------*/
//*--------On Scroll--------
let header = document.querySelector('.header');

window.onscroll = () =>{
    if (this.scrollY > 20){
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}
//*--------On Scroll Nav-bar--------


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
    imgSrc = items[itemIndex].querySelector('.img').getAttribute('src');
    discBoxImg.src = imgSrc;
    discBoxCaption.innerHTML = items[itemIndex].querySelector('.box .text').innerHTML;
    discBoxText.innerHTML = items[itemIndex].querySelector('p').innerHTML;
}

