'use-strict'
<<<<<<< HEAD
const googlesheets_scriptURL = 'https://script.google.com/macros/s/AKfycbz9VIeqNvPJypBtpm7TEDSTwxulk78ILi0oM3ubMp7fNMIiHzWC4enUs7iQio9NfQPwSg/exec'
const payement_service = 'http://127.0.0.1:8089/pay'

ECHELLE = 0.75 * 0.75
function generateCard(data) {
=======
const googlesheets_scriptURL = 'https://script.google.com/macros/s/AKfycbz7oX2vYdUtuuUx7IARX_uuwSQAD2ho6h_4jxayu7CNLFnIiPF4tCKzxD3Ol1KNg1wPqA/exec'

ECHELLE = 0.75*0.75
function generateCard(data){
>>>>>>> 3cebd38f0a49b6d2f17e5d2ec9bd693498a097d4
    let files = []

    //front face 
    const canvas = document.getElementById("card-Canvas-front");
    const cardImageFront = new Image()
    cardImageFront.src = `${window.location.origin}/assets/img/model/Card_front_model.png`
<<<<<<< HEAD
    cardImageFront.onload = () => {
        canvas.width = cardImageFront.width * ECHELLE
        canvas.height = cardImageFront.height * ECHELLE
=======
    cardImageFront.onload = ()=>{
        canvas.width = cardImageFront.width*ECHELLE
        canvas.height = cardImageFront.height*ECHELLE
>>>>>>> 3cebd38f0a49b6d2f17e5d2ec9bd693498a097d4
        const ctx = canvas.getContext("2d")

        ctx.drawImage(cardImageFront, 0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#000";
<<<<<<< HEAD
        ctx.font = `bolder ${40 * ECHELLE}px Arial`
        ctx.fillText(`${data.name} ${data.surname}`, 360 * ECHELLE, 300 * ECHELLE)
        ctx.fillStyle = "#4d0a83";
        ctx.font = `${30 * ECHELLE}px Arial`
        ctx.fillText(data.id, 665 * ECHELLE, 460 * ECHELLE)


=======
        ctx.font = `bolder ${40*ECHELLE}px Arial`
        ctx.fillText(`${data.name} ${data.surname}`, 360*ECHELLE, 300*ECHELLE)
        ctx.fillStyle = "#4d0a83";
        ctx.font = `${30*ECHELLE}px Arial`
        ctx.fillText(data.id, 665*ECHELLE, 460*ECHELLE)

        
>>>>>>> 3cebd38f0a49b6d2f17e5d2ec9bd693498a097d4
        files.push({
            name: `card_${data.number}_front.png`,
            content: canvas.toDataURL("image/png")
        });
    }

    //back face
    const canvasBack = document.getElementById("card-Canvas-back");
    const cardImageBack = new Image()
    cardImageBack.src = `${window.location.origin}/assets/img/model/Card_back_model.png`
<<<<<<< HEAD
    cardImageBack.onload = () => {
        canvasBack.width = cardImageBack.width * ECHELLE
        canvasBack.height = cardImageBack.height * ECHELLE
=======
    cardImageBack.onload = ()=>{
        canvasBack.width = cardImageBack.width*ECHELLE
        canvasBack.height = cardImageBack.height*ECHELLE
>>>>>>> 3cebd38f0a49b6d2f17e5d2ec9bd693498a097d4
        const ctxf = canvasBack.getContext("2d")

        ctxf.drawImage(cardImageBack, 0, 0, canvas.width, canvas.height);

        ctxf.fillStyle = "#fff";
<<<<<<< HEAD
        ctxf.font = `${20 * ECHELLE}px Arial`
        ctxf.fillText(data.expiryDate, 550 * ECHELLE, 590 * ECHELLE)

=======
        ctxf.font = `${20*ECHELLE}px Arial`
        ctxf.fillText(data.expiryDate, 550*ECHELLE, 590*ECHELLE)
        
>>>>>>> 3cebd38f0a49b6d2f17e5d2ec9bd693498a097d4
        files.push({
            name: `card_${data.number}_back.png`,
            content: canvasBack.toDataURL("image/png")
        });
    }

<<<<<<< HEAD

=======
    
>>>>>>> 3cebd38f0a49b6d2f17e5d2ec9bd693498a097d4
}

var select = document.querySelector("article section#card-section form div.input select")
var price_tag = document.querySelector("article section#card-section form div.input span.price")
<<<<<<< HEAD
select.addEventListener("change", (e) => {
=======
select.addEventListener("change", (e)=>{
>>>>>>> 3cebd38f0a49b6d2f17e5d2ec9bd693498a097d4
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
<<<<<<< HEAD
            price_tag.setAttribute("contenteditable", "true")
            price_tag.innerHTML = 50000;
            price_tag.focus()

=======
            price_tag.setAttribute("contenteditable","true")
            price_tag.innerHTML = 50000;
            price_tag.focus()
            
>>>>>>> 3cebd38f0a49b6d2f17e5d2ec9bd693498a097d4
    }
})

const allowedChars = /^[0-9]+$/
<<<<<<< HEAD
price_tag.addEventListener("keydown", (e) => {
    if (!allowedChars.test(e.key) && e.code !== "Backspace") {
        e.preventDefault()
    }
})

price_tag.addEventListener("focusout", (e) => {
    value = parseInt(e.srcElement.innerHTML)
    if (value == NaN || value < 50000) {
=======
price_tag.addEventListener("keydown", (e)=>{
    if(!allowedChars.test(e.key)&&e.code !== "Backspace"){
        e.preventDefault()
    }
})
price_tag.addEventListener("focusout", (e)=>{
    value = parseInt(e.srcElement.innerHTML)
    if (value==NaN || value<50000) {
>>>>>>> 3cebd38f0a49b6d2f17e5d2ec9bd693498a097d4
        e.srcElement.innerHTML = 50000
    }
})

var form = document.querySelector("article section#card-section form")
<<<<<<< HEAD
form.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Carte preview 
    // let card_preview = document.querySelector("article section#card-section .body")
    // card_preview.removeAttribute("hidden")
    // card_preview.addEventListener("contextmenu", (e) => {
    //     e.preventDefault()
    // })

    const form = event.target;
    const formData = new FormData(form);
    from.setAttribute("hidden", "true")
=======
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
>>>>>>> 3cebd38f0a49b6d2f17e5d2ec9bd693498a097d4

    let data = {}
    for (let [key, value] of formData.entries()) {
        data[key] = value
    }

<<<<<<< HEAD
=======
    let complet_name = `${data.name} ${data.surname}`.split(" ")
    let init = ""
    for(i in complet_name){
        init += complet_name[i][0].toUpperCase()
    }
    data["id"] = init
>>>>>>> 3cebd38f0a49b6d2f17e5d2ec9bd693498a097d4
    let expiry_date = getExpiryDate()
    let create_date = new Date().toLocaleDateString()
    data["expiryDate"] = expiry_date
    data["createDate"] = create_date

    info_tag = document.querySelector("article section#card-section form div.info span")
    info_tag.removeAttribute("hidden")
<<<<<<< HEAD
    if (parseInt(data.type == "donateur" && (parseInt(price_tag.innerHTML) <= 50000 || parseInt(price_tag.innerHTML) == NaN || parseInt(price_tag.innerHTML) % 5 != 0))) {
        price_tag.focus()
        info_tag.classList.add("error")
        info_tag.innerHTML = "Invalid price (Warning: must be a multiple of 5 greater than 50,000)"
    } else {

        //recuperation du dernier champ rempli
        fetch(`${googlesheets_scriptURL}?action=getLast`, {
            method: "GET"
        })
            .then(response => response.json())
            .then(async row => {
                last = parseInt(row.last) + 1

                //get new id
                number = ""
                for (let i = 1; i <= 4 - last.toString().length; i++) {
                    number += "0"
                }
                number += last.toString()

                let complet_name = `${data.name} ${data.surname}`.split(" ")
                let init = ""
                for (let i in complet_name) {
                    init += complet_name[i][0].toUpperCase()
                }
                data["id"] = `${init}-300-${number}`
                data["type"] = "LIBRE"

                // payement de la cartes
                let amount = parseInt(price_tag.innerHTML)

                async function isSucess() {
                    window.location = "https://glchcommunity.onrender.com/"
                }

                if (amount !== 0) {
                    await axios.post(`${payement_service}/${data["id"]}`, {
                        amount: 2,
                        currency: "XAF"
                    }, {
                        headers: {
                            "x-api-key": "ae7b5fa9-dec5-49ff-8b0a-a27833a4875d",
                            "Access": "*/*"
                        }
                    }
                    )
                        .then(resp => {
                            let status = resp["data"].status;
                            isSucess()
                        })
                }else{
                    isSucess()
                }


            })
            .catch(err => console.log(err))

        // const downLink = document.getElementById("card-downloader")
        // let montant = parseInt(price_tag.innerHTML)
        // downLink.addEventListener("click", () => {


        // })

    }

});

function getExpiryDate() {
    var date = new Date();
    date.setDate(date.getDate() + 365);

    return date.toLocaleDateString();
}

//mark required fiels in register form
var all_fields = document.querySelectorAll("article section#card-section form div.input")
all_fields.forEach(box => {
    let isRequired = box.querySelector("input")?.required;
    if (isRequired) {
        let label = box.querySelector("label");
        let content = `${label.innerText.split(" ")[0]} <span style="color:red;">*</span> :`;
        label.innerHTML = content;
    }
})
=======
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
                amount: momtant,
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

>>>>>>> 3cebd38f0a49b6d2f17e5d2ec9bd693498a097d4
