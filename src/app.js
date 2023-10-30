const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active")
});

const btnMenu = document.querySelector("#menu-btn");
const nav = document.querySelector("#nav");

btnMenu.addEventListener("click", () => {
    nav.classList.toggle("show");
    btnSwitch.classList.toggle("show")
});