// Theme Toggle Script
const themeToggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const currentTheme = localStorage.getItem("theme") || "dark";

// Set initial theme and icon
if (currentTheme === "light") {
  document.body.classList.add("light-theme");
  themeToggleButton.checked = true;
  themeIcon.textContent = "🌞";
} else {
  document.body.classList.remove("light-theme");
  themeToggleButton.checked = false;
  themeIcon.textContent = "🌙";
}

// Toggle theme on switch
themeToggleButton.addEventListener("click", () => {
  if (document.body.classList.contains("light-theme")) {
    document.body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark");
    themeIcon.textContent = "🌙";
  } else {
    document.body.classList.add("light-theme");
    localStorage.setItem("theme", "light");
    themeIcon.textContent = "🌞";
  }
});
