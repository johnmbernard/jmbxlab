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