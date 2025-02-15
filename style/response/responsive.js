function adjustScreenSize(){
    const {clientHeight, clientWidth} = document.documentElement;

    document.querySelector("html").style.height = `${clientHeight}px`;
    document.querySelector("html").style.width = `${clientWidth}px`;

    styles = SetCSSVariabes({
        height: `${clientHeight}px`,
        width: `${clientWidth}px`
    })

    var tag = document.querySelector(".style-size")
    if (tag==null) {
        var tag = document.createElement("style")
        tag.classList.add("style-size")
    }
    tag.innerHTML = `
    html{
        ${styles}
    }
    `
    document.querySelector("head").prepend(tag)
}

window.addEventListener("resize", (e)=>{
    adjustScreenSize()
});
window.addEventListener("load", adjustScreenSize());