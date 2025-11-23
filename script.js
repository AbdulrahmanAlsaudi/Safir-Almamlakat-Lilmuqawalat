// Sidebar open/close
const openBtn = document.getElementById('openSidebar');
const closeBtn = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function openSidebar() {
  sidebar.classList.add('show');
  overlay.classList.add('show');
  sidebar.setAttribute('aria-hidden', 'false');
  // Lock body scroll
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('show');
  overlay.classList.remove('show');
  sidebar.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

openBtn && openBtn.addEventListener('click', openSidebar);
closeBtn && closeBtn.addEventListener('click', closeSidebar);
overlay && overlay.addEventListener('click', closeSidebar);

// Close with ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSidebar();
});


  // لو كانت الصفحة صغيرة، أغلق الـ sidebar لو فتح
  closeSidebar();

