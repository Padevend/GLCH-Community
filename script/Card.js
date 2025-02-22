'use-strict'
const googlesheets_scriptURL = 'https://script.google.com/macros/s/AKfycbz7oX2vYdUtuuUx7IARX_uuwSQAD2ho6h_4jxayu7CNLFnIiPF4tCKzxD3Ol1KNg1wPqA/exec'

ECHELLE = 0.75*0.75
function generateCard(data){
    let files = []

    //front face 
    const canvas = document.getElementById("card-Canvas-front");
    const cardImageFront = new Image()
    cardImageFront.src = `${window.location.origin}/assets/img/model/Card_front_model.png`
    cardImageFront.onload = ()=>{
        canvas.width = cardImageFront.width*ECHELLE
        canvas.height = cardImageFront.height*ECHELLE
        const ctx = canvas.getContext("2d")

        ctx.drawImage(cardImageFront, 0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#000";
        ctx.font = `bolder ${40*ECHELLE}px Arial`
        ctx.fillText(`${data.name} ${data.surname}`, 360*ECHELLE, 300*ECHELLE)
        ctx.fillStyle = "#4d0a83";
        ctx.font = `${30*ECHELLE}px Arial`
        ctx.fillText(data.id, 665*ECHELLE, 460*ECHELLE)

        
        files.push({
            name: `card_${data.number}_front.png`,
            content: canvas.toDataURL("image/png")
        });
    }

    //back face
    const canvasBack = document.getElementById("card-Canvas-back");
    const cardImageBack = new Image()
    cardImageBack.src = `${window.location.origin}/assets/img/model/Card_back_model.png`
    cardImageBack.onload = ()=>{
        canvasBack.width = cardImageBack.width*ECHELLE
        canvasBack.height = cardImageBack.height*ECHELLE
        const ctxf = canvasBack.getContext("2d")

        ctxf.drawImage(cardImageBack, 0, 0, canvas.width, canvas.height);

        ctxf.fillStyle = "#fff";
        ctxf.font = `${20*ECHELLE}px Arial`
        ctxf.fillText(data.expiryDate, 550*ECHELLE, 590*ECHELLE)
        
        files.push({
            name: `card_${data.number}_back.png`,
            content: canvasBack.toDataURL("image/png")
        });
    }

    
}

var select = document.querySelector("article section#card-section form div.input select")
var price_tag = document.querySelector("article section#card-section form div.input span.price")
select.addEventListener("change", (e)=>{
    switch (select.value) {
        case "actif":
            price_tag.innerHTML = 10000;
            price_tag.removeAttribute("contenteditable")
            break
        case "honneur":
            price_tag.innerHTML = 50000;
            price_tag.removeAttribute("contenteditable")
            break
        case "donateur":
            price_tag.setAttribute("contenteditable","true")
            price_tag.innerHTML = 50000;
            price_tag.focus()
            
    }
})

const allowedChars = /^[0-9]+$/
price_tag.addEventListener("keydown", (e)=>{
    if(!allowedChars.test(e.key)&&e.code !== "Backspace"){
        e.preventDefault()
    }
})
price_tag.addEventListener("focusout", (e)=>{
    value = parseInt(e.srcElement.innerHTML)
    if (value==NaN || value<50000) {
        e.srcElement.innerHTML = 50000
    }
})

var form = document.querySelector("article section#card-section form")
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    let data = {}
    for (let [key, value] of formData.entries()) {
        data[key] = value
    }

    let complet_name = `${data.name} ${data.surname}`.split(" ")
    let init = ""
    for(i in complet_name){
        init += complet_name[i][0].toUpperCase()
    }
    data["id"] = init
    let expiry_date = getExpiryDate()
    let create_date = new Date().toLocaleDateString()
    data["expiryDate"] = expiry_date
    data["createDate"] = create_date

    info_tag = document.querySelector("article section#card-section form div.info span")
    info_tag.removeAttribute("hidden")
    if( parseInt(data.type=="donateur" && (parseInt(price_tag.innerHTML)<=50000 || parseInt(price_tag.innerHTML)==NaN || parseInt(price_tag.innerHTML)%5!=0))){
        price_tag.focus()
        info_tag.classList.add("error")
        info_tag.innerHTML = "Invalid price (Warning: must be a multiple of 5 greater than 50,000)"
    }else{
        generateCard(data)
        document.querySelector("article section#card-section .body").removeAttribute("hidden")

        const downLink = document.getElementById("card-downloader")
        let montant = parseInt(price_tag.innerHTML)
        downLink.addEventListener("click",  ()=>{
            //Initialisation du payement
            CinetPay.setConfig({
                apikey: '212083474467b730b992a6d7.93641256',
                site_id: "105888342",
                notify_url: `https://${window.location.href}`,
                close_after_response: true,
                mode: 'PRODUCTION'
            });
            
            //effectue le payement
            CinetPay.getCheckout({
                transaction_id: Math.floor(Math.random() * 100000000).toString(),
                amount: 100,
                currency: 'XAF',
                channels: 'MOBILE_MONEY',
                description: 'Payement souscription a la carte de membres GLCH',
            });

            //Attente de la confirmation du payment
            CinetPay.waitResponse(function(data) {
                if (data.status == "REFUSED") {
                    info_tag.classList.add("error")
                    info_tag.innerHTML = "Your payment as failed"
                } else if (data.status == "ACCEPTED") {
                    info_tag.classList.remove("error")
                    info_tag.innerHTML = "Your payment is successful"

                    //Envoi des donnée a googlesheets app
                    fetch(`${googlesheets_scriptURL}?${new URLSearchParams(data).toString()}`)
                        .then(response => {

                            //Telechargemenr des cartes de membres en fichiers images
                            files.forEach(link=>{
                                a = document.createElement("a")
                                a.href = link.content 
                                a.download =  link.name
                                document.body.appendChild(a)
                                a.click()
                                document.body.removeChild(a)
                            })
                            alert("Thank you! Form is submitted" )
                        })
                        .catch(error => console.error('Error!', error.message))
                }
            });

            CinetPay.onError(function(data) {
                console.log(data);
            });
        })
        
    }
    
});

function getExpiryDate(){
    var date = new Date()
    date.setDate(date.getDate()+365)

    return date.toLocaleDateString()
}

