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
    carImage.src = './drivoxe/html/asserts/1552b6eb-5f77-413e-8d91-65e307be4683.png';
    pho.src = './drivoxe/html/asserts/1552b6eb-5f77-413e-8d91-65e307be4683.png';
    shar.src = './drivoxe/html/asserts/6e3d2cd4-e732-41f4-9989-0d9d29f08c1e.png';
    opa.src = './drivoxe/html/asserts/3427e4de-d573-4a5a-ae06-a2e362c4827a.png';

    // carImage uchun maxsus o'lcham
    carImage.style.width = '774px';
    carImage.style.height = '549px';

    // Qolganlar uchun umumiy o'lcham
    [pho, shar, opa].forEach(img => {
      img.style.width = '240px';
      img.style.height = '240px';
    });

  } else if (color === 'white') {
    carImage.src = './drivoxe/html/asserts/4c074220-8393-48f3-931e-a77384a3c58d.png';
      pho.src = './drivoxe/html/asserts/4c074220-8393-48f3-931e-a77384a3c58d.png';
    shar.src = './drivoxe/html/asserts/c3e3f21b-5673-400a-8ed3-9c5bfcf9c137.png';
    opa.src = './drivoxe/html/asserts/8cacb23f-3be9-4a27-ab35-d4dc759ed564.png';
        // carImage uchun maxsus o'lcham
    carImage.style.width = '774px';
    carImage.style.height = '549px';

    // Qolganlar uchun umumiy o'lcham
    [pho, shar, opa].forEach(img => {
      img.style.width = '240px';
      img.style.height = '240px';
    });

  } else if (color === 'red') {
    carImage.src = './drivoxe/html/asserts/Photo 1.svg';
    pho.src = './drivoxe/html/asserts/Photo 1.svg';
    shar.src = './drivoxe/html/asserts/Photo 2.svg';
    opa.src = './drivoxe/html/asserts/Photo 3.svg';

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

 // Formani ochish
    function openForm() {
        document.getElementById("userModal").style.display = "block";
    }

    // Formani yopish
    function closeForm() {
        document.getElementById("userModal").style.display = "none";
    }

    // Preview oynasini yopish
    function closePreview() {
        document.getElementById("previewModal").style.display = "none";
    }

    // Forma yuborilganda
    document.getElementById("userForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Formani reload qilinishining oldini oladi

        // Ism va familiyani olish
        const name = event.target[0].value;
        const surname = event.target[1].value;
        const fileInput = event.target[2];

        // Foydalanuvchi rasm faylini o'qish
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                // Ma'lumotlarni preview oynasiga joylashtirish
                document.getElementById("previewImage").src = e.target.result;
                document.getElementById("previewName").textContent = name;
                document.getElementById("previewSurname").textContent = surname;

                // Modal oynalarni boshqarish
                document.getElementById("userModal").style.display = "none";
                document.getElementById("previewModal").style.display = "block";

                // Profil rasmini yangilash
                document.getElementById("profileImage").src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Modal tashqarisiga bosilganda yopish (optional)
    window.onclick = function (event) {
        const userModal = document.getElementById("userModal");
        const previewModal = document.getElementById("previewModal");

        if (event.target === userModal) {
            userModal.style.display = "none";
        }

        if (event.target === previewModal) {
            previewModal.style.display = "none";
        }
    };
    
