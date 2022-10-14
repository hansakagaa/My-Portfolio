const CUS =jQuery.noConflict();

CUS('#save-new-customer').click(function () {
    let customerID = CUS("#new-customer-id").val();
    let customerName = CUS("#new-customer-name").val();
    let customerNIC = CUS("#new-customer-nic").val();
    let customerAddress = CUS("#new-customer-address").val();

    const customerOb = {
        id : customerID,
        name : customerName,
        nic : customerNIC,
        address : customerAddress
    }
    Customers.push(customerOb);
    loadAllCustomers();
});

CUS('.search-customer').click(function () {
    let val = CUS('.customer-search-bar').val();
    const values = searchCustomer(val);
    setTableRow(values);
    bindRowClickEvents();
});

CUS('#save-update-customer').click(function () {
    let id = CUS('#update-customer-id').val();
    let response = updateCustomerValue(id);
    if (response) {
        setValueUpdateModal("", "", "", "");
    } else {
        alert('Update Failed..!');
    }
});

CUS('#delete-customer').click(function () {
    let id = CUS('#details-customer-id').text();
    let option = confirm('Do you really want to delete customer id :' + id);
    if (option){
        if (deleteCustomerValue(id)) {
            alert("Customer Successfully Deleted..");
            setValueUpdateModal("", "", "", "");
        } else {
            alert("No such customer to delete. please check the id");
        }
    }
});


CUS('#all-customer').click(function () {
    loadAllCustomers();
});

function deleteCustomerValue(id) {
    const customer = searchCustomerId(id);
    if (customer != null) {
        let indexNumber = Customers.indexOf(customer);
        Customers.splice(indexNumber, 1);
        loadAllCustomers();
        setTableRow(searchCustomer(id));
        return true;
    } else {
        return false;
    }
}

function updateCustomerValue(id) {
    const customer = searchCustomerId(id);
    if (customer !== null) {
        customer.id = CUS('#update-customer-id').val();
        customer.name = CUS('#update-customer-name').val();
        customer.nic = CUS('#update-customer-nic').val();
        customer.address = CUS('#update-customer-address').val();
        loadAllCustomers();
        setTableRow(searchCustomer(id));
        return true;
    } else {
        return false;
    }
}

function bindRowClickEvents() {
    CUS("#search-tblCustomer>tr").click(function () {
        CUS(this).addClass('--cl-theme-60');
        let id = CUS(this).children(":eq(0)").text();
        let name = CUS(this).children(":eq(1)").text();
        let nic = CUS(this).children(":eq(2)").text();
        let address = CUS(this).children(":eq(3)").text();

        CUS('#delete-customer').removeClass('disabled');
        CUS('.update-customer').removeClass('disabled');
        CUS('.view-customer').removeClass('disabled');
        setValueUpdateModal(id, name, nic, address);
        setValueViewModal(id, name, nic, address);
    });
}

function setValueViewModal(id, name, nic, address) {
    CUS('#details-customer-id').text(id);
    CUS('#details-customer-name').text(name);
    CUS('#details-customer-nic').text(nic);
    CUS('#details-customer-address').text(address);
}

function setValueUpdateModal(id, name, nic, address) {
    CUS('#update-customer-id').val(id);
    CUS('#update-customer-name').val(name);
    CUS('#update-customer-nic').val(nic);
    CUS('#update-customer-address').val(address);
}

function setTableRow(customers) {
    CUS("#search-tblCustomer").empty();
    for (let customer of customers){
        const row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.nic}</td><td>${customer.address}</td></tr>`;
        CUS("#search-tblCustomer").append(row);
    }
}

function searchCustomerId(val) {
    for (let customer of Customers) {
        if (customer.id === val) {
            return customer;
        }
    }
    return null;
}

function searchCustomer(val) {
    const cus = [];
    for (let customer of Customers) {
        if (customer.id === val) {
            cus.push(customer);
        }else if (customer.name === val) {
            cus.push(customer);
        }else if (customer.nic === val) {
            cus.push(customer);
        }else if (customer.address === val) {
            cus.push(customer);
        }
    }
    return cus;
}

function loadAllCustomers() {
    CUS("#tblCustomer").empty();

    for (let customer of Customers) {
        const row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.nic}</td><td>${customer.address}</td><td><button type="button" class="delete-customer btn btn-primary btn-sm fw-bold bg-light-red border-0 me-2">Delete</button><button id="update-customer" type="button" data-bs-toggle="modal" data-bs-target="#update-customer-modal" class="update-customer btn btn-primary btn-sm fw-bold bg-green border-0 ms-2">Update</button></td></tr>`;
        CUS("#tblCustomer").append(row);
    }
}
