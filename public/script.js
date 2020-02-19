// Get buttons that collapse
var colButton = document.getElementsByClassName("collapsible");

// Loop through all buttons
for (var i = 0; i < colButton.length; i++) {
    colButton[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (i % 2 == 0) {
            content = this.nextElementSibling.nextElementSibling
        }
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    })
}