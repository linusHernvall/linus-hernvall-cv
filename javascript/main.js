window.addEventListener('DOMContentLoaded', main);

/** Adds a start and flow to the functions. */
function main() {
  addEventListeners();
  showAccordionWorkDescription();
}

/** 
 * Opens the navigation when the burger menu is clicked.
 * Then menu toggles when any of the list items are clicked.
 */
function addEventListeners() {
  const burgerMenuButton = document.getElementById('burger-menu');
  burgerMenuButton.onclick = toggleMenu;

  const burgerMenuList = document.querySelectorAll('header nav li');
  for (const menuListItem of burgerMenuList) {
    menuListItem.addEventListener('click', toggleMenu);
  }
}

/** 
 * If the desktop width is less than the CSS-custom property "--min-desktop-width" (1000px) the 
 * CSS-class "open-header" toggles, which sets the header to 50% height.
 * 
 * Otherwise the "open-header" remains hiddden when the header is clicked.
 */
function toggleMenu() {
  const root = document.querySelector(':root');
  const rootStyle = getComputedStyle(root);
  const minDesktopWidth = parseInt(rootStyle.getPropertyValue('--min-desktop-width'));

  if (window.innerWidth < minDesktopWidth) {
    const header = document.querySelector('header');
    header.classList.toggle('open-header');
  }

}

/** Displays former work descriptions. */
function showAccordionWorkDescription() {
  const sections = document.querySelectorAll('.experience-block section');
  for (const section of sections) {
    section.addEventListener('click', toggleAccordion);
  }
}

/**
 * @param {MouseEvent} event
*/
function toggleAccordion(event) {
  const section = event.currentTarget;
  const workDescription = section.querySelector('#text-description');
  workDescription.classList.toggle('content-active');
}
