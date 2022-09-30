const d_1 = document.querySelector(".d-1");
const d_2 = document.querySelector(".d-2");
const num = document.querySelectorAll(".num");
const opr = document.querySelectorAll(".opr");
const equal = document.querySelector(".equal");
const all_clear = document.querySelector(".all-clear");
const last_clear = document.querySelector(".last-entry-clear");

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOpr = '';
let haveDot = false;

num.forEach((number, index) => {
    number.addEventListener('click', function(e) {
        if(e.target.innerText === '.' && !haveDot){
            if(dis2Num === ''){
                dis2Num += 0;
            }
        }
        dis2Num += e.target.innerText;
        d_2.innerText = dis2Num;
    });
});

opr.forEach((operation, index) => {
    operation.addEventListener('click', function(e) {
        if (!dis2Num){
            return;
        }
        haveDot = false;
        const oprName = e.target.innerText;
        if (dis1Num && dis2Num && lastOpr){
            mathsOpr();
        } else {
            result = parseFloat(dis2Num);
        }
        clearVar(oprName);
        lastOpr = oprName;
    });
});

function clearVar(name = '') {
    dis1Num += dis2Num + '' + name + '';
    d_1.innerText = dis1Num;
    d_2.innerText = '';
    dis2Num = '';
}

function mathsOpr() {
    if (lastOpr === 'x'){
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOpr === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOpr === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOpr === '÷') {
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOpr === '%') {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}

equal.addEventListener('click', function () {
    if (!dis2Num || ! dis1Num){
        return;
    }
    haveDot = false;
    mathsOpr();
    clearVar();
    d_2.innerText = result;
    dis2Num = result;
    dis1Num = '';
});

all_clear.addEventListener('click', function () {
    dis1Num = '';
    dis2Num = '';
    d_1.innerText = 0;
    d_2.innerText = 0;
    result = '';
    lastOpr ='';
});

last_clear.addEventListener('click', function () {
    dis2Num = '';
    d_2.innerText = '';
});

// ****************************************

const toggleBtn = document.querySelector(".toggle-btn");
const ul = document.querySelector("nav .link");
const main = document.querySelector(".main");

toggleBtn.addEventListener('click', function () {
    toggleBtn.classList.toggle('active');
    ul.classList.toggle('active');
    main.classList.toggle('skew');
});