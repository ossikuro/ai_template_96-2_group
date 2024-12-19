window.addEventListener('load', () => {
    document.body.classList.add('loaded') // Показываем контент
    const preloader = document.getElementById('preloader')
    preloader.classList.add('hidden') // Убираем предзагрузчик
})

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0) // Устанавливаем прокрутку в верхнюю точку
})
