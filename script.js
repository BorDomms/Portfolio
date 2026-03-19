const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const transitionDuration = 800;

if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light');
    toggleButton.textContent = "  ⏾  ";
} else {
    toggleButton.textContent = "  ☀  ";
}

toggleButton.addEventListener('click', () => {
    toggleButton.disabled = true;
    body.classList.toggle('light');

    if (body.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = "  ⏾  ";
    } else {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = "  ☀  ";
    }

    setTimeout(() => {
        toggleButton.disabled = false;
    }, transitionDuration);
});