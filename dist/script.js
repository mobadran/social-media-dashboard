const darkModeToggle = document.getElementById('darkModeToggle');

document.addEventListener('DOMContentLoaded', e => {
    document.documentElement.classList[0] == 'dark' ? document.getElementById('darkModeToggle').checked = true : document.getElementById('darkModeToggle').checked = false;
});

darkModeToggle.addEventListener('change', e => {
    e.target.checked ? localStorage.theme = 'dark' : localStorage.theme = 'light';
    changeTheme()
});

function changeTheme() {
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
}