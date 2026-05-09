let activeTheme = "hanekawa";
try {
  const saved = localStorage.getItem("monogatari_start_config");
  if (saved) {
    const parsed = JSON.parse(saved);
    if (parsed && parsed.activeTheme) {
      activeTheme = parsed.activeTheme;
    }
  }
} catch (e) {
  console.error("Config load failed. Defaulting to Hanekawa.");
}
window.location.replace(activeTheme + ".html");
