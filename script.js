document.getElementById('surprise-button').addEventListener('click', function() {
    const message = document.getElementById('surprise-message');
    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden');
        this.textContent = "You're the best!"; // Change button text after click
    } else {
        message.classList.add('hidden');
        this.textContent = "Click for a surprise!";
    }
});
