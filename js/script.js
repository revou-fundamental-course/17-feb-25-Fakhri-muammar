// Toggle & Responsive navigation
const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navList = document.querySelector("nav")

    burger.addEventListener("click", () => {
        navList.classList.toggle("nav-active")
        burger.classList.toggle("toggle-burger")
    })
};

navSlide();

// For Index Identifier
let indexBanner = 0;

showBanner();

function nextBanner() {
    // Increment IndexBanner
    indexBanner +=1;
    showBanner();
}

function showBanner() {
    let banner= document.getElementsByClassName('main-banner')

    // reset condition
    if (indexBanner > banner.length -1) {
        indexBanner = 0;
    }

    // loop untuk hide semua
    for (let i = 0; i < banner.length; i++) {
        banner[i].style.display = 'none';
    }

    // show banner
    banner[indexBanner].style.display = 'block';
}

// autoplay
setInterval(nextBanner, 3000);

function stopBanner() {
    clearInterval(interval);
};






