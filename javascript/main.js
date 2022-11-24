window.addEventListener('DOMContentLoaded', main);

function main() {
    addEventListeners();
    showAccordionWorkDescription();
  }
  
  function addEventListeners() {
    const burgerMenuButton = document.getElementById('burger-menu');
    burgerMenuButton.onclick = toggleMenu;
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







// let company = document.getElementById('company-name');

// company.addEventListener('click', function () {
//     let dropdown = document.getElementById('dropdown');
//     if (dropdown.classList.contains('work-info')) {
//         dropdown.classList.remove('work-info');
//     } else {
//         dropdown.classList.add('dropdown');
//     }
// });


// function showDropdownExperience() {
//     const dropdownExperience = document.querySelectorAll('.experience p');
//     for (const p of dropdownExperience){
//         dropdownExperience.addEventListener('p');

//     }
// }