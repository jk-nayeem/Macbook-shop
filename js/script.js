
function updatePrice(){
    let netMemoryPrice = document.getElementById('memory-price').innerText;
    let netStoragePrice = document.getElementById('storage-price').innerText;
    let netDeliveryCharge = document.getElementById('delivery-charge').innerText;

    netMemoryPrice = parseFloat(netMemoryPrice);
    netStoragePrice = parseFloat(netStoragePrice);
    netDeliveryCharge = parseFloat(netDeliveryCharge);
    let totalPrice = 1299 +netMemoryPrice + netStoragePrice + netDeliveryCharge;

    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('all-total-price').innerText = totalPrice;

}

document.getElementById('basic-memory').addEventListener('click', function(){
    let netPrice = document.getElementById('memory-price');
    netPrice.innerText = 0;
    updatePrice();
})
document.getElementById('extend-memory').addEventListener('click', function(){
    let netPrice = document.getElementById('memory-price');
    netPrice.innerText = 180;
    updatePrice();
})
document.getElementById('basic-storage').addEventListener('click', function(){
    let netPrice = document.getElementById('storage-price');
    netPrice.innerText = 0;
    updatePrice();
})
document.getElementById('mid-storage').addEventListener('click', function(){
    let netPrice = document.getElementById('storage-price');
    netPrice.innerText = 100;
    updatePrice();
})
document.getElementById('max-storage').addEventListener('click', function(){
    let netPrice = document.getElementById('storage-price');
    netPrice.innerText = 180;
    updatePrice();
})
document.getElementById('basic-delivery').addEventListener('click', function(){
    let netPrice = document.getElementById('delivery-charge');
    netPrice.innerText = 0;
    updatePrice();
})
document.getElementById('special-delivery').addEventListener('click', function(){
    let netPrice = document.getElementById('delivery-charge');
    netPrice.innerText = 20;
    updatePrice();
})
let count = 0;
document.getElementById('cupon').addEventListener('click', function(){
    let cuponCode = document.getElementById('cupon-code').value;
    
    
    if(cuponCode == 'Rabbyismybestfriend'){
        if(count == 1){
            alert("This Cupon Code is already used.");
        }
        else{
            let price = document.getElementById('all-total-price').innerText;
            price = parseFloat(price);
            let temp = (20/100)*price;
            price = price - temp;
            document.getElementById('all-total-price').innerText = price;
            document.getElementById('cupon-code').value = '';
            count = 1;
        }
        
    }
    else{
        alert("Invalid Cuppon Code.");
    }
})

