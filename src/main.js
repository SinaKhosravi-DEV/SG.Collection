function changeImage(el) {
  const mainImage = document.getElementById('mainImage');

  mainImage.classList.add('opacity-0');

  setTimeout(() => {
    mainImage.src = el.dataset.full;
    mainImage.classList.remove('opacity-0');
  }, 150);

  document.querySelectorAll('.thumb').forEach(t => {
    t.classList.remove('border-2', 'border-[#D9539E]', 'opacity-100');
    t.classList.add('border', 'border-[#D9539E]/30', 'opacity-60');
  });

  el.classList.remove('border', 'border-[#D9539E]/30', 'opacity-60');
  el.classList.add('border-2', 'border-[#D9539E]', 'opacity-100');
}