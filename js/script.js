'use strict';
// Az oldal alaphelyzetben egyetlen gombot tartalmaz, "Modal felirattal."
// Első lépés, hogy elhelyezek rajta egy eventListener-t, ami a click eseményt figyeli.

let btnElements = document.querySelectorAll('.modal__openButton');
for (let i = 0; i < btnElements.length; i++) {
    // egy anonim fv-t hívok meg, akinek az event objektumot adom át 
    
    //Létrehoztam két osztályt a láthatóság módosítására:
    // a .modal--hide display:none-t állít be, a .modal--show display: flex-et az adott elementen. Mivel az egész modalt akarom megjeleníteni-eltűntetni, ezért a modal__background osztályú div-en fogom alkalmani.
    // A második lépés, hogy a click eseményre a modal--show osztály kerül a modal__background mellé, így jelenik meg a modal maga.
    // erre a https://www.kirupa.com/html5/setting_css_styles_using_javascript.htm oldalon találtam megoldást:

    btnElements[i].addEventListener('click', function (event) {
        let divElement = document.querySelector('.modal__background');
        console.log(divElement.className);
        divElement.className='modal__background modal--show'
        console.log(divElement.className);
    })
}
