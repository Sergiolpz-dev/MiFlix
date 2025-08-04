const menuBtn = document.getElementById("menu-icon");
const closeBtn = document.getElementById("close-icon");
const menu = document.querySelector(".header__nav");


// Menu
menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "block";
    menu.classList.add("animate__slideInDown", "animate__animated");
});

// Close menu btn
closeBtn.addEventListener("click", () => {
    closeBtn.style.display = "none";
    if (window.innerWidth < 768) {
        menu.style.display = "none"; 
    }
    menu.classList.remove("animate__slideOutUp", "animate__animated");
    categoriesMenu.classList.remove("animate__slideInUp", "animate__animated");
    categoriesMenu.style.display = "none";
});

// Close menu on resize
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        menu.style.display = "flex"; 
    }
    if (window.innerWidth < 768) {
        menu.style.display = "none";
    }
});


// Categories
const categoriesBtn = document.getElementById("categories-btn");
const categoriesMenu = document.getElementById("categories-menu");

categoriesBtn.addEventListener("click", () => {
    if (window.innerWidth < 768) {
        menu.classList.add("animate__slideOutUp", "animate__animated");
    }
    categoriesMenu.classList.add("animate__slideInUp", "animate__animated");
    categoriesMenu.style.display = "flex";
    closeBtn.style.display = "block";
});
