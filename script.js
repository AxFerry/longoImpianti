//  HIDE and SHOW //
const home = document.querySelector('Home');




const menubtn = document.getElementById('menubtn');
const menubar = document.getElementById('menubar');
const homebtn = document.getElementById('homebtn');
const homepage = document.getElementById('homepage');
const lavoribtn = document.getElementById('lavoribtn');
const lavoripage = document.getElementById('lavoripage');


var n = 0 ;

menubtn.addEventListener("click" , function showmenu( event ){
        
    if(n == 0)
    { 
        n++ ;
        menubar.style.display = 'flex';
    }
    else{
        n = 0;
        menubar.style.display  = 'none' ;
    }
   

})
/*
homebtn.addEventListener("click" , function showhome( event ){
        
    if(n == 0)
    { 
        n++ ;
        homepage.style.display = 'flex';
    }
    else{
        n = 0;
        homepage.style.display  = 'none' ;
    }
   

})
lavoribtn.addEventListener("click" , function showlavori( event ){
        
    if(n == 0)
    { 
        n++ ;
        lavoripage.style.display = 'flex';
    }
    else{
        n = 0;
        lavoripage.style.display  = 'none' ;
    }
})

//animazone bottone //
menubtn.addEventListener("mouseover", ifhover);
function ifhover (event){    
    menubtn.style.borderBottomColor("red")
    menubtn.style.borderBottomStyle("solid")
}

// Image Slider //
const slides = document.querySelectorAll(".slide");
let slidesIndex = 0;
let intervalid = null ;

function inizializeSlider(){
     slides[slidesIndex].classList.add("activeSlide");
     intervalid = setInterval(nextSlide,3000);
}
function showSlides(index){
    if(index >= slides.length){
        slidesIndex = 0;
    }
    else if (index < 0){
        slidesIndex = slides.length -1 ;
    }
    slides.forEach(slide => {
        slide.classList.remove("activeSlide");           
    });slides[slidesIndex].classList.add("activeSlide");
}
function prewSlide(){
   slidesIndex--;
   showSlides(slidesIndex);
}
function nextSlide(){
    slidesIndex++;
    showSlides(slidesIndex);
}/*
 //IMAGE SLIDER//
 let carobtn = document.querySelectorAll("[data-carousel-btn]");
carobtn.forEach(button => {
    button.addEventListener("click",()=>{
        const offset =button.dataset.carouselButton === "next" ? 1 : -1 ;
        const slides =document.querySelectorAll("slide");
        const activeSlide= document.querySelector("[data-active]");
        let slideIndex = [...slides.children].indexOf(activeSlide)+ offset;
        if(newIndex <0) {newIndex=slides.children.length -1};
        if(newIndex > slides.children.length){newIndex = 0};
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
    
});

*/
//image slider 2.0//
document.addEventListener('DOMContentLoaded', function () {

let nextBtn = document.querySelector("#nextbtn");
let prevBtn = document.querySelector("#prewbtn");
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let intervalid = null;
slides[slideIndex].dataset.active = true;
intervalid = setInterval(e=>{delete slides[slideIndex].dataset.active;
    if(slideIndex == 3){slideIndex = 0;}
    else {slideIndex = slideIndex + 1;}
    slides[slideIndex].dataset.active = true;},2000);

nextBtn.addEventListener('click',e=>{
    delete slides[slideIndex].dataset.active;
    if(slideIndex == 3){slideIndex = 0;}
    else {slideIndex = slideIndex + 1;}
    slides[slideIndex].dataset.active = true;
});
prevBtn.addEventListener('click',e=>{
    delete slides[slideIndex].dataset.active;
    if(slideIndex == 0){slideIndex = 3;}
    else{slideIndex = slideIndex -1;}
    slides[slideIndex].dataset.active = true;
});

})