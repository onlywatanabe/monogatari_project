document.addEventListener("DOMContentLoaded", () => {
  const isLight =
    document.documentElement.getAttribute("data-theme") === "light";

  if (isLight) {
    const images = ["shinobu1.png", "shinobu2.png", "shinobu3.png"];
    const visualEl = document.getElementById("shinobu-visual");

    if (visualEl) {
      let currentIndex = Math.floor(Math.random() * images.length);
      visualEl.src = images[currentIndex];

      setInterval(() => {
        visualEl.style.opacity = 0;
        setTimeout(() => {
          let nextIndex;
          do {
            nextIndex = Math.floor(Math.random() * images.length);
          } while (nextIndex === currentIndex);

          currentIndex = nextIndex;
          visualEl.src = images[currentIndex];
          visualEl.style.opacity = 1;
        }, 500);
      }, 120000);
    }
  }
});
