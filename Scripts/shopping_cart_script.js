// selecting DOM elements from the document
var productInput = document.querySelector("#selector");
var quantityInput = document.querySelector("#qnt");
var kpInput = document.querySelector("#checkbox");

var addToCartButton = document.querySelector("#cart-button");

var cartVisor = document.querySelector("#products");
var totalText = document.querySelector("#total");

// creating arrays for each price group
// accordingly to the order of the selector
var fullPrices = [null, 150, 180, 82.5, 100];
var kidPrices = [null, 90, 120, 42.75, 70];
var pNames = [null, "Halloween Ticket", "Christmas Ticket", "Standard Ticket", "Deluxe Ticket"];

// adding an event listener to the button
addToCartButton.addEventListener("click", click);

var total = 0;

// defining the click function
function click(){
    let quantity = quantityInput.value;
    let chosenProductIndex = productInput.options.selectedIndex;
    let kp = kpInput.checked;

    var chosenArray;

    if (kp){
        chosenArray = kidPrices;
    } else {chosenArray = fullPrices;}

    if(chosenProductIndex == 0){
        window.alert("Please, select a product");
        restart();
    }
    else{
        let price = chosenArray[chosenProductIndex] * quantity;
        total += price;
        addProduct(pNames[chosenProductIndex], quantity, price);
        totalText.innerText = "Total: $" + total;
        restart();
    }

}

function addProduct(pName, qnt, price){
    let p = document.createElement("p");
    p.innerText = `${qnt}x --- ${pName} --- $${price}`;
    cartVisor.appendChild(p);
}

function restart(){
    quantityInput.value = null;
    kpInput.checked = false;
    productInput.options.selectedIndex = 0;
}
