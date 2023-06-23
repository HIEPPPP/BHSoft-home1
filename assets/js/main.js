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

// about
const video = $(".video");
const play = $(".video-container");
const playButton = $(".playBtn");

// play.addEventListener("click", function () {
//     if (video.paused) {
//         video.play();
//         // playButton.classList.remove("playBtn");
//         playButton.classList.add("play");
//     } else {
//         video.pause();
//         // playButton.classList.add("playBtn");
//         playButton.classList.remove("play");
//     }
// });

// Question Button
var iconState = "up";
const questionIcon = $("#question__icon");
function changeIcon() {
    if (iconState === "up") {
        questionIcon.classList.remove("fa-angle-up");
        questionIcon.classList.add("fa-angle-down");
        iconState = "down";
    } else {
        iconState = "up";
        questionIcon.classList.remove("fa-angle-down");
        questionIcon.classList.add("fa-angle-up");
    }
}

// questionIcon.forEach((question, index) => {});
