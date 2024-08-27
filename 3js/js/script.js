function sendEmail() {
    let params = {
        name : document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_pcakkqr","template_kclosz7", params).then(alert("Email sent successfully"));
}