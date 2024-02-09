var titles = document.querySelectorAll(".titles");
var selector = document.querySelector("#language-selector");

var english = ["Dinoween", "Santasaur"];
var portuguese = ["Dia das Bruxas", "Dino Natal"];
var spanish = ["Dia de todos los Dinos", "Dino Navidad"];
var french = ["Halloween", "Dino Noël"];

selector.addEventListener("click", () => {
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
