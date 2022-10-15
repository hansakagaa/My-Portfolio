const ITM =jQuery.noConflict();

ITM('#save-new-item').click(function () {
    let itemCode = ITM("#new-item-id").val();
    let description = ITM("#new-item-name").val();
    let unitPrice = ITM("#new-item-nic").val();
    let qty = ITM("#new-item-address").val();

    const itemOb = {
        code : itemCode,
        description : description,
        unitPrice : unitPrice,
        qty : qty
    }
    Items.push(itemOb);
    loadAllItems();
});

ITM('.search-item').click(function () {
    let val = ITM('.customer-item-bar').val();
    const values = searchItem(val);
    setTableRow(values);
    bindRowClickEvents();
});

ITM('#save-update-item').click(function () {
    let id = ITM('#update-item-id').val();
    let response = updateItemValue(id);
    if (response) {
        setValueUpdateModal("", "", "", "");
    } else {
        alert('Update Failed..!');
    }
});

ITM('#delete-item').click(function () {
    let id = ITM('#details-item-id').text();
    let option = confirm('Do you really want to delete item code :' + id);
    if (option){
        if (deleteItemValue(id)) {
            alert("Item Successfully Deleted..");
            setValueUpdateModal("", "", "", "");
        } else {
            alert("No such item to delete. please check the id");
        }
    }
});


ITM('#all-item').click(function () {
    loadAllItems();
});

function deleteItemValue(id) {
    const item = searchItemCode(id);
    if (item != null) {
        let indexNumber = Items.indexOf(item);
        Items.splice(indexNumber, 1);
        loadAllItems();
        setTableRow(searchItem(id));
        return true;
    } else {
        return false;
    }
}

function updateItemValue(code) {
    const item = searchItemCode(code);
    if (item !== null) {
        item.code = ITM('#update-item-item-code').val();
        item.description = ITM('#update-item-description').val();
        item.unitPrice = ITM('#update-item-unit-price').val();
        item.qty = ITM('#update-item-qty').val();
        loadAllItems();
        setTableRow(searchItem(code));
        return true;
    } else {
        return false;
    }
}

function bindRowClickEvents() {
    ITM("#search-tblItem>tr").click(function () {
        ITM(this).addClass('--cl-theme-60');
        let code = ITM(this).children(":eq(0)").text();
        let description = ITM(this).children(":eq(1)").text();
        let unitPrice = ITM(this).children(":eq(2)").text();
        let qty = ITM(this).children(":eq(3)").text();

        ITM('#delete-item').removeClass('disabled');
        ITM('.update-item').removeClass('disabled');
        ITM('.view-item').removeClass('disabled');
        setValueUpdateModal(code, description, unitPrice, qty);
        setValueViewModal(code, description, unitPrice, qty);
    });
}

function setValueViewModal(code, description, unitPrice, qty) {
    ITM('#details-item-item-code').text(code);
    ITM('#details-item-description').text(description);
    ITM('#details-item-unit-price').text(unitPrice);
    ITM('#details-item-qty').text(qty);
}

function setValueUpdateModal(code, description, unitPrice, qty) {
    ITM('#update-item-id').val(code);
    ITM('#update-item-name').val(description);
    ITM('#update-item-nic').val(unitPrice);
    ITM('#update-item-address').val(qty);
}

function setTableRow(items) {
    ITM("#search-tblItem").empty();
    for (let item of items){
        const row = `<tr><td>${item.code}</td><td>${item.description}</td><td>${item.unitPrice}</td><td>${item.qty}</td></tr>`;
        ITM("#search-tblItem").append(row);
    }
}

function searchItemCode(code) {
    for (let item of Items) {
        if (item.id === code) {
            return item;
        }
    }
    return null;
}

function searchItem(val) {
    const itm = [];
    for (let item of ITM) {
        if (item.code === val) {
            itm.push(item);
        }else if (item.description === val) {
            itm.push(item);
        }else if (item.unitPrice === val) {
            itm.push(item);
        }else if (item.qty === val) {
            itm.push(item);
        }
    }
    return itm;
}

function loadAllItems() {
    ITM("#tblItem").empty();

    for (let item of Items) {
        const row = `<tr><td>${item.code}</td><td>${item.description}</td><td>${item.unitPrice}</td><td>${item.qty}</td><td><button type="button" class="delete-item btn btn-primary btn-sm fw-bold bg-light-red border-0 me-2">Delete</button><button id="update-item" type="button" data-bs-toggle="modal" data-bs-target="#update-item-modal" class="update-customer btn btn-primary btn-sm fw-bold bg-green border-0 ms-2">Update</button></td></tr>`;
        ITM("#tblItem").append(row);
    }
}
