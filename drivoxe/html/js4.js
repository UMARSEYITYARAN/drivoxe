// Elementlar
const priceElement = document.getElementById('price');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const no = document.getElementById('no');
const carImage = document.getElementById('carImage');
const pho = document.getElementById('pho');
const shar = document.getElementById('shar');
const opa = document.getElementById('opa');

// Narx va son uchun o‘zgaruvchilar

  let basePrice = 59;
  let count = 1;
  let language = 'uz';

  const countElement = document.getElementById("no");

  // Tugmalar bosilganda ishlaydigan funksiyalar
  incrementBtn.addEventListener("click", () => {
    count++;
    updateUI();
  });

  decrementBtn.addEventListener("click", () => {
    if (count > 1) {
      count--;
      updateUI();
    }
  });

  // Tilni o‘zgartiruvchi funksiya (agar siz til tugmalarini ham qo‘shgan bo‘lsangiz)
  function setLanguage(lang) {
    language = lang;
    updateUI();
  }

  function updateUI() {
    countElement.textContent = count;
    let language = localStorage.getItem("language")
    if (language === "uz") {
      priceElement.textContent = `$${basePrice * count}/kun`;
    } else if (language === "en") {
      priceElement.textContent = `$${ basePrice * count}/day`;
    }
  }

  // Dastlabki holatni yangilash
  updateUI();



// ➕ Tugma bosilganda
incrementBtn.addEventListener('click', () => {
  sa++;
  sa = count;
  no.textContent = sa;
  updatePrice();

  no.style.transform = 'scale(1.1)';
  no.style.transition = '.3s';
  setTimeout(() => {
    no.style.transform = 'scale(1.0)';
  }, 100);
});

// ➖ Tugma bosilganda
decrementBtn.addEventListener('click', () => {
  if (count > 1) {
    sa--;
    sa = count;
    no.textContent = sa;
    updatePrice();
  }
});

// 🎨 Mashina rasm rangini o‘zgartiruvchi funksiya
function changeColor(color) {
  if (color === 'black') {
    carImage.src = './asserts/8254226e663bc5c98c47743784070795.jpg';
    pho.src = './asserts/images.jpg';
    shar.src = './asserts/images (1).jpg';
    opa.src = './asserts/images (2).jpg';

    // carImage uchun maxsus o'lcham
    carImage.style.width = '774px';
    carImage.style.height = '549px';

    // Qolganlar uchun umumiy o'lcham
    [pho, shar, opa].forEach(img => {
      img.style.width = '240px';
      img.style.height = '240px';
    });

  } else if (color === 'white') {
    carImage.src = './asserts/f9a460d163d870baf7e01251bdc47646.jpg';
      pho.src = './asserts/331160.avif.webp';
    shar.src = './asserts/1970-Dodge-Challenger-RT-002.jpg';
    opa.src = './asserts/HS970_013DG__mid.jpg';
        // carImage uchun maxsus o'lcham
    carImage.style.width = '774px';
    carImage.style.height = '549px';

    // Qolganlar uchun umumiy o'lcham
    [pho, shar, opa].forEach(img => {
      img.style.width = '240px';
      img.style.height = '240px';
    });

  } else if (color === 'red') {
    carImage.src = './asserts/Photo (18).svg';
    pho.src = './asserts/Photo 1.svg';
    shar.src = './asserts/Photo 2.svg';
    opa.src = './asserts/Photo 3.svg';

    // Barcha rasmlarga bir xil o'lcham (ixtiyoriy, agar kerak bo‘lsa)
    [ pho, shar, opa].forEach(img => {
      img.style.width = '240px';
      img.style.height = '240px';
    });

   
     
  
  }
}
 // Rasimni katalashtiradigan function
  function changeImage(thumbnail) {
    const mainImage = document.getElementById('carImage');
    mainImage.src = thumbnail.src;
        if (  mainImage.src = thumbnail.src) {
        mainImage.style.width = '774px';
        mainImage.style.height = '549px';
       }
  }


 


// 🌐 Tilni qo‘llovchi funksiya
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

// 🔁 Til almashtiruvchi tugma funksiyasi
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

// Sahifa yuklanganda tilni o‘rnatish
document.addEventListener('DOMContentLoaded', function () {
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
