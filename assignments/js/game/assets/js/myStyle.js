const tank = $('#tank');
let left=630;
let bottom=0;
tank.css('left', left+'px');
window.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight'){
        if (left===1100){return}
        left+=10;
    }else
    if (e.key === 'ArrowLeft'){
        if (left===200){return}
        left-=10;
    }else
    if (e.key === 'ArrowUp'){
        if (bottom===400){return}
        bottom+=10;
    }else
    if (e.key === 'ArrowDown'){
        if (bottom===0){return}
        bottom-=10;
    }
    tank.css('left', left+'px');
    tank.css('bottom', bottom+'px');
})