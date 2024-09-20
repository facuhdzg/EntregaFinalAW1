//Imports
import { cartCardComponent } from "../components/cardsCart.js";
import { footerComponent } from "../components/footer.js";
import { cardComponent } from "../components/cards.js";
import { navBoots } from "../components/navbar.js";

/* Vincula la variable con el contenedor */
let footContainer=document.querySelector('.pie');
let navContainer = document.querySelector('.head');
let cardContainer=document.querySelector('.container');
let cardsCartContainer=document.querySelector('.cont-cart');
/* Cuando carga el documento inserta el codigo */
window.addEventListener('load',()=>{
    //verifica e Inserta los codigos html cuando carga el DOM
    //Si existen los containers inserta el codigo
    if(navContainer)
    {
        navContainer.innerHTML=navBoots;
    };
    if(footContainer)
    {   
        footContainer.innerHTML=footerComponent; 
    };
    if(cardContainer)
    {
        cardContainer.innerHTML=cardComponent;
    };   
    if(cardsCartContainer)
    {
        cardsCartContainer.innerHTML=cartCardComponent;
    };    
    //Guarda un array con todos los btn-add  
    let btnAdd = document.querySelectorAll('.btn-add');
    btnAdd.forEach(btnE=>{
        //añade el evento click a cada btnAdd
        btnE.addEventListener('click',()=>{
            //Selecciona la cantidad que es hermano previo al btnAdd
            let cant=btnE.previousElementSibling;
            if(cant && cant.classList.contains('cant'))
            {
                //Transforma la cantidad en base10(Decimal)
                let cantidad=parseInt(cant.textContent,10);
                //suma 1
                cantidad +=1;
                //Muestra la nueva cantidad
                cant.textContent=cantidad.toString();
            };
        });
    });
    //Guarda un array con todos los btn-quit  
    let btnQuit = document.querySelectorAll('.btn-quit');
    btnQuit.forEach(btnE=>{
        //añade el evento click a cada btnQuit
        btnE.addEventListener('click',()=>{
            //Selecciona la cantidad que es hermano siguiente al btnQuit
            let cant=btnE.nextElementSibling;
            if(cant && cant.classList.contains('cant') && cant.textContent>1)
            {
                //Transforma la cantidad en base10(Decimal)
                let cantidad=parseInt(cant.textContent,10);
                //resta 1
                cantidad -=1;
                //Muestra la nueva cantidad
                cant.textContent=cantidad.toString();
            };
        });
    });
});

