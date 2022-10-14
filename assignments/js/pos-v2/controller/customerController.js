let CUS =jQuery.noConflict();

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



function loadAllCustomers() {
    CUS("#tblCustomer").empty();

    for (let customer of Customers) {
        const row = `<tr><td>${customer.id}
                    </td><td>${customer.name}
                    </td><td>${customer.nic}
                    </td><td>${customer.address}
                    </td><td>
                        <button type="button" class="delete-customer btn btn-primary btn-sm fw-bold bg-light-red border-0 me-2">Delete</button>
                        <button id="update-customer" type="button" data-bs-toggle="modal" data-bs-target="#update-customer-modal" class="update-customer btn btn-primary btn-sm fw-bold bg-green border-0 ms-2">Update</button>
                    </td></tr>`;

        CUS("#tblCustomer").append(row);
    }
}