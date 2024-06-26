const changeTheme = document.getElementById('switch');
const slider = document.querySelector('.slider');
const elems = document.querySelectorAll('*');

changeTheme.addEventListener('change', changeToTheme);

// On Ready
const mode = localStorage.getItem('mode');
if (mode == 'dark') {
    changeTheme.checked = false;
    changeToTheme()
    // document.documentElement.classList.remove("light")
    // document.documentElement.classList.add("dark")
}

if (mode == 'light') {
    changeTheme.checked = true;
    changeToTheme()
    // document.documentElement.classList.remove("dark")
    // document.documentElement.classList.add("light")
}




function changeToTheme(e) {
    if (changeTheme.checked === true) {
        console.log("Checked light")
        // document.documentElement.classList.remove("dark");
        // document.documentElement.classList.add("light");
        localStorage.setItem('mode', 'light');
        slider.classList.add('right');
        slider.classList.remove('left');

        // Dark theme Changing
        elems.forEach(element => {
            element.classList.add('light');
        })
    } else {
        console.log("Not Checked dark")
        // document.documentElement.classList.remove("dark")
        // document.documentElement.classList.add("light")
        localStorage.setItem('mode', 'dark')
        slider.classList.remove('right');
        slider.classList.remove('left');

        // Light Theme Changing
        elems.forEach(element => {
            element.classList.remove('light');
        })
    }
}