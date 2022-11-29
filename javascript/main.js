window.addEventListener('DOMContentLoaded', main);

/** Adds a start and flow to the functions. */
function main() {
    addEventListeners();
    showAccordionWorkDescription();
  }
  
  /** Opens the navigation when the burger menu is clicked.
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

  /** Toggles the CSS-class "open-header", which sets the header to 50% height. */
  function toggleMenu() {
    const header = document.querySelector('header');
    header.classList.toggle('open-header');
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
    workDescription.classList.toggle('toggle-description');
  }
