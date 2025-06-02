// // const email = document.querySelector('.email')
// // const closesBtn = document.getElementById('closesBtn')
// // const dangerBtn = document.getElementById('dangerBtn')
// // const successBtn = document.getElementById('successBtn')
// // const warningBtn = document.getElementById('warningBtn')
// // const alertContainer = document.getElementById('alertContainer')


// // function createAlert(type, message, iconClass) {
// //     const alert = document.createElement('div')
// //     alert.className = `alert ${type}`;
// //     alert.innerHTML = `
// //                 <i class="fa-solid ${iconClass}"></i>
// //                 <span>${message}</span>
// //                 <i class="fa-solid fa-xmark closeBtn"></i>
// //             `;
// //     alertContainer.appendChild(alert)

// //     const closeBtn = alert.querySelector('.closeBtn')
// //     closeBtn.addEventListener('click', () => {
// //         alert.classList.add('hide')
// //         setTimeout(() => {
// //             alert.remove()
// //         }, 500)
// //     })
// //     setTimeout(() => {
// //         alert.remove()
// //     }, 5000)
// // }

// // if (email.value < 8) {
// //     successBtn.addEventListener('click', () => {
// //         createAlert('success', 'Success! Harakat muvaffaqiyatli bajarildi', 'fa-circle-check')
// //     })
// // }
// // else if (email.value == 0 ) {
// //     dangerBtn.addEventListener('click', () => {
// //         createAlert('danger', 'Danger! Xatolik yuz berdi', 'fa-circle-exclamation')
// //     }) 
// // }

//     const form = document.getElementById("signupForm");
//     const emailInput = document.getElementById("email");
//     const passwordInput = document.getElementById("password");
//     const message = document.getElementById("message");

    

//     // 2. Enter tugmasi bosilganda tekshiradi va saqlaydi
//     form.addEventListener("keydown", function (event) {
//         if (event.key === "Enter") {
//             event.preventDefault(); // Formani yuborilishini to‘xtatadi

//             const email = emailInput.value.trim();
//             const password = passwordInput.value.trim();
//             const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//             if (email && password && emailPattern.test(email)) {
//                 // Ma'lumotlarni saqlash
//                 localStorage.setItem("signup_email", email);
//                 localStorage.setItem("signup_password", password);

//                 message.style.color = "green";
//                 message.textContent = "✅ Muvaffaqiyatli ro'yxatdan o'tdingiz!";
//             } else {
//                 message.style.color = "red";
//                 message.textContent = "❌ Iltimos, to'g'ri email va parol kiriting!";
//             }
//         }
//     });

  const form = document.getElementById("signupForm");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const message = document.getElementById("message");

        // LocalStorage'dan mavjud qiymatlarni tiklash
        window.addEventListener("DOMContentLoaded", () => {
            const savedEmail = localStorage.getItem("signup_email");
            const savedPassword = localStorage.getItem("signup_password");

            if (savedEmail) emailInput.value = savedEmail;
            if (savedPassword) passwordInput.value = savedPassword;
        });

        // Enter bosilganda ishlash
        form.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();

                const email = emailInput.value.trim();
                const password = passwordInput.value.trim();
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (email && password && emailPattern.test(email)) {
                    localStorage.setItem("signup_email", email);
                    localStorage.setItem("signup_password", password);

                    message.textContent = "✅ Muvaffaqiyatli ro'yxatdan o'tdingiz!";
                    message.className = "alert alert-success";
                    message.style.display = "block";
                } else {
                    message.textContent = "❌ Iltimos, to'g'ri email va parol kiriting!";
                    message.className = "alert alert-error";
                    message.style.display = "block";
                }
            }
        });
 






