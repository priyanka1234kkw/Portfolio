document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        alert("Your message has been sent!");
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill out all fields.");
    }
});
