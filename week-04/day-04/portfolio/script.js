const toggle = document.getElementById("nav-toggle");
const links = document.getElementById("navbar-links");
const navbar = document.querySelector(".navbar");
const themeToggle =  document.getElementById("theme-toggle");

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

/* Disable transitions during resize */
let resizeTimer;
window.addEventListener("resize", () => {
  document.documentElement.classList.add("is-resizing");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.documentElement.classList.remove("is-resizing");
  }, 200);
});

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

/* Theme toggle */
themeToggle.addEventListener("click", () => {
  const html = document.documentElement;
  const isDark = html.dataset.theme === "dark";
  html.dataset.theme = isDark ? "light" : "dark";
  themeToggle.textContent = isDark ? "🌙" : "☀️";
})

