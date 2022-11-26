window.addEventListener('DOMContentLoaded', main);

function main() {
    addEventListeners();
    showAccordionWorkDescription();
  }
  
  function addEventListeners() {
    const burgerMenuButton = document.getElementById('burger-menu');
    burgerMenuButton.onclick = toggleMenu;

    const burgerMenuList = document.querySelectorAll('header nav li');
    for (const li of burgerMenuList) {
      li.addEventListener('click', toggleMenu);
    }
  }

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
