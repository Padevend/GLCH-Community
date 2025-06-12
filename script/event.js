'use strict'

// function

/**
 * 
 * @param {HTMLElement} view 
 * @param {HTMLDListElement} parent 
 * @param {String} className 
 * 
 * faire parcouri un attribu de class css a un groupe d'element en fonction de l'element
 * du groupe passer en parametre
 */
function activeElement(view, group, className) {
    group.forEach(element => {
        element.classList.remove(className)
    });
    view.classList.add(className)
}

// ouverture et fermeture de la barre de navigation laterale en mode mobile
var sideBar = document.querySelector("nav .side-bar")
var openBtn = document.querySelector("nav .burger-btn button.open")
var closeBtn = document.querySelector("nav .side-bar .header button.close")
openBtn.onclick = () => { //ouverture
    sideBar.classList.add("active")
}
closeBtn.onclick = () => { //fermeture
    sideBar.classList.remove("active")
}

//changement de style en fonction de la page active
var links = document.querySelectorAll("nav .nav-links ul .item")
links.forEach(element => { //web view
    element.addEventListener("click", () => {
        activeElement(element, links, "active")
    })
})

var Sidelinks = document.querySelectorAll("nav .side-bar .section ul .item")
Sidelinks.forEach(element => { //mobile view
    element.addEventListener("click", () => {
        activeElement(element, Sidelinks, "active")
        closeBtn.click()
    })
})



//gestoin du theme
var themeBtn = document.querySelector("header nav .nav-buttons button.mode")
themeBtn.addEventListener("click", () => {
    var mode = document.body.getAttribute("mode")
    var theme;
    if (mode == "light") {
        theme = "dark"
        document.body.setAttribute("mode", "dark")
    } else if (mode == "dark") {
        theme = "light"
        document.body.setAttribute("mode", "light")
    }
    ThemeManager.updateTheme()

    //cookie manger
    localStorage.setItem("mode", theme)
})
//side bar btn
var SidethemeBtn = document.querySelector("header nav .side-bar .header .return .mode")
SidethemeBtn.addEventListener("click", () => {
    var mode = document.body.getAttribute("mode")
    if (mode == "light") {
        document.body.setAttribute("mode", "dark")
    } else if (mode == "dark") {
        document.body.setAttribute("mode", "light")
    }
    console.log(document.body.getAttribute("mode"))
    ThemeManager.updateTheme()
})

var startMode = localStorage.getItem("mode")
if (startMode != null && startMode == "dark") {
    document.body.setAttribute("mode", "dark")
    ThemeManager.updateTheme()
}

window.addEventListener("scroll", (e) => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement
    let pourcent = (scrollTop / (scrollHeight - clientHeight)) * 100
    document.querySelector(".loader .progressive-bar").style.width = `${pourcent}%`
})