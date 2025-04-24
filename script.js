// Theme Toggle Script
const themeToggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Check for theme in localStorage or set to dark by default
const currentTheme = localStorage.getItem("theme") || "dark";

// Apply the default theme immediately
if (currentTheme === "light") {
  document.body.classList.add("light-theme");
  themeToggleButton.checked = true;
  themeIcon.textContent = "☀️";
} else {
  document.body.classList.remove("light-theme");
  themeToggleButton.checked = false;
  themeIcon.textContent = "🌙";
}

// Toggle theme on click
themeToggleButton.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-theme");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  themeIcon.textContent = isLight ? "☀️" : "🌙";
});

// Fade-in video background on page load
window.addEventListener("load", () => {
  const bg = document.querySelector(".bg-3d");
  if (bg) {
    bg.style.opacity = 1; // Fade in the video
  }
});
