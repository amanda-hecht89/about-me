// import functions

// grab DOM elements
const showButton = document.getElementById('anibutton');
const animal = document.getElementById('animalDev');
console.log(showButton, animal);
// set event listeners 
showButton.addEventListener('click', ()=> {
    animal.classList.remove('hidden');
});
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
