const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const transitionDuration = 800;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleButton.textContent = "  ☀  ";
} else {
    toggleButton.textContent = "  ⏾  ";
}

toggleButton.addEventListener('click', () => {
    toggleButton.disabled = true;
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = "  ☀  ";
    } else {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = "  ⏾  ";
    }

    setTimeout(() => {
        toggleButton.disabled = false;
    }, transitionDuration);
});
