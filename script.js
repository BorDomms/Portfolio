const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const transitionDuration = 800;
const profileImg = document.getElementById('profile-img');

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleButton.textContent = "Light Mode";
} else {
    toggleButton.textContent = "Dark Mode";
}

toggleButton.addEventListener('click', () => {
    toggleButton.disabled = true;
    profileImg.classList.add('pulse');
    body.classList.toggle('dark');
    
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = "Light Mode";
    } else {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = "Dark Mode";
    }

    setTimeout(() => {
        profileImg.classList.remove('pulse');
        toggleButton.disabled = false;
    }, transitionDuration);
});
