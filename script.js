// === Botón de música (Alternativa MP3) ===
const musicButton = document.getElementById("musicButton");
const musicPlayer = document.getElementById("musicPlayer");

musicButton.addEventListener("click", () => {
    // 1. Intenta reproducir el audio
    musicPlayer.play()
        .then(() => {
            // Si la reproducción es exitosa
            musicButton.textContent = "🎶 Reproduciendo...";
            musicButton.disabled = true;
        })
        .catch(error => {
            // Si falla (por autoplay o error de carga)
            console.error("Fallo la reproducción:", error);
            alert("No se pudo reproducir el audio automáticamente. Inténtalo de nuevo.");
            musicButton.textContent = "⚠️ Error al reproducir";
        });
});

// === Contador regresivo (Mantener el resto de tu código JS) ===
// ...

// === Contador regresivo (mantener igual) ===
// ...


// === Contador regresivo (Mantener el resto de tu código JS) ===
const countdown = () => {
  const eventDate = new Date("2026-01-23T00:00:00").getTime();
  const now = new Date().getTime();
  const diff = eventDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
};

setInterval(countdown, 1000);
