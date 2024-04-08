var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

const menuBtn = document.querySelector('.menu-btn');
var options = this.nextElementSibling;
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        options.style.maxHeight = content.scrollHeight + "px";
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        options.style.maxHeight = null;
    }
});