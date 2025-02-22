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

var carousel_content = document.querySelector("article section#events-section .body .carousel-content")
fetch(`${window.location.origin}/assets/data/data.json`)
    .then(resp => resp.json())
    .then(data => {
        let Events = data.events
        Events.forEach(event => {
            let div = document.createElement("div")
            div.setAttribute("class", "slide")
            div.innerHTML = `
            <img src="${event.cover}" alt="">
            <div>                                
            </div>
            <div class="b02">
                <span class="title">${event.name}</span>
                <span class="place">${event.place}</span>
                <span class="date">${event.date}</span>
                <p>
                    ${event.about}
                </p>
            </div>
            `
            carousel_content.appendChild(div)
        })
        document.body.style.setProperty("--events-len", Events.length)
        start()
    })


function start(){
    var index = 0;
    const totalSlides = document.querySelectorAll("article section#events-section .body .carousel-content .slide").length;
    const carousel = document.querySelector("article section#events-section .body .carousel-content");

    function updateCarousel() {
        carousel.style.transform = `translateX(${-index * document.documentElement.clientWidth}px)`;
    }

    function nextSlide() {
        if (index < totalSlides - 1) {
            index++;
        } else {
            index = 0; // Retour au début si on atteint la fin
        }
        updateCarousel();
    }

    function prevSlide() {
        console.log(totalSlides, "x")
        if (index > 0) {
            index--;
        } else {
            index = totalSlides - 1; // Retour à la fin si on est au début
        }
        updateCarousel();
    }

    document.querySelector("article section#events-section .body .btn.left").onclick = ()=>{
        prevSlide()
    }
    document.querySelector("article section#events-section .body .btn.right").onclick = ()=>{
        nextSlide()
    }
}