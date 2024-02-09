var payButton = document.querySelector("#pay-button");
var nameInput = document.querySelector("#name");
var shoppingCart = document.querySelector("#products");
var total_ = document.querySelector("#total");


payButton.addEventListener("click", click);

function click(){
    window.alert(`Thank you ${nameInput.value}! Please pay ${total_.innerText}.`);
    reset();
}

function reset(){
    document.querySelector("#qnt").value = null;
    document.querySelector("#checkbox").checked = false;
    nameInput.value = null;
    document.querySelector("#selector").options.selectedIndex = 0;
    shoppingCart.innerHTML = "<p>Your cart:</p>";
    total_.innerText = "Total: $0.00";
}

