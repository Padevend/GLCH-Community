'use-strict'

var all_fac = document.querySelectorAll("article section#fac")
all_fac.forEach(item=>{
    item.addEventListener("click", ()=>{
        all_fac.forEach(node=>{
            node.classList.remove("active");
        })
        item.classList.add("active")
    })
})

console.log(all_fac)