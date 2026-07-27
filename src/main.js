function changeImage(el) {
  const mainImage = document.getElementById('mainImage');
  if (!mainImage) return;

  mainImage.classList.add('opacity-0');

  setTimeout(() => {
    mainImage.src = el.dataset.full + '?v=' + Date.now();
    mainImage.classList.remove('opacity-0');
  }, 150);

  document.querySelectorAll('.thumb').forEach(t => {
    t.classList.remove('border-2', 'border-[#D9539E]', 'opacity-100');
    t.classList.add('border', 'border-[#D9539E]/30', 'opacity-60');
  });

  el.classList.remove('border', 'border-[#D9539E]/30', 'opacity-60');
  el.classList.add('border-2', 'border-[#D9539E]', 'opacity-100');
}


const colorName = document.getElementById('colorName');
const swatches = document.querySelectorAll('.color-swatch');

swatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    // عوض کردن عکس اصلی
    mainImage.src = swatch.getAttribute('data-image');
    // عوض کردن نام رنگ
    colorName.textContent = swatch.getAttribute('data-name');

    // برداشتن border صورتی از همه
    swatches.forEach(s => {
      s.classList.remove('border-3', 'border-[#D9539E]');
    });
    // اضافه کردن border صورتی فقط به انتخاب‌شده
    swatch.classList.add('border-3', 'border-[#D9539E]');
  });
});

const sizeGuideBtn = document.getElementById('sizeGuideBtn');
const sizeGuideModal = document.getElementById('sizeGuideModal');
const closeSizeGuide = document.getElementById('closeSizeGuide');

// باز کردن مودال
sizeGuideBtn.addEventListener('click', () => {
  sizeGuideModal.classList.remove('hidden');
  sizeGuideModal.classList.add('flex');
});

// بستن با دکمه ضربدر
closeSizeGuide.addEventListener('click', () => {
  sizeGuideModal.classList.add('hidden');
  sizeGuideModal.classList.remove('flex');
});

// بستن با کلیک روی پس‌زمینه تیره (اختیاری ولی تجربه کاربری بهتر)
sizeGuideModal.addEventListener('click', (e) => {
  if (e.target === sizeGuideModal) {
    sizeGuideModal.classList.add('hidden');
    sizeGuideModal.classList.remove('flex');
  }
});

document.querySelectorAll('.acc-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.acc-item');
      item.classList.toggle('open');
    });
  });