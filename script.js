const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    menuToggle.textContent = isOpen ? '×' : '☰';
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
    menuToggle.textContent = '☰';
  }));
}

const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}
async function copyText(value, successMessage) {
  try {
    await navigator.clipboard.writeText(value);
    showToast(successMessage);
  } catch {
    showToast('No se pudo copiar automáticamente. Selecciona el texto y cópialo.');
  }
}
const tickerButton = document.getElementById('copyTicker');
if (tickerButton) tickerButton.addEventListener('click', () => copyText('$FLUFFY', 'Ticker copiado: $FLUFFY'));
const mintButton = document.getElementById('copyMint');
if (mintButton) mintButton.addEventListener('click', () => {
  const mint = document.getElementById('mintAddress')?.textContent.trim() || '';
  if (!mint || mint.includes('ADD_OFFICIAL')) {
    showToast('Añade la dirección oficial del token antes de copiarla.');
    return;
  }
  copyText(mint, 'Dirección del token copiada.');
});
