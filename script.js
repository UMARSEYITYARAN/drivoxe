const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    item.classList.toggle('active');
  });
});
// Matnlarni berilgan tilga moslab almashtiruvchi funksiya
    function applyLanguage(lang) {
      const elements = document.querySelectorAll('[data-en], [data-uz]');
      elements.forEach(element => {
        if (lang === 'uz' && element.dataset.uz) {
          element.textContent = element.dataset.uz;
        } else if (lang === 'en' && element.dataset.en) {
          element.textContent = element.dataset.en;
        }
      });
    }

    // Tilni almashtirish tugmasi bosilganda ishlaydigan funksiya
    function toggleLanguage() {
      const languageBtn = document.getElementById('language-toggle');
      if (!languageBtn) {
        console.error("language-toggle ID'siga ega tugma topilmadi!");
        return;
      }

      let currentLang = localStorage.getItem('language') || 'en';
      currentLang = currentLang === 'en' ? 'uz' : 'en';

      languageBtn.textContent = currentLang === 'en' ? 'UZB' : 'ENG';
      localStorage.setItem('language', currentLang);
      applyLanguage(currentLang);
    }

    // Sahifa yuklanganda boshlang'ich tilni o‘rnatish
    document.addEventListener('DOMContentLoaded', function() {
      const languageBtn = document.getElementById('language-toggle');
      if (!languageBtn) {
        console.error("language-toggle ID'siga ega tugma topilmadi!");
        return;
      }

      const savedLang = localStorage.getItem('language') || 'en';
      languageBtn.textContent = savedLang === 'en' ? 'UZB' : 'ENG';
      applyLanguage(savedLang);

      languageBtn.addEventListener('click', toggleLanguage);
    });

