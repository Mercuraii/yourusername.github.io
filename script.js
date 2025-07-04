document.addEventListener("DOMContentLoaded", () => {
  // -------- Theme Toggle Logic --------
  const themeToggleButton = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  if (themeToggleButton && themeIcon) {
    // Apply saved theme from localStorage (default: dark)
    const currentTheme = localStorage.getItem("theme") || "dark";

    if (currentTheme === "light") {
      document.body.classList.add("light-theme");
      themeToggleButton.checked = true;
      themeIcon.textContent = "☀️";
    } else {
      document.body.classList.remove("light-theme");
      themeToggleButton.checked = false;
      themeIcon.textContent = "🌙";
    }

    // Theme toggle click listener
    themeToggleButton.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light-theme");
      localStorage.setItem("theme", isLight ? "light" : "dark");
      themeIcon.textContent = isLight ? "☀️" : "🌙";
    });
  }

  // -------- Background Video Fade-in --------
  const bg = document.querySelector(".bg-3d");
  if (bg) {
    bg.style.opacity = "0";
    bg.style.transition = "opacity 1s ease";
    bg.style.willChange = "opacity";

    const fadeIn = () => {
      bg.style.opacity = "1";
    };

    if (bg.readyState >= 3) {
      fadeIn();
    } else {
      bg.addEventListener("canplay", fadeIn);
    }
  }

  // -------- Carousel & Overlay Logic --------
  const overlay = document.getElementById("overlay");
  const overlayImg = document.getElementById("overlay-img");
  const overlayCaption = document.getElementById("overlay-caption");
  const images = document.querySelectorAll(".image-row img");
  const carousel = document.getElementById("carousel");
  const title = document.querySelector("h1");

  if (
    !carousel ||
    !overlay ||
    !overlayImg ||
    !overlayCaption ||
    images.length === 0 ||
    !title
  )
    return;

  let index = 0;
  const totalSlides = document.querySelectorAll(".pyramid-slide").length || 5;

  function hideCurrentCaption() {
    const captions = document.querySelectorAll(".pyramid-slide p");
    captions.forEach((cap, i) => {
      if (i === index) {
        cap.classList.add("caption-hidden");
      } else {
        cap.classList.remove("caption-hidden");
      }
    });
  }

  hideCurrentCaption();

  let carouselInterval = setInterval(() => {
    index = (index + 1) % totalSlides;
    carousel.style.transform = `translateX(-${index * 100}%)`;
    hideCurrentCaption();
  }, 3000);

  function pauseCarousel() {
    clearInterval(carouselInterval);
  }

  function resumeCarousel() {
    carouselInterval = setInterval(() => {
      index = (index + 1) % totalSlides;
      carousel.style.transform = `translateX(-${index * 100}%)`;
      hideCurrentCaption();
    }, 2000);
  }

  images.forEach((img) => {
    img.addEventListener("click", () => {
      const naturalWidth = img.naturalWidth;
      const naturalHeight = img.naturalHeight;

      overlayImg.src = img.src;

      const slide = img.closest(".pyramid-slide");
      overlayCaption.textContent = slide.querySelector("p").textContent;

      let newWidth = naturalWidth * 5;
      let newHeight = naturalHeight * 5;

      const maxWidth = window.innerWidth * 0.9;
      const maxHeight = window.innerHeight * 0.9;

      if (newWidth > maxWidth) {
        const scale = maxWidth / newWidth;
        newWidth = maxWidth;
        newHeight = newHeight * scale;
      }

      if (newHeight > maxHeight) {
        const scale = maxHeight / newHeight;
        newHeight = maxHeight;
        newWidth = newWidth * scale;
      }

      overlayImg.style.width = `${newWidth}px`;
      overlayImg.style.height = `${newHeight}px`;

      overlay.style.display = "flex";
      pauseCarousel();

      hideCurrentCaption();

      title.style.display = "none";
    });
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    overlayImg.src = "";
    overlayImg.style.width = "";
    overlayImg.style.height = "";
    overlayCaption.textContent = "";

    resumeCarousel();

    const captions = document.querySelectorAll(".pyramid-slide p");
    captions.forEach((cap) => cap.classList.remove("caption-hidden"));

    title.style.display = "";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.style.display === "flex") {
      overlay.style.display = "none";
      overlayImg.src = "";
      overlayImg.style.width = "";
      overlayImg.style.height = "";
      overlayCaption.textContent = "";

      resumeCarousel();

      const captions = document.querySelectorAll(".pyramid-slide p");
      captions.forEach((cap) => cap.classList.remove("caption-hidden"));

      title.style.display = "";
    }
  });
});
