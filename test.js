
fetch("https://app.paydunya.com/api/v1/dmp-api",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "PAYDUNYA-MASTER-KEY": "7coNI6Us-dFin-2H5E-4e0D-Mz1o0BrbmurC",
        "PAYDUNYA-PRIVATE-KEY": "test_private_4wm7NE4QOBsJ0bJRNYxcLKpQ3Vj",
        "PAYDUNYA-TOKEN": "Bsu2e5YxJtLl2cJJX8qN"
    },
    body: JSON.stringify({
        "recipient_email": "mbpavel21@gmail.com",
        "recipient_phone": "659155723",
        "amount": 1250,
        "support_fees": 0,
        "send_notification": 0
    })
})