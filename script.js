// Theme Toggle Script
const themeToggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const currentTheme = localStorage.getItem("theme") || "dark";

// Apply initial theme and icon
document.body.classList.toggle("light-theme", currentTheme === "light");
themeToggleButton.checked = currentTheme === "light";
themeIcon.textContent = currentTheme === "light" ? "🌞" : "🌙";

// Toggle theme when clicking the switch
themeToggleButton.addEventListener("change", () => {
  const isLight = themeToggleButton.checked;
  document.body.classList.toggle("light-theme", isLight);
  localStorage.setItem("theme", isLight ? "light" : "dark");
  themeIcon.textContent = isLight ? "🌞" : "🌙";
});
