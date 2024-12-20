/* скрипт для блокировки экрана на время загрузки */

window.addEventListener('load', () => {
    document.body.classList.add('loaded') // Показываем контент
    const preloader = document.getElementById('preloader')
    preloader.classList.add('hidden') // Убираем предзагрузчик
})

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0) // Устанавливаем прокрутку в верхнюю точку
})

/* скрипт для перепозиционирования якоря */
// Ожидаем загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    // Находим все ссылки с классом "catalogue_anchor"
    const anchorLinks = document.querySelectorAll('.catalogue_anchor')

    // Для каждой ссылки добавляем обработчик клика
    anchorLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            // Останавливаем стандартное поведение
            event.preventDefault()

            // Получаем ID якоря из href
            const targetId = link.getAttribute('href').slice(1) // Убираем #
            const targetElement = document.getElementById(targetId)

            if (!targetElement) {
                console.error('Target element not found for ID:', targetId)
                return
            }

            // Высота фиксированного хедера
            const header = document.querySelector('header')
            const headerHeight = header ? header.offsetHeight : 0

            // Прокручиваем страницу к элементу с учётом высоты хедера
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth',
            })
        })
    })
})
