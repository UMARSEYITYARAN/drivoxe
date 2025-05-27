const email = document.querySelector('.email')
const closesBtn = document.getElementById('closesBtn')
const dangerBtn = document.getElementById('dangerBtn')
const successBtn = document.getElementById('successBtn')
const warningBtn = document.getElementById('warningBtn')
const alertContainer = document.getElementById('alertContainer')


function createAlert(type, message, iconClass) {
    const alert = document.createElement('div')
    alert.className = `alert ${type}`;
    alert.innerHTML = `
                <i class="fa-solid ${iconClass}"></i>
                <span>${message}</span>
                <i class="fa-solid fa-xmark closeBtn"></i>
            `;
    alertContainer.appendChild(alert)

    const closeBtn = alert.querySelector('.closeBtn')
    closeBtn.addEventListener('click', () => {
        alert.classList.add('hide')
        setTimeout(() => {
            alert.remove()
        }, 500)
    })
    setTimeout(() => {
        alert.remove()
    }, 5000)
}

if (email.value < 8) {
    successBtn.addEventListener('click', () => {
        createAlert('success', 'Success! Harakat muvaffaqiyatli bajarildi', 'fa-circle-check')
    })
}
else if (email.value == 0 ) {
    dangerBtn.addEventListener('click', () => {
        createAlert('danger', 'Danger! Xatolik yuz berdi', 'fa-circle-exclamation')
    }) 
}
 






