document.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{
        document.body.style.overflow = 'inherit';
    }, 2700);

    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.header__navigation_mobile');

    hamburger.addEventListener('click', ()=>{
        if(!menu.classList.contains('header__navigation_opened')) {
            menu.classList.add('header__navigation_opened');
            hamburger.classList.add('hamburger_opened');
            document.body.style.overflow = 'hidden';
        } else {
            menu.classList.remove('header__navigation_opened');
            hamburger.classList.remove('hamburger_opened');
            document.body.style.overflow = 'auto';
        }
    });


    const categoriesOpener = document.querySelector('.tags-opener'),
        tagsContainer = document.querySelector('.footer__tags'),
        tagsOpenerIcon = categoriesOpener.querySelector('img');

    categoriesOpener.addEventListener('click', (e)=>{
        e.preventDefault()
    });

    categoriesOpener.addEventListener('mouseover', ()=>{
        tagsOpenerIcon.style.transform = "rotate(180deg)";
        tagsContainer.classList.add('footer__tags_opened');

    });

    categoriesOpener.addEventListener('mouseout', ()=>{
        tagsOpenerIcon.style.transform = "rotate(0deg)";
        tagsContainer.classList.remove('footer__tags_opened');
    });

});