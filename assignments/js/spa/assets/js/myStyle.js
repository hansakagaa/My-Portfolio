/*---=== Dashboard Scroll Menu ===---*/
// const menuBtn = document.querySelector('#scroll-menu-btn');
// const main = document.querySelector('.main');
// menuBtn.addEventListener('click', function () {
//     main.classList.toggle('active');
// });

/*---=== Login Page Open ===---*/

const slider = $('#slider');
const loginPage = $('#login'),
    loginBtn1 = $('#login-btn'),
    welcomePage = $('#welcome-page'),
    loginParent = $('#login-btn-parent'),
    login = $('#login-page'),
    exit = $('#login-dashboard'),
    closeLogin = $('#exit-login');

loginBtn1.on('click', function () {
    loginPage.addClass('login');
    loginParent.addClass('d-none');
    login.removeClass('d-none');
    welcomePage.addClass('justify-content-center align-items-center w-50');
});

closeLogin.on('click', function () {
    loginPage.removeClass('login');
    loginParent.removeClass('d-none');
    login.addClass('d-none');
    welcomePage.removeClass('justify-content-center align-items-center w-50');
});

/*---=== Dashboard Page Open ===---*/

exit.on('click', function () {
    loginPage.addClass('d-none');
    slider.addClass('d-none');
});