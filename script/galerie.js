Galerie = document.querySelector("#galerie-section .body")

fetch(`../galerie`)
    .then(resp => resp.text())
    .then(code => {
        let files = []
        let box = document.createElement("div")
        box.setAttribute("hidden", true)
        box.innerHTML = code
        let AllItem = box.querySelectorAll("li a")
        AllItem.forEach(item=>{
            if (item.classList[1] != "icon-directory"){
                files.push(item.querySelector("span.name").innerText)
            }
        })

        files.forEach(image=>{
            div = document.createElement("div")
            div.innerHTML = `<img src="${window.location.origin}/assets/galerie/${image}" loading="lazy" alt="${image}">`
            Galerie.appendChild(div)
        })
    })