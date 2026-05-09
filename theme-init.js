(function () {
  try {
    const saved = localStorage.getItem("monogatari_start_config");
    let config = {};

    if (saved) {
      config = JSON.parse(saved);
    }

    const path = window.location.pathname.split("/").pop().replace(".html", "");
    const savedTheme = config.activeTheme;

    const VALID_THEMES = new Set([
      "hanekawa",
      "black_hanekawa",
      "hitagi",
      "nadeko",
      "ononoki",
      "shinobu",
      "tsukihi",
      "karen",
      "mayoi",
      "kanbaru",
      "sodachi",
      "ougi",
    ]);

    if (savedTheme && VALID_THEMES.has(savedTheme)) {
      if (path !== savedTheme) {
        window.location.replace(savedTheme + ".html");
        return;
      }
    } else if (!path || !VALID_THEMES.has(path)) {
      window.location.replace("hanekawa.html");
      return;
    }

    const theme = path || savedTheme || "hanekawa";
    const modeKey = theme + "Mode";
    const mode = config[modeKey] || "auto";

    const hour = new Date().getHours();
    const isNight = hour >= 19 || hour < 6;

    const htmlEl = document.documentElement;

    if (theme === "mayoi" || theme === "ougi") {
      if (mode === "dark" || (mode === "auto" && isNight)) {
        htmlEl.setAttribute("data-theme", "dark");
      } else {
        htmlEl.removeAttribute("data-theme");
      }
    } else if (
      ["tsukihi", "karen", "kanbaru", "sodachi", "shinobu"].includes(theme)
    ) {
      const finalMode = mode === "auto" ? (isNight ? "dark" : "light") : mode;
      htmlEl.setAttribute("data-theme", finalMode);
    }
  } catch (e) {}
})();
