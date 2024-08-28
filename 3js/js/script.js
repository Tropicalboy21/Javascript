
function hideErrorOnInput(inputId, errorId) {
    document.getElementById(inputId).addEventListener("input", function() {
        document.getElementById(errorId).style.display = "none";
    });
}

hideErrorOnInput("name", "req");
hideErrorOnInput("email", "req2");
hideErrorOnInput("message", "req3");

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name) {
        document.getElementById("req").style.display = "block";
        isValid = false;
    }

    if (!email) {
        document.getElementById("req2").style.display = "block";
        isValid = false;
    }

    if (!message) {
        document.getElementById("req3").style.display = "block";
        isValid = false;
    }

    if (isValid) {
        let params = {
            name: name,
            email: email,
            message: message
        };

        const serviceID = 'service_pcakkqr';
        const templateID = 'template_kclosz7';

        emailjs.send(serviceID, templateID, params)
        .then(() => {
            alert('Sent!');
            document.getElementById("contact-form").reset();
        }, (err) => {
            alert(JSON.stringify(err));
        });
    }
});