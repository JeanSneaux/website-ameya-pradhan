document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('navLinks');

    // Toggle Mobile Navigation
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        // Burger Animation (Optional: adds a twist effect)
        burger.classList.toggle('toggle');
    });

    // Form Submission Handler (Visual Feedback only)
    const form = document.getElementById('contactForm');
    if(form){
        form.addEventListener('submit', function(e) {
            // If you are NOT using Formspree, uncomment the line below to stop page reload
            // e.preventDefault(); 
            // alert('Thank you for your message!');
        });
    }
});
