const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

//Attaches a click event listener to the toggle element. 
//When the element is clicked, it executes an arrow function that toggles the presence of the active class on the nav element using the classList.toggle() method.
toggle.addEventListener('click', () => nav.classList.toggle('active'))