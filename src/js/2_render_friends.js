'use strict';

function addEventListeners() {
    const liPeople = document.querySelectorAll(".js_li");
    for(const person of liPeople) {
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
        event.currentTarget.classList.toggle("selected"); 
        console.log(people);
    }

