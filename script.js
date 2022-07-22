var slides = document.getElementById("slides");
var slide= slides.getElementsByClassName("slide");


function next(){
    slides.append(slide[0]);
}

function prev(){
    slides.prepend(slide[slide.length-1]);
}
