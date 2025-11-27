const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');

    if(body.clasList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});
