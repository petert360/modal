'use strict';
// Az oldal alaphelyzetben egyetlen gombot tartalmaz, "Modal felirattal."
// Első lépés, hogy elhelyezek rajta egy eventListener-t, ami a click eseményt figyeli.
// Majd:
//Létrehoztam két osztályt a láthatóság módosítására:
// a .modal--hide display:none-t állít be, a .modal--show display: flex-et az adott elementen. Mivel az egész modalt akarom megjeleníteni-eltűntetni, ezért a modal__background osztályú div-en fogom alkalmani.
// A második lépés, hogy a click eseményre a modal--show osztály kerül a modal__background mellé, így jelenik meg a modal maga.
// erre a https://www.kirupa.com/html5/setting_css_styles_using_javascript.htm oldalon találtam megoldást:
// "One way to accomplish this involves setting an element's className property, an approach we saw earlier."
// a .modal--show animation: fadeIn ease .3s segítségével mutatja meg a modal-t

let btnElement = document.querySelector('.modal__openButton');
btnElement.addEventListener('click', function (event) {
    //    console.log(event.target.textContent);
    let divElement = document.querySelector('.modal__background');
    //    console.log(divElement.className);
    divElement.className = 'modal__background modal--show'
    //    console.log(divElement.className);
})

// követkző lépés, hogy ha a háttérre kattintok, akkor a modal elhalványuljon.
// első próbálkozás, hogy a .modal__background osztályú div-re click eseményfigyelést teszek.
// a probléma, hogy a .modal__background-ot bárhol kattintva elérem, így ez nem lesz jó megoldás.
/*let backgroundElement = document.querySelector('.modal__background');
backgroundElement.addEventListener('click', function (event) {
    console.log('click');
})*/
//Új próbálkozás: windowOnClick - nem jó
/*let modal = document.querySelector('.modal__background');
function windowOnClick(event) {
    if (event.target === modal) {
        console.log('hattér');
    }
}*/
// uj próba: https://webdesign.tutsplus.com/tutorials/how-to-build-flexible-modal-dialogs-with-html-css-and-javascript--cms-33500
// ez a megoldás működik
document.addEventListener('click', e => {
    if (e.target == document.querySelector('.modal__background')) {
        console.log('háttér');
    }
})