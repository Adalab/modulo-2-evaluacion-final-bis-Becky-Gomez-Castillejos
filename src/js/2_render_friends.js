'use strict';

function addEventListeners() {
    for(const person of people) {
        person.addEventListener("click", handleClickCharacters);
    }
}

function handleClickCharacters(event) {
    console.log("hola");
    //let arrayElement = event.currentTarget.id;
    let selectedProfile = people.find((eachProfile) => eachProfile.id === event.currentTarget.id);
    console.log(selectedProfile);
        if(selectedProfile.isFriend) {
            selectedProfile.isFriend = true;
            selectedProfile.classList.add("selected");
        } else {
            selectedProfile.classList.remove("selected");
        }
       
    }
    


    




    

    /*if (charactersInFavouritesIndex === -1) {
        favouriteCharacters.push(selectedCharacter);

        localStorage.setItem('favourites', JSON.stringify(favouriteCharacters));
    }
    else {
        favouriteCharacters.splice(charactersInFavouritesIndex, 1);
        localStorage.setItem('favourites', JSON.stringify(favouriteCharacters));
    }

    addFavourites();*/


