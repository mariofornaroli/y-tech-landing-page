window.addEventListener("load", () => {

    const toggleMenuItems = document.querySelectorAll('.toggle-menu');
    toggleMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            document.body.classList.toggle('menu-opened');
        })
    })
})