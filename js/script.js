// memory price function 
function memoryValue(priceMemory) {
    const memoryCost = document.getElementById('memory-cost');
    return memoryCost.innerText = parseInt(priceMemory);

}

// 8 gb button clicked
document.getElementById('memory-8gb-price').addEventListener('click', function () {
    const memory1stPrice = memoryValue(0);
    const basePriceMac = document.getElementById('base-price');
    const totalPrice1st = parseInt(basePriceMac.innerText);
    const totalPriceMac = document.getElementById('total-price');
    totalPriceMac.innerText = totalPrice1st + memory1stPrice;


})


// total price function 

function totalPriceField(price) {
    const totalPriceSub = document.getElementById('total-price');
    const totalPriceProductConfig = totalPriceSub.innerText;
    const totalPriceFinal = parseInt(totalPriceProductConfig) + price;
    totalPriceSub.innerText = totalPriceFinal;
}

// 16 gb button clicked 
document.getElementById('memory-16gb-price').addEventListener('click', function () {
    const memoryTotal2 = memoryValue(180);
    const basePriceMac2 = document.getElementById('base-price');
    const totalPrice2nd = parseInt(basePriceMac2.innerText);
    const totalPriceMac2 = document.getElementById('total-price');
    totalPriceMac2.innerText = totalPrice2nd + memoryTotal2;
});

// storage function 
function storageValue(priceStorage) {
    const memoryCost = document.getElementById('storage-cost');
    return memoryCost.innerText = parseInt(priceStorage);
}
// 256 gb storage 

document.getElementById('ssd-256gb-price').addEventListener('click', function () {
    const storageTotal1 = storageValue(0);
    const totalPriceMac3 = document.getElementById('total-price');
    const totalPriceMac256 = totalPriceMac3.innerText;
    totalPriceMac3.innerText = parseInt(totalPriceMac256) + storageTotal1;
})

// 512 gb function 

document.getElementById('ssd-512gb-price').addEventListener('click', function () {
    const ssdPrice512 = storageValue(100);
    totalPriceField(ssdPrice512);
    // const totalPriceMac4 = document.getElementById('total-price');
    // const totalPriceMac512 = totalPriceMac4.innerText;
    // totalPriceMac4.innerText = parseInt(totalPriceMac512) + ssdPrice512;
})

// 1tb fuction 

document.getElementById('ssd-1tb-price').addEventListener('click', function () {
    const ssdPrice1tb = storageValue(180);
    const totalPriceMac5 = document.getElementById('total-price');
    const totalPriceMac1tb = totalPriceMac5.innerText;
    totalPriceMac5.innerText = parseInt(totalPriceMac1tb) + ssdPrice1tb;
})

// delivery cost 
function delivaryValue(priceDelivery) {
    const memoryCost = document.getElementById('delivery-cost');
    return memoryCost.innerText = parseInt(priceDelivery);
}


// for free 

document.getElementById('delivery-free').addEventListener('click', function () {
    const deliveryTotal = delivaryValue(0);
    const totalPriceMac6 = document.getElementById('total-price');
    const totalPriceMacdeli = totalPriceMac6.innerText;
    totalPriceMac6.innerText = parseInt(totalPriceMacdeli) + deliveryTotal;
})

// premiusm 

document.getElementById('delivery-prime').addEventListener('click', function () {
    const deliveryTotal2 = delivaryValue(20);
    const totalPriceMac7 = document.getElementById('total-price');
    const totalPriceMacdeli2 = totalPriceMac7.innerText;
    totalPriceMac7.innerText = parseInt(totalPriceMacdeli2) + deliveryTotal2;
})