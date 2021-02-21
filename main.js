'use strict'
const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.justifyContent = 'space-around';

let product = [
    { name: "icecream", discrp: "Шоколадное мороженное", cost: 145 },
    { name: "toy", discrp: "мягкая игрушка", cost: 832 },
    { name: "pen", discrp: "Синяя ручка", cost: 15 }
];
let basket = [

];


function renderingProduct(arg) {
    let productItem = document.createElement('div');
    productItem.className = "card";
    productItem.style.cssText = 'width:100px; height:200px ;display:flex ;border:2px solid black;flex-direction:column;align-items:center';
    container.appendChild(productItem);
    let productName = document.createElement('p');
    let productCost = document.createElement('p');
    productCost.className = "cost" + arg;
    let buyButton = document.createElement('button');
    buyButton.style.cssText = 'width:80px;height:20px; text-transform:uppercase';
    buyButton.innerHTML = "buy";
    buyButton.className = "buyAcces" + arg;
    productItem.appendChild(productName);
    productItem.appendChild(productCost);
    productItem.appendChild(buyButton);
    productCost.innerHTML = product[arg].cost;
    productName.innerHTML = product[arg].name;
}

for (let j = 0; j < product.length; j++) {
    window.onload = renderingProduct(j);
}

const $basketDiv = document.createElement('div');
const $body = document.querySelector('body');
$body.appendChild($basketDiv);

function countBasketPrice() {
    $basketDiv.innerHTML = '';
    let summ = 0;
    var txt = document.createElement("p");
    if (basket.length == 0) {
        txt.textContent = "";
        txt.innerHTML = "Корзина пуста";
        $basketDiv.appendChild(txt);
    } else {
        for (var i = 0; i < basket.length; i++) {
            summ = summ + basket[i];
        }
        txt.textContent = "";
        txt.innerHTML = "В корзине " + i + " предметов на сумму " + summ + " рублей.";
        $basketDiv.appendChild(txt);
    }

}
countBasketPrice();

const $buyButton0 = document.querySelector(".buyAcces0");
$buyButton0.addEventListener('click', costToBasket0);
const $buyButton1 = document.querySelector(".buyAcces1");
$buyButton1.addEventListener('click', costToBasket1);
const $buyButton2 = document.querySelector(".buyAcces2");
$buyButton2.addEventListener('click', costToBasket2);
const $cost0 = document.querySelector('.cost0').textContent;
const $cost1 = document.querySelector('.cost1').textContent;
const $cost2 = document.querySelector('.cost2').textContent;

// function asd(arg){
//     basket.push(Number($cost[arg]));
//     countBasketPrice();
//     console.log(basket);
// }
function costToBasket0() {
    basket.push(Number($cost0));
    countBasketPrice();
    console.log(basket);
}

function costToBasket1() {
    basket.push(Number($cost1));
    countBasketPrice();
    console.log(basket);
}

function costToBasket2() {
    basket.push(Number($cost2));
    countBasketPrice();
    console.log(basket);
}