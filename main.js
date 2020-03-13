// const hamburger = document.querySelector('#hamburger');
 const navmenu = document.querySelector('.navMenu');
const  intro = document.querySelector('.overlay-intro');
// hamburger.addEventListener('click',() => {
// 	navmenu.classList.toggle('show');
	
// });

function myFunction(x) {
  x.classList.toggle("change");
    intro.classList.toggle('overlay');
    navMenu.classList.toggle('show');
}