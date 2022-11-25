'use strict';

function saveUsers() {
    localStorage.setItem('array', JSON.stringify(people));
    
}

function recoverUsers() {
    let localArray = JSON.parse(localStorage.getItem('array'));
    console.log(localArray);
    if(localArray !== people) {
        people = localArray;
        renderPeople();
        
    }
}

btn.addEventListener("click", saveUsers);
btn1.addEventListener("click", recoverUsers);
