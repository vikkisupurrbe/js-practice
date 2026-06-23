document.getElementById("submit-btn").addEventListener("click", () => {
  const firstName = document.getElementById("first-name").value;
  const firstNameField = document.getElementById("first-name-group");
  const firstNameWarning = document.createElement("span");
  firstNameWarning.className = "warning";
  if (firstName.length === 0 || firstName.trim() === "") {
    firstNameWarning.innerHTML = `First Name cannot be empty`;
    firstNameField.appendChild(firstNameWarning);
  }
})