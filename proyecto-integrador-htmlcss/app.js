addEventListener('DOMContentLoaded', () =>{
    const btn_menu = document.querySelector('.btn-menu')
    if (btn_menu){
        btn_menu.addEventListener('click', () => {
            const btn_menu = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
}

)