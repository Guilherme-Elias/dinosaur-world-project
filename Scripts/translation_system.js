var mainHeading = document.querySelector("#main-heading");

var ridesButton = document.querySelector("#rides");
var eventsButton = document.querySelector("#events");
var ticketsButton = document.querySelector("#tickets");

var activitiesHeading = document.querySelector("#actv-headline");

var foodHeading = document.querySelector("#food-heading");
var adventureHeading = document.querySelector("#adventure-heading");
var natureHeading = document.querySelector("#nature-heading");
var scienceHeading = document.querySelector("#science-heading");

var rightDeclaration = document.querySelector("#rights");

var contactUs = document.querySelector("#contact-us");
var aboutUs = document.querySelector("#about-us");
var suggestions = document.querySelector("#suggestions");

var objectsList = [
    mainHeading,
    ridesButton,
    eventsButton,
    ticketsButton,
    activitiesHeading,
    foodHeading,
    adventureHeading,
    natureHeading,
    scienceHeading,
    rightDeclaration,
    contactUs,
    aboutUs,
    suggestions
];

// values of options indexes
// 0 -> english
// 1 -> english
// 2 -> portugues
// 3 -> espanhol
// 4 -> frances

var english = [
    "Welcome to", "Our Rides", "Next Events", "Buy Tickets", "Activities", "Dino Hunger", "Dinoventure", "Naturessaurus",
    "Science", "All Rights Reserved", "Contact Us", "About Us", "Suggestions"
];

var portugues = [
    "Bem-vindo a", "Atrações", "Eventos", "Tickets", "Atividades", "Fome Jurássica", "Dinoaventura", "Naturezassauro", "Ciência",
    "Todos os direitos reservados", "Contato", "Sobre nós", "Sugestões"
];

var espanhol = [
    "Bienvenido a", "Paseos", "Eventos", "Tickets", "Actividades", "Dino Hambre", "Aventura", "Naturaleza", "Ciencia",
    "Todos los derechos reservados", "Contáctenos", "Nosotros", "Sugerencias"
];

var frances = [
    "Bienvenue à", "Attractions", "Événements", "Billets", "Activités", "Nourriture", "Aventure", "Nature", "Science",
    "Tous Droits Réservés", "Contactez-nous", "Environ", "Suggestions"
];

var selector = document.querySelector("#language-selector");

selector.addEventListener('click', function(){

    let option = selector.options.selectedIndex;
    let counter = 0;

    if(option == "0" || option == "1"){
        for(let object of objectsList){
            object.innerText = english[counter];
            counter++
        }
    }

    else if (option == "2"){
        for(let object of objectsList){
            object.innerText = portugues[counter];
            counter++;
        }
    }

    else if (option == "3"){
        for (let object of objectsList){
            object.innerText = espanhol[counter];
            counter++;
        }
    }

    else if (option == "4"){
        for (let object of objectsList){
            object.innerText = frances[counter];
            counter++;
        }
    }

})
