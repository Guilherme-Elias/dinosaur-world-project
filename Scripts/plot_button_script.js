// selecting the DOM elements
var button = document.querySelector("button");
var image = document.querySelector("#image-container");

// event listener
button.addEventListener("click", click);

// defining the function for the listener
var counter = 1;
function click(){
    let evenText = "Click to see ratings";
    let oddText = "Click to hide ratings";

    if(counter%2==0){
        button.innerText = evenText;
        image.style.display = "none";
    }
    else{
        button.innerText = oddText;
        image.style.display = "inline";
    }
    counter++;
}
