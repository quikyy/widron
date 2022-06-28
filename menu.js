const headerTop = document.querySelector(".header-top");
const menuContainer = document.querySelector('.menu-container-mobile');
const menuBtn = document.querySelector('.menu-btn');
const backgrounbBlurDiv = document.querySelector(".background-blur");
const menuoptions = [...document.querySelectorAll('.menu-options li')]

const menuDesktopBtn = [...document.querySelectorAll('.menu-desktop-btn')]
const menuDesktopDot = [...document.querySelectorAll('.menu-dekstop-dot')]

const main = document.querySelector('main')
const gear = document.getElementById('gear')

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

function setProperDotOnScroll() {
    const showDot = 'showDot';
    const userScrollFromTop = window.scrollY;

    const headerStartRange = 0;
    const headerEndRange = main.offsetTop;

    const mainStartRange = main.offsetTop;
    const mainEndRange = 1300



    menuDesktopDot.forEach(dot => {
        const dotIndex = dot.dataset.index;

        if (dotIndex == "start") {
            if (userScrollFromTop < headerEndRange) {
                dot.classList.add(showDot)
            } else {
                dot.classList.remove(showDot)
            }
        } else if (dotIndex == "about") {
            if (userScrollFromTop >= mainStartRange && userScrollFromTop < mainEndRange) {
                dot.classList.add(showDot)
            } else {
                dot.classList.remove(showDot)
            }
        }
    })
}






menuoptions.forEach(elem => elem.addEventListener("click", function () {
    openCloseMenu();
}))
window.addEventListener('scroll', setProperDotOnScroll)
menuBtn.addEventListener('click', openCloseMenu)
window.addEventListener('scroll', setBlackBackgroundToHeaderTop)