//Select element function

/*new for me*/ 
const selectElement = function(element){
    return document.querySelector(element);
};


let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

/*new for me*/ 
menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
});


// Scroll reveal

window.sr = ScrollReveal();
