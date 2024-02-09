// this file make the images showcase work properly

// selecting all images:
var allImages = document.querySelectorAll(".showcase-image");

for(let image of allImages){
    image.addEventListener('click', oneClick);
    image.addEventListener('dblclick', dblClick);
}


function oneClick(){
    for (let image_ of allImages){
        image_.style.width = "10%";
    }

    this.style.width = "70%";

}

function dblClick(){
    this.style.width = "10%";
}
