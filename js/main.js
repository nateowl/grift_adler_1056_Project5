// Js File

const mobNav = document.querySelector('#hamburger'),
navBlock = document.querySelector('.mob-nav');


mobNav.addEventListener('click', togglenav)

// Toggle Navigation
function togglenav() {

   // Toggles class
   navBlock.classList.toggle('mob-nav__hidden');

   // Change src of Hamburger menu to X btn
   if (!navBlock.classList.contains('mob-nav__hidden')) {
      mobNav.src = 'images/exit-menu.svg';
   } else {
      mobNav.src = 'images/hamburger-menu.svg'
   }
}
