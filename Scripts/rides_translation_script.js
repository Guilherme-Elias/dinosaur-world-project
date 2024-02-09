var titles = document.querySelectorAll(".titles");
var selector = document.querySelector("#language-selector");

var english = [
    "For kids",
    "Food",
    "Stores",
    "Museum"
];

var portuguese = [
    "Para os pequeninos",
    "Fome de dinossauro?",
    "Dino compras",
    "Dino história"
];

var spanish = [
    "Para niños",
    "Víveres",
    "Tiendas",
    "Museo"
];

var french = [
    "Pour les enfants",
    "Nourriture",
    "Magasins",
    "Musée"
];

selector.addEventListener('click', function(){
    let option = selector.options.selectedIndex;
    let counter = 0;

    if(option == "0" || option == "1"){
        for (let title of titles){
            title.innerText = english[counter];
            counter++;
        }
    }

    else if (option == "2"){
        for (let title of titles){
            title.innerText = portuguese[counter];
            counter++;
        }
    }

    else if (option == "3"){
        for (let title of titles){
            title.innerText = spanish[counter];
            counter++;
        }
    }

    else if (option == "4"){
        for (let title of titles){
            title.innerText = french[counter];
            counter++;
        }
    }
})

