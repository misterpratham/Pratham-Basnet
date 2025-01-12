// Function to toggle the dropdown visibility
function toggleDropdown() {
  const dropdown = document.getElementById('dropdown-menu');
  dropdown.classList.toggle('hidden');
}

// Close the dropdown if the user clicks outside of the menu
window.addEventListener('click', function(event) {
  const menuButton = document.getElementById('menu-button');
  const dropdown = document.getElementById('dropdown-menu');
  if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add('hidden');
  }
});
