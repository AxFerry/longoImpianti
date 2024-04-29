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

const Clima(marca,model,btu,prezzo,foto){
    this.marca = marca,
    this.model = model,
    this.btu = btu,
    this.prezzo = prezzo,
    this.foto = foto
}

const clima1 = new Clima("samsung" ,"supercool",1800,"gigi4.jpg");


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

});

