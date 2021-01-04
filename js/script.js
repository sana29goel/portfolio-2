const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li');

    burger.addEventListener('click',() =>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation='';
            } else{
                link.style.animation=`navlinkfade 0.5s ease forwards ${index/7+0.5}s`;
            }
        });
    });
}
navSlide();