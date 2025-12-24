// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
});

// CONTACT FORM (Frontend Simulation)

// document.getElementById("contactForm").addEventListener("submit", function (e) {
//     e.preventDefault();

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;
//     let status = document.getElementById("formStatus");

//     if (name && email && message) {
//         status.style.color = "lightgreen";
//         status.innerText = "Message sent successfully!";
//         this.reset();
//     } else {
//         status.style.color = "red";
//         status.innerText = "Please fill all fields!";
//     }
// });
