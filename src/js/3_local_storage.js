'use strict';

function saveUsers() {
    localStorage.setItem('array', JSON.stringify(people));
    
}

function recoverUsers() {//cómo se traduciría a lenguaje humano: si el array people que muestra la página al recargar es distinto del array guardado en el local storage, píntame el array del local storage a traves del botón
    
    let localArray = JSON.parse(localStorage.getItem('array'));
    console.log(localArray);
    if(localArray !== people)
        people = localArray;
        renderPeople();
    
}


btn.addEventListener("click", saveUsers);
btn1.addEventListener("click", recoverUsers);
