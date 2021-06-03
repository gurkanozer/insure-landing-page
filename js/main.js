const navbarBtn = document.querySelector(".navbar-btn");
const header = document.querySelector("header");
navbarBtn.addEventListener("click", () => {
    header.classList.toggle("active");
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
        header.classList.remove("active");
    }
});