// Flash Overlay System
const flashOverlay = document.getElementById("flash-overlay");

window.addEventListener("load", () => {
  setTimeout(() => {
    flashOverlay.style.opacity = "0";
  }, 300);
});

const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && searchInput.value.trim()) {
      const query = searchInput.value.trim();
      flashOverlay.style.opacity = "1";
      setTimeout(() => {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      }, 150);
    }
  });
}

// Settings Button Listener
const settingsBtn = document.getElementById("settings-btn");
if (settingsBtn) {
  settingsBtn.addEventListener("click", () => {
    if (typeof window.openSettings === "function") {
      window.openSettings();
    }
  });
}

// Time & Date
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");

  const clockEl = document.getElementById("clock");
  const dateEl = document.getElementById("date");

  if (clockEl) clockEl.textContent = `${hours}:${minutes}`;
  if (dateEl) dateEl.textContent = `${year}.${month}.${day}`;
}
setInterval(updateTime, 1000);
updateTime();

// Weather
const wxIcons = {
  sun: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  cloud: `<svg viewBox="0 0 24 24"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  rain: `<svg viewBox="0 0 24 24"><line x1="16" y1="13" x2="16" y2="21"/><line x1="8" y1="13" x2="8" y2="21"/><line x1="12" y1="15" x2="12" y2="23"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></svg>`,
  snow: `<svg viewBox="0 0 24 24"><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/><path d="m20 16-4-4 4-4"/><path d="m4 8 4 4-4 4"/><path d="m16 4-4 4-4-4"/><path d="m8 20 4-4 4 4"/></svg>`,
  thunder: `<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
};

function getIcon(code, isDay) {
  if (code === 0) return isDay ? wxIcons.sun : wxIcons.moon;
  if (code >= 1 && code <= 3) return wxIcons.cloud;
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82))
    return wxIcons.rain;
  if (code >= 71 && code <= 86) return wxIcons.snow;
  if (code >= 95) return wxIcons.thunder;
  return wxIcons.cloud;
}

async function loadWeather() {
  const wxTemp = document.getElementById("wx-temp");
  const wxIcon = document.getElementById("wx-icon");
  if (!wxTemp || !wxIcon) return;

  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=43.654&longitude=-79.383&current=temperature_2m,weather_code,is_day&timezone=auto`,
    );
    const data = await res.json();
    const temp = Math.round(data.current.temperature_2m);
    const code = data.current.weather_code;
    const isDay = data.current.is_day === 1;

    wxTemp.textContent = `${temp}°C`;
    wxIcon.innerHTML = getIcon(code, isDay);
  } catch (e) {
    wxTemp.textContent = "---";
    wxIcon.innerHTML = wxIcons.cloud;
  }
}
loadWeather();
