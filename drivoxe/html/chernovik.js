// Tilni o'zgartirish funksiyasi
function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en], [data-uz]');
  const languageBtn = document.getElementById('language-toggle');
  
  // Joriy tilni tekshiramiz yoki localStorage dan olamiz
  let currentLang = localStorage.getItem('language') || 'en';
  
  // Agar til uzbekcha bo'lsa, ingliz tiliga o'tkazamiz va aksincha
  if (currentLang === 'en') {
    currentLang = 'uz';
    languageBtn.textContent = 'ENG';
    
    // Uzbekcha matnlar bilan almashtiramiz
    elements.forEach(element => {
      if (element.dataset.uz) {
        element.textContent = element.dataset.uz;
      }
    });
  } else {
    currentLang = 'en';
    languageBtn.textContent = 'UZB';
    
    // Inglizcha matnlar bilan almashtiramiz
    elements.forEach(element => {
      if (element.dataset.en) {
        element.textContent = element.dataset.en;
      }
    });
  }
  
  // Tanlangan tilni saqlaymiz
  localStorage.setItem('language', currentLang);
}

// Sahifa yuklanganda tilni o'rnatish
document.addEventListener('DOMContentLoaded', function() {
  const languageBtn = document.createElement('button');
  languageBtn.id = 'language-toggle';
  languageBtn.style.position = 'fixed';
  languageBtn.style.top = '20px';
  languageBtn.style.right = '20px';
  languageBtn.style.padding = '8px 16px';
  languageBtn.style.backgroundColor = '#FD3B3B';
  languageBtn.style.color = 'white';
  languageBtn.style.border = 'none';
  languageBtn.style.borderRadius = '4px';
  languageBtn.style.cursor = 'pointer';
  languageBtn.style.zIndex = '1000';
  
  // LocalStorage dan tilni o'qiymiz
  const savedLang = localStorage.getItem('language') || 'en';
  
  if (savedLang === 'uz') {
    languageBtn.textContent = 'ENG';
    // Sahifa yuklanganda uzbekcha matnlar bilan almashtiramiz
    document.querySelectorAll('[data-en], [data-uz]').forEach(element => {
      if (element.dataset.uz) {
        element.textContent = element.dataset.uz;
      }
    });
  } else {
    languageBtn.textContent = 'UZB';
  }
  
  document.body.appendChild(languageBtn);
  languageBtn.addEventListener('click', toggleLanguage);
});