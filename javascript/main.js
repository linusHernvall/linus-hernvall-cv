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

// function showDropdownExperience() {
//     const dropdownExperience = document.querySelectorAll('.experience p');
//     for (const p of dropdownExperience){
//         dropdownExperience.addEventListener('p');

//     }
// }


//   /** Displays former work experience. */
  function showDropdownExperience() {
      const dropdownExperience = document.getElementById('company-name');
      dropdownExperience.onclick = toggleDropdown;
  }

  function toggleDropdown() {
      const workExperience = document.getElementById('dropdown');
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