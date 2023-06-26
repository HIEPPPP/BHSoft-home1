const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// active navbar
const links = $$(".nav-item");

links.forEach((link, index) => {
    link.onclick = function () {
        $(".nav-item.active").classList.remove("active");
        this.classList.add("active");
    };
});

// Menu mobile
const menu = $(".nav-links");
const menuButton = $(".nav-icons");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("nav-open");
    menuButton.classList.toggle("open");
});

// Question Button
const questionIcon = $$(".question__icon");
const questionDesc = $$(".question__desc");
let iconState = "up";
let descState = "none";

questionIcon.forEach((question, index) => {
    let desc = questionDesc[index];
    question.onclick = function () {
        if (iconState === "up" && descState === "none") {
            question.classList.remove("fa-angle-up");
            question.classList.add("fa-angle-down");
            iconState = "down";
            desc.style.display = "block";
            descState = "block";
        } else {
            question.classList.remove("fa-angle-down");
            question.classList.add("fa-angle-up");
            iconState = "up";
            desc.style.display = "none";
            descState = "none";
        }
    };
});
