'use strict';
// Az oldal alaphelyzetben egyetlen gombot tartalmaz, "Modal felirattal."
// Első lépés, hogy elhelyezek rajta egy eventListener-t, ami a click eseményt figyeli.

let btnElements = document.querySelectorAll('.modal__open');
for (let i = 0; i < btnElements.length; i++) {
    // egy anonim fv-t hívok meg, akinek az event objektumot adom át 
    btnElements[i].addEventListener('click', function (event) {
        console.log(event.target.textContent);
    })
}

// Eddig a click eseményre csak egy consol log jelenik meg.
// A második lépés, hogy a click eseményre egy css tulajdonság változzon meg.