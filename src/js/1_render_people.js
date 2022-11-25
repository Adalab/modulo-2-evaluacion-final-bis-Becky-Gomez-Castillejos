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
    
//cuando se quiere pintar un elemento se puede poner el la contante del elemento en vacío y luego rellenarlo
function renderPeople() { 
    list.innerHTML = '';
    const peopleMap = people.map((eachPerson) => {
        if(eachPerson.isFriend === true) {
            return `<li class= "js_li selected" id="${eachPerson.id}"><article>
            <img src=${eachPerson.picture} alt="foto personaje" class="photo" />
            <p>${eachPerson.name}</p>
            <p>${eachPerson.location}</p>
            <p>${eachPerson.userName}</p>
            </article></li>`;
        } else {
            return `<li class= "js_li" id="${eachPerson.id}"><article>
            <img src=${eachPerson.picture} alt="foto personaje" class="photo" />
            <p>${eachPerson.name}</p>
            <p>${eachPerson.location}</p>
            <p>${eachPerson.userName}</p>
            </article></li>`;
        }
    })
    console.log(peopleMap);
    for (const listEl of peopleMap) {
        list.innerHTML += listEl;
        
    }

    addEventListeners();  

}
