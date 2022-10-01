const d_1 = document.querySelector(".d-1");
const d_2 = document.querySelector(".d-2");
const num = document.querySelectorAll(".num");
const opr = document.querySelectorAll(".opr");
const pow = document.querySelector(".pow");
const pi = document.querySelector(".pi");
const e = document.querySelector(".e");
const equal = document.querySelector(".equal");
const all_clear = document.querySelector(".all-clear");
const last_clear = document.querySelector(".last-entry-clear");

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOpr = '';

num.forEach((number, index) => {
    number.addEventListener('click', function (e) {
        if(e.target.innerText === '.'){
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
        let oprName = e.target.innerText;
        if (oprName === '+'){
            oprName = '+';
        } else if (oprName === '−'){
            oprName = '-';
        } else if (oprName === 'x'){
            oprName = '*';
        } else if (oprName === '÷'){
            oprName = '/';
        }
        if (d_2.innerText !== '0'){
            clearD_2(oprName);
            lastOpr = oprName;
        }
    });
});

function clearD_2(name = '') {
    dis1Num += dis2Num + '' + name + '';
    d_1.innerText = dis1Num;
    d_2.innerText = '';
    dis2Num = '';
}

equal.addEventListener('click', function () {
    if (!dis2Num || ! dis1Num){
        return;
    }
    clearD_2();
    result = eval(d_1.innerText);
    d_2.innerText = result;
    dis2Num = result;
    dis1Num = '';
});

e.addEventListener('click', function (e) {
    if (d_2.innerText === '0'){
        d_1.innerText = e.target.innerText;
        dis2Num = 2.71828;
        d_2.innerText = dis2Num;
    }
});


pi.addEventListener('click', function (e) {
    if (d_2.innerText === '0'){
        d_1.innerText = e.target.innerText;
        dis2Num = 3.14159;
        d_2.innerText = dis2Num;
    } else if (dis2Num){
        dis1Num += dis2Num + '*' + 3.14159 + '';
        d_2.innerText = dis1Num;
    }else {
        dis2Num = 3.14159;
        d_2.innerText = dis2Num;
    }
});

pow.addEventListener('click', function () {
    if (!dis2Num){
        return;
    }
    dis1Num = dis2Num;
    dis2Num = parseFloat(dis1Num) * parseFloat(dis2Num);
    d_1.innerText = dis1Num;
    d_2.innerText = dis2Num;
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