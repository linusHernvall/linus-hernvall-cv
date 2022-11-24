window.addEventListener('DOMContentLoaded', main);

function main() {
    addEventListeners();
    showDropdownExperience();
  }
  
  function addEventListeners() {
    const burgerMenuButton = document.getElementById('burger-menu');
    burgerMenuButton.onclick = toggleMenu;
  }
  
  function toggleMenu() {
    const header = document.querySelector('header');
    header.classList.toggle('open-header');
  }

//   /** Displays former work experience. */
  function showDropdownExperience() {
    const sections = document.querySelectorAll('.experience-block section');
    for (const section of sections) {
      section.addEventListener('click', toggleDropdown);
    }
  }

  /**
   * @param {MouseEvent} event
  */
  function toggleDropdown(event) {
    const section = event.currentTarget;
    const workExperience = section.querySelector('#dropdown');
    workExperience.classList.toggle('open-experience');
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