const CUE = jQuery.noConflict();

// set que -------
var cueData={
    persons:[
        {name:'Sadun', color:'#FF0000'},
        {name:'Ashen', color:'#FFA500'},
        {name:'Kavindu', color:'#FFFF00'},
        {name:'Hansaka', color:'#FF00BB'},
        {name:'Nimesh', color:'#00FFFF'},
        {name:'Ayesh', color:'#00FF4B'}
    ],
    nextPerson:function (){
        var lastPerson= this.persons.pop();
        this.persons.unshift(lastPerson);
    }
}

renderQue();
function renderQue(){
    CUE("#container").empty();
    for (let i = 0; i < cueData.persons.length; i++) {
        if(i===0 || i===1){
            CUE("#container").append(`<div  class="person" style="background-color: white"></div>`);
        }else {
            CUE("#container").append(`<div  class="person" style="background-color: ${cueData.persons[i].color}">${cueData.persons[i].name}</div>`);
        }
    }
    cueData.nextPerson();

    const  last = CUE('#lastPerson');
    last.empty();
    last.append(`<div  class="person" style="background-color: ${cueData.persons[1].color}">${cueData.persons[1].name}</div>`);
    const  first = CUE('#firstPerson');
    first.empty();
    first.append(`<div  class="person" style="background-color: ${cueData.persons[2].color}">${cueData.persons[2].name}</div>`);
}

setInterval(renderQue,900);