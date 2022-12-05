const tank = $('.tank-content');
let x=0;
let y=0;
window.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D'){
        if (x<470){
            x+=10;
        }
    }else
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A'){
        if (x>-470){
            x-=10;
        }
    }else
    if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W'){
        if (y>-200){
            y-=10;
        }
    }else
    if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S'){
        if (y<0){
            y+=10;
        }
    }
    tank.css('transform', 'translateX('+x+'px) translateY('+y+'px)');
})
/*/-------------/*/
