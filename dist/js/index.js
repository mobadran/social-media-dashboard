const changeTheme = document.getElementById('switch');
const slider = document.querySelector('.slider');
const elems = document.querySelectorAll('*');


// Functions
function changeToTheme(e) {
    if (changeTheme.checked === true) {
        console.log("Checked light")
        localStorage.setItem('mode', 'light');
        slider.classList.add('right');
        slider.classList.remove('left');

        // Light theme Changing
        elems.forEach(element => {
            element.classList.add('light');
        });

    } else {
        console.log("Not Checked dark")
        localStorage.setItem('mode', 'dark')
        slider.classList.remove('right');
        slider.classList.add('left');

        // Dark Theme Changing
        elems.forEach(element => {
            element.classList.remove('light');
        });
    }
}


changeTheme.addEventListener('change', changeToTheme);


// On Ready
const mode = localStorage.getItem('mode');
if (mode == 'dark') {
    changeTheme.checked = false;
    changeToTheme()
}

if (mode == 'light') {
    changeTheme.checked = true;
    changeToTheme()
}