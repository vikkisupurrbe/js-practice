document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  // Not a dropdown button but inside the dropdown menu
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  // Clicking a dropdown button
  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  // Close all the other dropdowns that are not the one being clicked
  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  })
})