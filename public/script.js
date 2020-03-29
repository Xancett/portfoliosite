// Initialize
(function() {
    // Grab each link that opens a modal
    const modalLinks = document.querySelectorAll('#modal-link');
    modalLinks.forEach(link => {
        // Set event listener for each link
        link.addEventListener('click', () => {
            // Set link that source will use, change based on data-value
            var newImage = "";
            switch(link.getAttribute('data-value')) {
                case 'hangman':
                    newImage = "images/Hangman.png";
                    break;
                case 'directoryemail':
                    newImage = "images/directorytoemail.png";
                    break;
            }
            // Update the new image
            document.getElementById("singleModal").children[1].setAttribute("src", newImage);
            // Display the modal
            document.getElementById("singleModal").style.display = "block";
        })
    })
    // Set event listener for the close button
    document.getElementsByClassName("close")[0].addEventListener('click', () => {
        document.getElementById("singleModal").style.display = "none";
    })
})();


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById("singleModal")) {
    document.getElementById("singleModal").style.display = "none";
  }
}
