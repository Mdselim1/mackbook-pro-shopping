function valuePrint(idpara, value) {
    const mainValue = document.getElementById(idpara).innerText = value;
    return mainValue;
}

function similarAdd(valueOne) {
    const storage256gb = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const baseCost = document.getElementById('base-price').innerText;
    const totalCost = parseInt(valueOne) + parseInt(storage256gb) + parseInt(deliveryCost) + parseInt(baseCost);
    const averageCost = document.getElementById('total-price');
    averageCost.innerText = totalCost;
    document.getElementById('coupon-total').innerText = totalCost;
}
function similarAddTwo(valueTwo) {
    const storage256gb2 = document.getElementById('memory-cost').innerText;
    const deliveryCost2 = document.getElementById('delivery-cost').innerText;
    const baseCost2 = document.getElementById('base-price').innerText;
    const totalCost2 = parseInt(valueTwo) + parseInt(storage256gb2) + parseInt(deliveryCost2) + parseInt(baseCost2);
    const averageCost2 = document.getElementById('total-price');
    averageCost2.innerText = totalCost2;
    document.getElementById('coupon-total').innerText = totalCost2;
}
function similarAddThree(valueThree) {
    const storage256gb3 = document.getElementById('memory-cost').innerText;
    const deliveryCost3 = document.getElementById('storage-cost').innerText;
    const baseCost3 = document.getElementById('base-price').innerText;
    const totalCost3 = parseInt(valueThree) + parseInt(storage256gb3) + parseInt(deliveryCost3) + parseInt(baseCost3);
    const averageCost3 = document.getElementById('total-price');
    averageCost3.innerText = totalCost3;
    document.getElementById('coupon-total').innerText = totalCost3;
}

document.getElementById('memory-8gb-price').addEventListener('click', function () {
    const memory8gbValue = valuePrint('memory-cost', 0);
    similarAdd(memory8gbValue);
})
document.getElementById('memory-16gb-price').addEventListener('click', function () {
    const memory16gb = valuePrint('memory-cost', 180);
    similarAdd(memory16gb);
})
document.getElementById('ssd-256gb-price').addEventListener('click', function () {
    const memory256gb = valuePrint('storage-cost', 0);
    similarAddTwo(memory256gb);
})
document.getElementById('ssd-512gb-price').addEventListener('click', function () {
    const memory512gb = valuePrint('storage-cost', 100);
    similarAddTwo(memory512gb);
})
document.getElementById('ssd-1tb-price').addEventListener('click', function () {
    const memory1tb = valuePrint('storage-cost', 180);
    similarAddTwo(memory1tb);
})
document.getElementById('delivery-free').addEventListener('click', function () {
    const deliveryFree = valuePrint('delivery-cost', 0);
    similarAddThree(deliveryFree);
})
document.getElementById('delivery-prime').addEventListener('click', function () {
    const deliveryPrime = valuePrint('delivery-cost', 20);
    similarAddThree(deliveryPrime);
})

document.getElementById('promo-btn').addEventListener('click', function () {
    const promoValueField = document.getElementById('promo-value');
    const promoValue = promoValueField.value;
    const totalValue = document.getElementById('coupon-total');
    const totalNumber = parseInt(totalValue.innerText);
    if (promoValue == 'stevekaku') {
        const totalNumberPer = 20 / 100;
        const findNumber = parseInt(totalNumber * totalNumberPer);
        totalValue.innerText = totalNumber - findNumber;
    }
})
