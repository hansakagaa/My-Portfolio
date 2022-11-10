const KR = jQuery.noConflict();

let timer;

KR('.start').click(function () {
    clearInterval(timer)
    timer = setInterval(renderColor,100)
})

var cueData={
    tempColor : [],
    leftColors : ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#f5e5e5', '#ffb2b2', '#ff7a7a', '#ff5a5a', '#ff2525', '#cb0000'],
    rightColors : ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#044ebd', '#005be3', '#3773fb', '#6389df', '#6fa9ff', '#a7c6ff'],
    leftColor:function (){
        var lastColor= this.leftColors.pop();
        this.leftColors.unshift(lastColor);
    },
    rightColor:function (){
        var fistColor= this.rightColors.shift();
        this.rightColors.push(fistColor);
    }
}

let count = 0;
function setColor(){
    count++;
    if (count<=cueData.leftColors.length){
        cueData.tempColor=cueData.leftColors;
        cueData.leftColor()
    }else{
        if (count>=(cueData.leftColors.length*2)){
            count=0;
        }
        cueData.tempColor=cueData.rightColors;
        cueData.rightColor()
    }
}

function renderColor(){
    KR(".content").empty();
    for (let i = 0; i < cueData.tempColor.length/2; i++) {
        KR('.content').append(`<div class="col-2" style="background-color: ${cueData.tempColor[i]}"></div>`);
    }
    setColor();
}

KR('.stop').click(function () {
    clearInterval(timer)
})