let pl = document.getElementById('pl')
let mi = document.getElementById('mi')
let no = document.getElementById('no')

let sa = 1

pl.addEventListener('click', () => {
    sa++
    no.textContent = sa
    no.style.transform = 'scale(1.1)'
    no.style.transition = '.3s'

    setTimeout(() => {
        no.style.transform = 'scale(1.0)'
    }, 100)
})




mi.addEventListener('click', () => {

    if (sa == 0) {
        no.textContent = sa
    }

    else {
        sa--
        no.textContent = sa
    }
})