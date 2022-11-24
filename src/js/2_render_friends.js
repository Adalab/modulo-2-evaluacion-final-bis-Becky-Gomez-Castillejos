'use strict';

function addEventListeners() {
    const liPeople = document.querySelectorAll(".js_li");
    for(const person of liPeople) {//por qué no vale people aquí??: porque people es un array del API y no se puede clicar en él, sobre lo que hago click es el elemento HTML (el cual está metido en un bucle con map).
        person.addEventListener("click", handleClickCharacters);
    }
}

function handleClickCharacters(event) {
    console.log("hola");
    let selectedProfile = people.find((eachProfile) => eachProfile.id === event.currentTarget.id);
    console.log(event.currentTarget);
        if(selectedProfile.isFriend === false) {
            selectedProfile.isFriend = true;
            
        } else {
            selectedProfile.isFriend = false;
        }
        event.currentTarget.classList.toggle("selected");//event.currentTarget se refiere al elemento clickado (al cual se le pueden añadir clases css) y el selectedProfile al objeto en sí. 
        console.log(people);
    }



