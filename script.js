// Theme Toggle Script
const themeToggleButton = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme") || "dark";

// Set the initial theme based on localStorage or default to dark
if (currentTheme === "light") {
  document.body.classList.add("light-theme");
  themeToggleButton.textContent = "🌞"; // Change the icon to sun
} else {
  document.body.classList.remove("light-theme");
  themeToggleButton.textContent = "🌙"; // Change the icon to moon
}

// Toggle theme on button click
themeToggleButton.addEventListener("click", () => {
  if (document.body.classList.contains("light-theme")) {
    document.body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark");
    themeToggleButton.textContent = "🌙"; // Moon icon for dark theme
  } else {
    document.body.classList.add("light-theme");
    localStorage.setItem("theme", "light");
    themeToggleButton.textContent = "🌞"; // Sun icon for light theme
  }
});
