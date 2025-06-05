document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector(".name").value.trim();
        const email = form.querySelector(".email").value.trim();
        const raqam = form.querySelector(".raqam").value.trim();
        const message = form.querySelector(".textarea").value.trim();

        // Telegram API uchun kerakli ma’lumotlar
        const token = "7774524384:AAH2FGSURtK7zWe6gZjG6JMayp1xdOfuxRc";
        const chat_id = "-1002634481700";
        const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

        const text = `
📩 *Yangi ariza!*
👤 Ismi: *${name}*
📞 Telefon raqam: +*${raqam}*
📞 Email: *${email}*
💬 Izoh: ${message}
    `;
        console.log(text);

        // API orqali yuborish
        fetch(telegramUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id,
                text,
                parse_mode: "Markdown",
            }),
        })
            .then((response) => {
                if (response.ok) {
                    const isValid = true; // bu yerda haqiqiy tekshiruv bo‘ladi
                    if (isValid) {
                        document.querySelector(".success").classList.remove("hidden");
                    }
                    setTimeout(() => {
                        document.querySelector(".success").classList.add("hidden");
                    }, 3000)

                    form.reset(); // Formani tozalash
                } else {
                    document.querySelector(".error").classList.remove("hidden");
                    setTimeout(() => {
                        document.querySelector(".error").classList.add("hidden");
                    }, 3000)
                }
            })
            .catch((error) => {
                console.error("Xatolik:", error);
                
                document.querySelector(".error").classList.remove("hidden");
                setTimeout(() => {
                    document.querySelector(".error").classList.add("hidden");
                }, 3000)
            });
    });
});


