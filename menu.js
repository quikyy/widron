const headerTop = document.querySelector(".header-top");
const menuContainer = document.querySelector('.menu-container');
const menuBtn = document.querySelector('.menu-btn');
const backgrounbBlurDiv = document.querySelector(".background-blur");

const menuoptions = [...document.querySelectorAll('.menu-options li')]

menuoptions.forEach(elem => elem.addEventListener("click", function () {
    openCloseMenu();
}))



const setBlackBackgroundSlow = "setBlackBackgroundSlow"
const setBlurredBackground = "blur-visible";

function openCloseMenu() {
    const menuVisible = "menu-visible";
    if (menuContainer.dataset.status == "hidden") {
        menuContainer.classList.add(menuVisible)
        backgrounbBlurDiv.classList.add(setBlurredBackground)
        menuContainer.dataset.status = "visble"

    } else {
        menuContainer.classList.remove(menuVisible)
        backgrounbBlurDiv.classList.remove(setBlurredBackground)
        menuContainer.dataset.status = "hidden"
    }
}


function setBlackBackgroundToHeaderTop() {
    const windowHeight = window.innerHeight;
    const userScrollFromTop = window.scrollY;
    const scrollChangeBreakPoint = (50 * windowHeight) / 100;

    if (userScrollFromTop > scrollChangeBreakPoint) headerTop.classList.add(setBlackBackgroundSlow)
    else headerTop.classList.remove(setBlackBackgroundSlow)
}

menuBtn.addEventListener('click', openCloseMenu)
window.addEventListener('scroll', setBlackBackgroundToHeaderTop)