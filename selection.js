document.addEventListener("DOMContentLoaded",function(){
    const menuIniziale = ["manutenzione" ,"riparazione" , "installazione" ];
const menuManutenzione =[ "manutenzione caldaia", "manutenzione clima", "controllo salvavita"];
const menuRiparazione =[ "riparazione impianto idraulico", " riparazione caldaia","riparazione climatizzatore"];
const menuInstallazione =["climatizzatore", "caldaia", "scaldabagno"];
let intestazione  = document.getElementById("intestazione");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let menuSelector ="b";

function baseMenuShow(){
    if(menuSelector == "b")
   { intestazione.innerText =" Come possiamo aiutarti?"
     b1.innerText="Installazione";
     b2.innerText="Manutenzione";
     b3.innerText="Riparazione";}

     if(menuSelector == "i"){
        intestazione.innerText ="Cosa ti serve installare?"
        b1.innerText="Climatizzatore";
        b2.innerText="Caldaia";
        b3.innerText="Scaldabagno";

     }
     if(menuSelector == "m"){
        intestazione.innerText ="Cosa ha bisogno di manutenzione?"
        b1.innerText="Caldaia";
        b2.innerText="Climatizzatore";
        b3.innerText="Impianto idraulico";


        if(menuSelector =="r"){
            intestazione.innerText =" Cosa bisogna riparare?"
            b1.innerText="Climatizzatore";
            b2.innerText="Caldaia";
            b3.innerText="wguefgawkyfaiaeu";
        }
     }

}

baseMenuShow();

b1.addEventListener("click", e=> {
    if (menuSelector == "b"){ menuSelector = "i"; baseMenuShow();}
    if (menuSelector == "i"){ menuSelector = "icl";baseMenuShow();}
    if (menuSelector == "m"){ menuSelector = "mca";baseMenuShow();}
    if (menuSelector == "r"){ menuSelector = "rcl";baseMenuShow();}

    


})
b2.addEventListener("click", e=> { 
     if (menuSelector == "b"){ menuSelector = "m"; baseMenuShow();}
if (menuSelector == "i"){ menuSelector = "ica";baseMenuShow();}
if (menuSelector == "m"){ menuSelector = "mcl";baseMenuShow();}
if (menuSelector == "r"){ menuSelector = "rca";baseMenuShow();}

    baseMenuShow();

})
b3.addEventListener("click", e=> {
    if (menuSelector == "b"){ menuSelector = "r"; baseMenuShow();}
    if (menuSelector == "i"){ menuSelector = "isc";baseMenuShow();}
    if (menuSelector == "m"){ menuSelector = "msc";baseMenuShow();}
    if (menuSelector == "r"){ menuSelector = "rsc";baseMenuShow();}
    

    

})


})