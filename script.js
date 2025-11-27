const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleButton.textContent = "Light Mode";
} else {
    toggleButton.textContent = "Dark Mode";
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');

    if(body.clasList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = "Light Mode";
    } else {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = "Dark Mode";
    }
});
