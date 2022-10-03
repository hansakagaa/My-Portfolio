/*--------Resize Header on Scroll--------*/
//*--------On Scroll--------
var header = document.querySelector('.header');

window.onscroll = () =>{
    console.log(this.scrollY);
    if (this.scrollY > 20){
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}
//*--------On Scroll Nav-bar--------
