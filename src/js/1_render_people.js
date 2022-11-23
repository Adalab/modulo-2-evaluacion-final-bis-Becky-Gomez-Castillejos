'use strict';

fetch('https://randomuser.me/api/?results=10')
    
    .then((response) => response.json())
    .then((data) => {
        people = data.results.map((eachUser) => {
            const object = {
                id: eachUser.id.value + eachUser.id.name, 
                picture: eachUser.picture.medium,
                name: eachUser.name.first,
                location: eachUser.location.city,
                userName: eachUser.login.username,
                isFriend: false 
            }
            
            return object;
        });
        console.log(people);
        renderPeople();
        
    });
    

/*const savedFavourites = JSON.parse(localStorage.getItem('favourites'));
console.log(savedFavourites);
if (savedFavourites !== null) {
    favouriteCharacters = savedFavourites;
    addFavourites();
}*/


//cuando se quiere pintar un elemento se puede poner el la contante del elemento en vacío y luego rellenarlo
function renderPeople() { 
    list.innerHTML = '';
    for (const listEl of people) {
        list.innerHTML += `<li class= "js_li" id="${listEl.id}"><article>
        <img src=${listEl.picture} alt="foto personaje" class="photo" />
        <p>${listEl.name}</p>
        <p>${listEl.location}</p>
        <p>${listEl.userName}</p>
        </article></li>`;
    }
    addEventListeners(); //por qué se llama esta función en renderPeople?


    /*const liList = document.querySelectorAll(".js_li");
    for (const liEl of liList) {
        liEl.addEventListener("click", handleClickCharacters);
    }*/
}
