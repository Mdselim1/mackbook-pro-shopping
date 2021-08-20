// find value every single element 
function valueFind(idpara, value) {
    const mainValue = document.getElementById(idpara).innerText = value;
    return mainValue;
}

// find total cost after adding products and coupon 
function totalFind(cost) {
    const averageCost = document.getElementById('total-price');
    averageCost.innerText = cost;
    document.getElementById('coupon-total').innerText = cost;
}

// Memory Function 

function memoryTotalFind(valueOne) {
    const storage256gb = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const baseCost = document.getElementById('base-price').innerText;
    const totalCost = parseInt(valueOne) + parseInt(storage256gb) + parseInt(deliveryCost) + parseInt(baseCost);
    totalFind(totalCost);

}

// Storage Fuction 

function storageTotalFind(valueTwo) {
    const storage256gb2 = document.getElementById('memory-cost').innerText;
    const deliveryCost2 = document.getElementById('delivery-cost').innerText;
    const baseCost2 = document.getElementById('base-price').innerText;
    const totalCost2 = parseInt(valueTwo) + parseInt(storage256gb2) + parseInt(deliveryCost2) + parseInt(baseCost2);
    totalFind(totalCost2);
}

// Delivery Function 

function deliveryTotalFind(valueThree) {
    const storage256gb3 = document.getElementById('memory-cost').innerText;
    const deliveryCost3 = document.getElementById('storage-cost').innerText;
    const baseCost3 = document.getElementById('base-price').innerText;
    const totalCost3 = parseInt(valueThree) + parseInt(storage256gb3) + parseInt(deliveryCost3) + parseInt(baseCost3);
    totalFind(totalCost3);
}

document.getElementById('memory-8gb-price').addEventListener('click', function () {
    const memory8gbValue = valueFind('memory-cost', 0);
    memoryTotalFind(memory8gbValue);
});

document.getElementById('memory-16gb-price').addEventListener('click', function () {
    const memory16gb = valueFind('memory-cost', 180);
    memoryTotalFind(memory16gb);
});


document.getElementById('ssd-256gb-price').addEventListener('click', function () {
    const memory256gb = valueFind('storage-cost', 0);
    storageTotalFind(memory256gb);
});


document.getElementById('ssd-512gb-price').addEventListener('click', function () {
    const memory512gb = valueFind('storage-cost', 100);
    storageTotalFind(memory512gb);
});


document.getElementById('ssd-1tb-price').addEventListener('click', function () {
    const memory1tb = valueFind('storage-cost', 180);
    storageTotalFind(memory1tb);
});


document.getElementById('delivery-free').addEventListener('click', function () {
    const deliveryFree = valueFind('delivery-cost', 0);
    deliveryTotalFind(deliveryFree);
});


document.getElementById('delivery-prime').addEventListener('click', function () {
    const deliveryPrime = valueFind('delivery-cost', 20);
    deliveryTotalFind(deliveryPrime);
});

// Apply Coupon Code 

document.getElementById('promo-btn').addEventListener('click', function () {
    const promoValueField = document.getElementById('promo-value');
    const promoValue = promoValueField.value;
    promoValueField.value = '';
    const totalValue = document.getElementById('coupon-total');
    const totalNumber = parseInt(totalValue.innerText);
    if (promoValue == 'stevekaku') {
        const totalNumberPer = 20 / 100;
        const findNumber = parseInt(totalNumber * totalNumberPer);
        totalValue.innerText = totalNumber - findNumber;
        document.getElementById('promo-btn').disabled = true;
        document.getElementById('error').innerText = 'You can apply coupon one time';
    } else {
        document.getElementById('error').innerText = 'Please apply right coupon';
    };
});
