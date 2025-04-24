// Theme Toggle Script
const themeToggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const currentTheme = localStorage.getItem("theme") || "dark";

// Initialize theme on load
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

// 3D Moving Background Effect
const bg = document.querySelector(".bg-3d");
let lastMove = Date.now();
let t = 0;

// Mouse-driven tilt
document.addEventListener("mousemove", (e) => {
  if (!bg) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 8; // max ±4°
  const y = (e.clientY / window.innerHeight - 0.5) * -8;
  bg.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  lastMove = Date.now();
});

// Gentle auto-sway when idle
function sway() {
  if (!bg) return;
  t += 0.005;
  if (Date.now() - lastMove > 2000) {
    const x = Math.sin(t) * 1; // ±1°
    const y = Math.cos(t) * 1;
    bg.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  }
  requestAnimationFrame(sway);
}
sway();
