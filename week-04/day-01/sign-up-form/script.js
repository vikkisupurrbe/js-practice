// Helper function, show error on a field
function showError(fieldId, groupId, message) {
  const group = document.getElementById(groupId);

  // remove existing error to prevent stacking
  const existing = group.querySelector(".warning");
  if (existing) existing.remove();

  const warning = document.createElement("span");
  warning.className = "warning";
  warning.textContent = message;
  group.appendChild(warning);
  group.classList.add("error"); // Error border styling
}

// clear error on a field
function clearError(groupId) {
  const group = document.getElementById(groupId);
  const existing = group.querySelector(".warning");
  if (existing) existing.remove();
  group.classList.remove("error");
}

// validate email format
function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

// On submit, validate all fields
document.getElementById("submit-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!firstName) showError("first-name", "first-name-group", "First Name cannot be empty");
  if (!lastName) showError("last-name", "last-name-group", "Last Name cannot be empty");
  if (!email) {
    showError("email", "email-group", "Email cannot be empty");
  } else if (!isValidEmail(email)) {
    showError("email", "email-group", "Looks like this is not an email");
  }
  if (!password) showError("password", "password-group", "Password cannot be empty");
})

console.log(document.getElementById("password")); // should log the input element, not null

// On input, clear error as user types
["first-name", "last-name", "email", "password"].forEach(id => {
  document.getElementById(id).addEventListener("input", () => {
    clearError(`${id}-group`);
  });
});