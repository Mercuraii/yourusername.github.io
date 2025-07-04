// document.addEventListener("DOMContentLoaded", () => {
//   const themeToggleButton = document.getElementById("theme-toggle");
//   const themeIcon = document.getElementById("theme-icon");

//   if (!themeToggleButton || !themeIcon) return;

//   // Apply saved theme from localStorage (default: dark)
//   const currentTheme = localStorage.getItem("theme") || "dark";

//   if (currentTheme === "light") {
//     document.body.classList.add("light-theme");
//     themeToggleButton.checked = true;
//     themeIcon.textContent = "☀️";
//   } else {
//     document.body.classList.remove("light-theme");
//     themeToggleButton.checked = false;
//     themeIcon.textContent = "🌙";
//   }

//   // Theme toggle click listener
//   themeToggleButton.addEventListener("click", () => {
//     const isLight = document.body.classList.toggle("light-theme");
//     localStorage.setItem("theme", isLight ? "light" : "dark");
//     themeIcon.textContent = isLight ? "☀️" : "🌙";
//   });

//   // Handle background video fade-in
//   const bg = document.querySelector(".bg-3d");

//   if (bg) {
// Initial opacity and transition settings
bg.style.opacity = "0";
bg.style.transition = "opacity 1s ease";
bg.style.willChange = "opacity";

// Fade-in logic once video is ready
const fadeIn = () => {
  bg.style.opacity = "1";
};

// Video might already be ready
if (bg.readyState >= 3) {
  fadeIn();
} else {
  bg.addEventListener("canplay", fadeIn);
}
