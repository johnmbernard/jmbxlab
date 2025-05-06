function toggleBubble(element) {
    element.classList.toggle('expanded');
}

function toggleContactForm() {
    const modal = document.getElementById('contact-modal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}

function showSuccessMessage(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you! I will get back to you soon! :)');
    toggleContactForm(); // Close the modal
}