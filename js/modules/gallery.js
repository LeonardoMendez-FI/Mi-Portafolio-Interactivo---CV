function setupGallery() {
  document.querySelectorAll('.view-btn').forEach(btn => btn.onclick = () => document.getElementById(btn.dataset.target)?.classList.toggle('show'));
  document.querySelectorAll('.close-gallery').forEach(btn => btn.onclick = () => btn.closest('.image-gallery')?.classList.remove('show'));
}
window.setupGallery = setupGallery;
