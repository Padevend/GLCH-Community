'use strict'

window.addEventListener("DOMContentLoaded", () => {
    var carousel = document.querySelector(".carousel-container");
    let speed = 1;
    let isPaused = false;

    function scroll() {
        if (!isPaused) {
            carousel.style.left = (parseFloat(getComputedStyle(carousel).left) - speed) + "px"
            if (Math.abs(parseFloat(carousel.style.left)) >= carousel.scrollWidth - document.documentElement.clientWidth) {
                carousel.style.left = "0px";
            }
        }
        requestAnimationFrame(scroll)
    }
    carousel.addEventListener("mouseenter", () => isPaused = true);
    carousel.addEventListener("mouseleave", () => isPaused = false);

    carousel.style.left = "0px";
    scroll();
})


var aboutY = document.querySelector("#about-section").offsetTop - 150
var serviceY = document.querySelector("#service-section").offsetTop - 150

window.addEventListener("scroll", (e) => {
    if (document.documentElement.scrollTop >= serviceY) {
        document.querySelectorAll("ul li.item.service").forEach(btn => {
            btn.click()
        });
    } else if (document.documentElement.scrollTop >= aboutY) {
        document.querySelectorAll("ul li.item.about").forEach(btn => {
            btn.click()
        });
    } else if (document.documentElement.scrollTop < aboutY) {
        document.querySelectorAll("ul li.item.home").forEach(btn => {
            btn.click()
        });
    }
})


    