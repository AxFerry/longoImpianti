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


const slides = document.querySelectorAll(".slide");

let slideIndex = 0;
slides[slideIndex].dataset.active = true;
intervalid = setInterval(e=>{
    delete slides[slideIndex].dataset.active;
    if(slideIndex == 13){slideIndex = 0;}
    else {slideIndex = slideIndex + 1;}
    slides[slideIndex].dataset.active = true;},4000);
/*
let nextBtn = document.querySelector("#nextbtn");
let prevBtn = document.querySelector("#prewbtn");
let intervalid = null;
slides[slideIndex].dataset.active = true;


nextBtn.addEventListener('click',e=>{
    delete slides[slideIndex].dataset.active;
    if(slideIndex == 13){slideIndex = 0;}
    else {slideIndex = slideIndex + 1;}
    slides[slideIndex].dataset.active = true;
});
prevBtn.addEventListener('click',e=>{
    delete slides[slideIndex].dataset.active;
    if(slideIndex == 0){slideIndex = 13;}
    else{slideIndex = slideIndex -1;}
    slides[slideIndex].dataset.active = true;
});

});

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll(".slide");
    */

    const radio1 =document.getElementById("radio1");
    const radio2 =document.getElementById("radio2");
    const radio3 =document.getElementById("radio3");
    const radio4 =document.getElementById("radio4");
    const radio5 =document.getElementById("radio5");
    const radio6 =document.getElementById("radio6");
    const radio7 =document.getElementById("radio7");
    const radio8 =document.getElementById("radio8");
    const radio9 =document.getElementById("radio9");
    const radio10 =document.getElementById("radio10");
    const radio11 =document.getElementById("radio11");
    const radio12 =document.getElementById("radio12");
    const radio13 =document.getElementById("radio13");
    const radio14 =document.getElementById("radio14");


    radio1.addEventListener("click",e=>{
        delete slides[slideIndex].dataset.active;
        slideIndex = 0;  
        slides[slideIndex].dataset.active = true;
        clearInterval(intervalid);
        intervalid = setInterval(e=>{
            delete slides[slideIndex].dataset.active;
            if(slideIndex == 13){slideIndex = 0;}
            else {slideIndex = slideIndex + 1;}
            slides[slideIndex].dataset.active = true;},4000);

    })
    
    radio2.addEventListener("click",e=>{
        delete slides[slideIndex].dataset.active;
        slideIndex = 1;  
        slides[slideIndex].dataset.active = true; 
        clearInterval(intervalid);
        intervalid = setInterval(e=>{
            delete slides[slideIndex].dataset.active;
            if(slideIndex == 13){slideIndex = 0;}
            else {slideIndex = slideIndex + 1;}
            slides[slideIndex].dataset.active = true;},4000);   
    })
    
    radio3.addEventListener("click",e=>{
        delete slides[slideIndex].dataset.active;
        slideIndex = 2;  
        slides[slideIndex].dataset.active = true;
        clearInterval(intervalid);
        intervalid = setInterval(e=>{
            delete slides[slideIndex].dataset.active;
            if(slideIndex == 13){slideIndex = 0;}
            else {slideIndex = slideIndex + 1;}
            slides[slideIndex].dataset.active = true;},4000);

    })
    
    radio4.addEventListener("click",e=>{
        delete slides[slideIndex].dataset.active;
        slideIndex = 3;  
        slides[slideIndex].dataset.active = true; 
        clearInterval(intervalid);
        intervalid = setInterval(e=>{
            delete slides[slideIndex].dataset.active;
            if(slideIndex == 13){slideIndex = 0;}
            else {slideIndex = slideIndex + 1;}
            slides[slideIndex].dataset.active = true;},4000);   
    })
   
    radio5.addEventListener("click",e=>{
        delete slides[slideIndex].dataset.active;
        slideIndex = 4;  
        slides[slideIndex].dataset.active = true;
        clearInterval(intervalid);
        intervalid = setInterval(e=>{
            delete slides[slideIndex].dataset.active;
            if(slideIndex == 13){slideIndex = 0;}
            else {slideIndex = slideIndex + 1;}
            slides[slideIndex].dataset.active = true;},4000);

    })
    
    radio6.addEventListener("click",e=>{
        delete slides[slideIndex].dataset.active;
        slideIndex = 5;  
        slides[slideIndex].dataset.active = true;    
        clearInterval(intervalid);
        intervalid = setInterval(e=>{
            delete slides[slideIndex].dataset.active;
            if(slideIndex == 13){slideIndex = 0;}
            else {slideIndex = slideIndex + 1;}
            slides[slideIndex].dataset.active = true;},4000);
    })
    
    radio7.addEventListener("click",e=>{
        delete slides[slideIndex].dataset.active;
        slideIndex = 6;  
        slides[slideIndex].dataset.active = true;
        clearInterval(intervalid);
        intervalid = setInterval(e=>{
            delete slides[slideIndex].dataset.active;
            if(slideIndex == 13){slideIndex = 0;}
            else {slideIndex = slideIndex + 1;}
            slides[slideIndex].dataset.active = true;},4000);

    })
    
    radio8.addEventListener("click",e=>{
        delete slides[slideIndex].dataset.active;
        slideIndex = 7;  
        slides[slideIndex].dataset.active = true;    
        clearInterval(intervalid);
        intervalid = setInterval(e=>{
            delete slides[slideIndex].dataset.active;
            if(slideIndex == 13){slideIndex = 0;}
            else {slideIndex = slideIndex + 1;}
            slides[slideIndex].dataset.active = true;},4000);
    })
    
    radio9.addEventListener("click",e=>{
        delete slides[slideIndex].dataset.active;
        slideIndex = 8;  
        slides[slideIndex].dataset.active = true;
        clearInterval(intervalid);
        intervalid = setInterval(e=>{
            delete slides[slideIndex].dataset.active;
            if(slideIndex == 13){slideIndex = 0;}
            else {slideIndex = slideIndex + 1;}
            slides[slideIndex].dataset.active = true;},4000);

    })
    
    radio10.addEventListener("click",e=>{
        delete slides[slideIndex].dataset.active;
        slideIndex = 9;  
        slides[slideIndex].dataset.active = true;    
        clearInterval(intervalid);
        intervalid = setInterval(e=>{
            delete slides[slideIndex].dataset.active;
            if(slideIndex == 13){slideIndex = 0;}
            else {slideIndex = slideIndex + 1;}
            slides[slideIndex].dataset.active = true;},4000);
    })
    
    radio11.addEventListener("click",e=>{
        delete slides[slideIndex].dataset.active;
        slideIndex = 10;  
        slides[slideIndex].dataset.active = true;
        clearInterval(intervalid);
        intervalid = setInterval(e=>{
            delete slides[slideIndex].dataset.active;
            if(slideIndex == 13){slideIndex = 0;}
            else {slideIndex = slideIndex + 1;}
            slides[slideIndex].dataset.active = true;},4000);

    })
    
    radio12.addEventListener("click",e=>{
        delete slides[slideIndex].dataset.active;
        slideIndex = 11;  
        slides[slideIndex].dataset.active = true;    
        clearInterval(intervalid);
        intervalid = setInterval(e=>{
            delete slides[slideIndex].dataset.active;
            if(slideIndex == 13){slideIndex = 0;}
            else {slideIndex = slideIndex + 1;}
            slides[slideIndex].dataset.active = true;},4000);
    })
    
    radio13.addEventListener("click",e=>{
        delete slides[slideIndex].dataset.active;
        slideIndex = 12;  
        slides[slideIndex].dataset.active = true;
        clearInterval(intervalid);
        intervalid = setInterval(e=>{
            delete slides[slideIndex].dataset.active;
            if(slideIndex == 13){slideIndex = 0;}
            else {slideIndex = slideIndex + 1;}
            slides[slideIndex].dataset.active = true;},4000);

    })
    
    radio4.addEventListener("click",e=>{
        delete slides[slideIndex].dataset.active;
        slideIndex = 3;  
        slides[slideIndex].dataset.active = true;    
        clearInterval(intervalid);
        intervalid = setInterval(e=>{
            delete slides[slideIndex].dataset.active;
            if(slideIndex == 13){slideIndex = 0;}
            else {slideIndex = slideIndex + 1;}
            slides[slideIndex].dataset.active = true;},4000);
    })
   
    radio5.addEventListener("click",e=>{
        delete slides[slideIndex].dataset.active;
        slideIndex = 4;  
        slides[slideIndex].dataset.active = true;
        clearInterval(intervalid);
        intervalid = setInterval(e=>{
            delete slides[slideIndex].dataset.active;
            if(slideIndex == 13){slideIndex = 0;}
            else {slideIndex = slideIndex + 1;}
            slides[slideIndex].dataset.active = true;},4000);

    })
})
