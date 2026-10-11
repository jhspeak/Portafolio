// JHSPEAK portfolio — edit the values in CONFIG to personalize your site.
const CONFIG = {
  // Put an MP3 file in assets/ (for example assets/my-song.mp3) and set this path:
  TRACK_URL: "",
  TRACK_TITLE: "Add your track",
  TRACK_ARTIST: "Your favorite artist goes here"
};

const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");
const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const musicPanel = document.querySelector(".music-panel");
const progressFill = document.getElementById("progressFill");
const trackTime = document.getElementById("trackTime");
const playState = document.getElementById("playState");

function enterSite() {
  intro.classList.add("hidden");
  document.body.classList.add("entered");
  try { sessionStorage.setItem("jhspeakEntered", "1"); } catch (_) {}
}
enterBtn.addEventListener("click", enterSite);
try {
  if (sessionStorage.getItem("jhspeakEntered") === "1") intro.classList.add("hidden");
} catch (_) {}

document.getElementById("year").textContent = new Date().getFullYear();

// A local-device counter only. It is not a public, global visitor count.
const visitKey = "jhspeakLocalVisits";
let visits = 1;
try {
  visits = Number(localStorage.getItem(visitKey) || 0) + 1;
  localStorage.setItem(visitKey, String(visits));
} catch (_) {}
document.getElementById("visitCount").textContent = visits.toLocaleString("es-ES");

document.getElementById("trackName").textContent = CONFIG.TRACK_TITLE;
document.getElementById("trackArtist").textContent = CONFIG.TRACK_ARTIST;
if (CONFIG.TRACK_URL.trim()) audio.src = CONFIG.TRACK_URL;

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "--:--";
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
}
playBtn.addEventListener("click", async () => {
  if (!audio.src) {
    playState.textContent = "ADD TRACK URL IN script.js";
    return;
  }
  try {
    if (audio.paused) {
      await audio.play();
      playBtn.textContent = "Ⅱ";
      playState.textContent = "NOW PLAYING";
      musicPanel.classList.add("playing");
    } else {
      audio.pause();
      playBtn.textContent = "▶";
      playState.textContent = "PAUSED";
      musicPanel.classList.remove("playing");
    }
  } catch (_) {
    playState.textContent = "CAN'T PLAY THIS FILE";
  }
});
audio.addEventListener("timeupdate", () => {
  const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  progressFill.style.width = `${pct}%`;
  trackTime.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
});
audio.addEventListener("ended", () => {
  playBtn.textContent = "▶";
  playState.textContent = "PLAYBACK ENDED";
  musicPanel.classList.remove("playing");
});

// Reveal-on-scroll animation, with fallback for browsers lacking IntersectionObserver.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("visible"));
}

// Gentle pointer parallax on desktop only.
const visual = document.querySelector(".hero-visual");
if (visual && window.matchMedia("(pointer:fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  visual.addEventListener("mousemove", (event) => {
    const rect = visual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const card = visual.querySelector(".profile-card");
    if (card) card.style.transform = `rotate(${2 + x * 3}deg) translate(${x * 7}px, ${y * 7}px)`;
  });
  visual.addEventListener("mouseleave", () => {
    const card = visual.querySelector(".profile-card");
    if (card) card.style.transform = "";
  });
}
