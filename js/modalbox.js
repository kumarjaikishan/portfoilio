
const contactForm = document.getElementById('contactForm');
const successToastEl = document.getElementById('successToast');
const successToast = new bootstrap.Toast(successToastEl);

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Here you can add an AJAX request to send form data to backend/server
    // Example: fetch('your-server-endpoint', {...})

    // Reset form
    contactForm.reset();

    // Close modal
    const contactModalEl = document.getElementById('contactModal');
    const modal = bootstrap.Modal.getInstance(contactModalEl);
    modal.hide();

    // Show toast
    successToast.show();
});
