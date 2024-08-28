
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

    if(!isValid){
        showAlert("I'm sorry", 'Please fill out all the form fields', 'failed');
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
            showAlert('Thank you', 'Your message was successfully sent.', 'success');
            document.getElementById("contact-form").reset();
        }, (err) => {
            alert(JSON.stringify(err));
        });
    }
});

function showAlert(title, message, type) {

    const alertContainer = document.getElementById('alert-container');
    const alertTitle = document.getElementById('alert-title');
    const alertMessage = document.getElementById('alert-message');
    const alertButton = document.getElementById('alert-button');

    alertContainer.style.display = 'block';
    alertTitle.textContent = title;
    alertMessage.textContent = message;

    if(type == "success"){
        alertButton.classList.add('success');
        alertButton.textContent = 'ok';
    } else {
        alertButton.classList.add('failed');
        alertButton.textContent = 'Try again';
    }

    function hideAlert() {
        alertContainer.classList.add("hide");
        setTimeout(function() {
            alertContainer.style.display = "none";
            alertContainer.classList.remove("hide");
        }, 5000);
    }

    alertButton.addEventListener("click", hideAlert);

    document.addEventListener("click", function(event) {
        if (!alertContainer.contains(event.target)) {
            hideAlert();
        }
    }, { once: true });

}

