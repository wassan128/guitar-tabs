'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const btnInfoOpen = document.querySelector('#info-open')
    const btnInfoClose = document.querySelector('#info-close')
    const asideContent = document.querySelector('aside')

    btnInfoOpen.addEventListener('click', () => {
        btnInfoOpen.style.display = 'none'
        btnInfoClose.style.display = 'block'

        asideContent.style.display = "block"
        asideContent.setAttribute("class", "show")
    })

    btnInfoClose.addEventListener('click', () => {
        btnInfoOpen.style.display = 'block'
        btnInfoClose.style.display = 'none'

        asideContent.setAttribute("class", "hide")
        setTimeout(() => {
            asideContent.style.display = "none"
        }, 500)
    })
})
