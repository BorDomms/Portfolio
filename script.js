const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const transitionDuration = 1000; // duration in milliseconds, matches your CSS

// Set initial state based on localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleButton.textContent = "Light Mode";
} else {
    toggleButton.textContent = "Dark Mode";
}

toggleButton.addEventListener('click', () => {
    // Disable the button immediately
    toggleButton.disabled = true;

    // Toggle theme
    body.classList.toggle('dark');

    // Update localStorage and button text
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = "Light Mode";
    } else {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = "Dark Mode";
    }

    // Re-enable button after transition finishes
    setTimeout(() => {
        toggleButton.disabled = false;
    }, transitionDuration);
});
