const toggle = document.getElementById("nav-toggle");
const links = document.getElementById("navbar-links");
const navbar = document.querySelector(".navbar");

function openMenu() {
  links.classList.add("is-open");
  toggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("nav-open");
}

function closeMenu() {
  links.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
}

/* Clicking the dropdown button */
toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = links.classList.contains("is-open");
  isOpen ? closeMenu() : openMenu();
})

/* Clicking outside the dropdown menu and the navbar */
document.addEventListener("click", (e) => {
  const isOpen = links.classList.contains("is-open");
  if (isOpen && !navbar.contains(e.target)) {
    closeMenu();
  }
});