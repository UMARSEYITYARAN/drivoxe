       let onam = document.querySelector('.cardd')
    let ona = document.querySelector('.ota')
        setTimeout(function umarFunc() {
            onam.classList.toggle('ona');
            ona.classList.toggle('onam');
        }, 2615)
    // umarFunc();
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
             // 1. Sahifa yuklanganda localStorage dan qiymatlarni tiklash
    window.addEventListener("DOMContentLoaded", () => {
        const fileInput = localStorage.getItem(src);
        const name = localStorage.getItem(name);
        const surname = localStorage.getItem(surname)

        if (fileInput) src.value = fileInput;
        if (name) name.textContent = name;
        if (surname) surname.textContent = surname;
    });
    
