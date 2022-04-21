// import functions

// grab DOM elements
const showButton = document.getElementById('anibutton');
const animal = document.getElementById('animalDiv');
console.log(showButton, animal);
// set event listeners 
showButton.addEventListener('click', ()=> {
    animal.classList.toggle('hidden');
});
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
