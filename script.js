// script.js

// Funkcija za validaciju forme
function validateForm(event) {
    event.preventDefault(); // Sprečava slanje forme
    
    let email = document.getElementById("email").value;
    let confirmEmail = document.getElementById("confirm-email").value;
    
    if (email !== confirmEmail) {
        alert("Email adrese se ne poklapaju! Molimo unesite ponovo.");
        return false;
    }
    
    alert("Forma je uspešno poslata!");
    return true;
}

// Dodavanje event listener-a za submit dugme
document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", validateForm);
    }
});