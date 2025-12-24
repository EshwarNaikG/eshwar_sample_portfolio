// Menu Bar
// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
});

// Contact Form
(function () {
  emailjs.init("RaT5OTuS8MMNqvbtC"); // from EmailJS
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_adnr2h5",
    "template_70f1wyw",
    this
  ).then(
    function() {
      document.getElementById("status").innerText = "Message sent successfully!";
    },
    function(error) {
      document.getElementById("status").innerText = "Failed to send message.";
      console.error(error);
    }
  );
});