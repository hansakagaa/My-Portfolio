/*---=== Dashboard Scroll Menu ===---*/
const menuBtn = document.querySelector('#scroll-menu-btn');
const main = document.querySelector('.main');
menuBtn.addEventListener('click', function () {
    main.classList.toggle('active');
});

let POS =jQuery.noConflict();
/*---=== Login Page Open ===---*/

const slider = POS('#slider'),
    loginPage = POS('#login'),
    loginBtn1 = POS('#login-btn'),
    welcomePage = POS('#welcome-page'),
    loginParent = POS('#login-btn-parent'),
    login = POS('#login-page'),
    exit = POS('#login-dashboard'),
    closeLogin = POS('#exit-login');

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
/*--- All Section ---*/
const dashboard = POS('#dashboard'),
    placeOrder = POS('#place-order'),
    customer = POS('#customer'),
    customers = POS('#customers'),
    item = POS('#item'),
    items = POS('#items'),
    navBar = POS('#nav-bar');
    /*--------*/
    offCanvas = POS('.offcanvas');

exit.on('click', function () {
    loginPage.addClass('d-none');
    slider.addClass('d-none');
    offCanvas.removeClass('d-none');
    dashboard.removeClass('d-none');
});

/*---=== Dashboard Page Menu Btn ===---*/
/*--- All Menu Btn ---*/
const btnPlaceOrder = POS('#btn-place-order'),
    btnCustomer = POS('#btn-customer'),
    btnItems = POS('#btn-items'),
    btnOrderDetails = POS('#btn-order-details'),
    btnSupplier = POS('#btn-supplier'),
    btnReport = POS('#btn-report'),
    btnSetting = POS('#btn-setting');

/*--- Menu Btn Function ---*/
btnPlaceOrder.on('click', function () {
    placeOrder.removeClass('d-none');
    navOrder.addClass('active');
    navDashboard.removeClass('active');
    navCustomer.removeClass('active');
    navItems.removeClass('active');
    menuBtnAlvRemoveNav();
});

btnCustomer.on('click', function () {
    customer.removeClass('d-none');
    navCustomer.addClass('active');
    navDashboard.removeClass('active');
    navOrder.removeClass('active');
    navItems.removeClass('active');
    menuBtnAlvRemoveNav();
});

btnItems.on('click', function () {
    item.removeClass('d-none');
    navItems.addClass('active');
    navDashboard.removeClass('active');
    navOrder.removeClass('active');
    navCustomer.removeClass('active');
    menuBtnAlvRemoveNav();
});

function menuBtnAlvRemoveNav(){
    dashboard.addClass('d-none');
    offCanvas.addClass('d-none');
    navBar.removeClass('d-none');
    navOrderDetails.removeClass('active');
    navSupplier.removeClass('active');
    navReport.removeClass('active');
    navSetting.removeClass('active');
}

btnOrderDetails.on('click', function () {
    /*----------------*/
});

btnSupplier.on('click', function () {
    /*----------------*/
});

btnReport.on('click', function () {
    /*----------------*/
});

btnSetting.on('click', function () {
    /*----------------*/
});

/*---=== Nav Bar Section ===---*/
/*--- All Nav Btn ---*/
const navDashboard = POS('#nav-dashboard'),
    navOrder = POS('#nav-order'),
    navCustomer = POS('#nav-customer'),
    navItems = POS('#nav-items'),
    navOrderDetails = POS('#nav-order-details'),
    navSupplier = POS('#nav-supplier'),
    navReport = POS('#nav-report'),
    navSetting = POS('#nav-setting');

navDashboard.on('click', function () {
    placeOrder.addClass('d-none');
    customer.addClass('d-none');
    customers.addClass('d-none');
    item.addClass('d-none');
    items.addClass('d-none');
    // orderDetails.addClass('d-none');
    // supplier.addClass('d-none');
    // report.addClass('d-none');
    // setting.addClass('d-none');
    navBar.addClass('d-none');
    offCanvas.removeClass('d-none');
    dashboard.removeClass('d-none');
});

navOrder.on('click', function () {
    placeOrder.removeClass('d-none');
    customer.addClass('d-none');
    customers.addClass('d-none');
    item.addClass('d-none');
    items.addClass('d-none');
    // orderDetails.addClass('d-none');
    // supplier.addClass('d-none');
    // report.addClass('d-none');
    // setting.addClass('d-none');
    navDashboard.removeClass('active');
    navOrder.addClass('active');
    navCustomer.removeClass('active');
    navItems.removeClass('active');
    menuBtnAlvRemoveNav();
});

navCustomer.on('click', function () {
    placeOrder.addClass('d-none');
    customer.removeClass('d-none');
    customers.addClass('d-none');
    item.addClass('d-none');
    items.addClass('d-none');
    // orderDetails.addClass('d-none');
    // supplier.addClass('d-none');
    // report.addClass('d-none');
    // setting.addClass('d-none');
    navDashboard.removeClass('active');
    navOrder.removeClass('active');
    navCustomer.addClass('active');
    navItems.removeClass('active');
    menuBtnAlvRemoveNav();
});

navItems.on('click', function () {
    placeOrder.addClass('d-none');
    customer.addClass('d-none');
    customers.addClass('d-none');
    item.removeClass('d-none');
    items.addClass('d-none');
    // orderDetails.addClass('d-none');
    // supplier.addClass('d-none');
    // report.addClass('d-none');
    // setting.addClass('d-none');
    navDashboard.removeClass('active');
    navOrder.removeClass('active');
    navCustomer.removeClass('active');
    navItems.addClass('active');
    menuBtnAlvRemoveNav();
});


/*---=== Customer Page Btn ===---*/
const allCustomer = POS('#all-customer');

allCustomer.on('click', function () {
    customer.addClass('d-none');
    customers.removeClass('d-none');
});

/*---=== Item Page Btn ===---*/
const allItem = POS('#all-item');

allItem.on('click', function () {
    item.addClass('d-none');
    items.removeClass('d-none');
});
