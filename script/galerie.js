Galerie = document.querySelector("#galerie-section .body");

files = [
    "glch3.jpg",
    "glch6.jpg",
    "glch7.jpg",
    "IMG_7454.JPG",
    "IMG-20250213-WA0020.jpg",
    "IMG-20250213-WA0021.jpg",
    "IMG-20250213-WA0022.jpg",
    "IMG-20250213-WA0023.jpg",
    "IMG-20250213-WA0024.jpg",
    "IMG-20250213-WA0025.jpg",
    "IMG-20250213-WA0026.jpg",
    "IMG-20250213-WA0027.jpg",
    "IMG-20250213-WA0030.jpg",
    "IMG-20250213-WA0032.jpg",
    "IMG-20250213-WA0033.jpg",
    "IMG-20250213-WA0034.jpg",
];

files.forEach((image) => {
    div = document.createElement("div");
    div.innerHTML = `<img src="${window.location.origin}/assets/galerie/${image}" loading="lazy" alt="${image}">`;
    Galerie.appendChild(div);
});

try {
    fetch(`../galerie`)
    .then((resp) => resp.text())
    .then((code) => {
        let files = [];
        let box = document.createElement("div");
        box.setAttribute("hidden", true);
        box.innerHTML = code;
        let AllItem = box.querySelectorAll("li a");
        AllItem.forEach((item) => {
            if (item.classList[1] != "icon-directory") {
                files.push(item.querySelector("span.name").innerText);
            }
        });

        files.forEach((image) => {
            div = document.createElement("div");
            div.innerHTML = `<img src="${window.location.origin}/assets/galerie/${image}" loading="lazy" alt="${image}">`;
            Galerie.appendChild(div);
        });

    });
} catch (error) {
    
}

