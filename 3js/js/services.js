// const { title } = require("process");

document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('click', function() {
        document.querySelectorAll('.service').forEach(s => s.classList.remove('active'));
        this.classList.add('active');
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.service.active')) {
        document.querySelectorAll('.service').forEach(s => s.classList.remove('active'));
    }
});