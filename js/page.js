'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const btnInfoOpen = document.querySelector('#info-open')
    const btnInfoClose = document.querySelector('#info-close')
    const asideContent = document.querySelector('aside')

    btnInfoOpen.addEventListener('click', () => {
        btnInfoOpen.style.display = 'none'
        btnInfoClose.style.display = 'block'

        asideContent.style.display = 'block';
    })

    btnInfoClose.addEventListener('click', () => {
        btnInfoOpen.style.display = 'block'
        btnInfoClose.style.display = 'none'

        asideContent.style.display = 'none';
    })
})
