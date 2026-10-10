const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}
async function copyText(value, success) {
  if (!value || value.includes("ADD_YOUR_")) {
    showToast("Añade primero los datos oficiales del token en index.html.");
    return;
  }
  try {
    await navigator.clipboard.writeText(value);
    showToast(success);
  } catch (e) {
    showToast("No se pudo copiar automáticamente. Copia el dato desde la página.");
  }
}
document.getElementById("copyMint").addEventListener("click", () => copyText(document.getElementById("mintAddress").textContent.trim(), "Mint address copiada."));
document.getElementById("copyTicker").addEventListener("click", () => copyText("$FLUFFY", "Ticker copiado."));
document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("mobile-open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("mobile-open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// Replace each # with your real community/profile URL before launch.
document.querySelectorAll(".social-link").forEach(link => {
  link.addEventListener("click", event => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      showToast("Añade el enlace oficial de esta red en index.html.");
    }
  });
});