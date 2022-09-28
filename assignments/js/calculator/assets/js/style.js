const toggleBtn = document.querySelector(".toggle-btn");
const ul = document.querySelector("nav .link");
const main = document.querySelector(".main");

toggleBtn.addEventListener('click', function () {
    toggleBtn.classList.toggle('active');
    ul.classList.toggle('active');
    main.classList.toggle('skew');
});