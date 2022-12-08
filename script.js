// Global variables
let toggleMenuStatus = false;
const getToggleMenu = document.getElementById("toggle-menu");
const getBtnColors = document.querySelectorAll("#toggle-menu ul li");
const getBtnToggleMenu = document.getElementById("btn-toggle-menu");

// Dropdown Menu
const toggleMenu = function() {

    if (toggleMenuStatus === false) {
        getToggleMenu.style.top = "60px";
        toggleMenuStatus = true;
    } else if (toggleMenuStatus === true) {
        getToggleMenu.style.top = "-112px";
        toggleMenuStatus = false;
    }
};

// Change background color buttons
const colorChange = function(e) {
    const getBodyElement = document.body;
    const getBtnColor = e.target;

    if (getBtnColor == getBtnColors[0]) {
        getBodyElement.style.backgroundColor = "#808080";
    }
    if (getBtnColor == getBtnColors[1]) {
        getBodyElement.style.backgroundColor = "#6495ed";
    }
    if (getBtnColor == getBtnColors[2]) {
        getBodyElement.style.backgroundColor = "#6b8e23";
    }
    if (getBtnColor == getBtnColors[3]) {
        getBodyElement.style.backgroundColor = "#800000";
    }
    if (getBtnColor == getBtnColors[4]) {
        getBodyElement.style.backgroundColor = "#f0e68c";
    }

    getToggleMenu.style.top = "-112px";
    toggleMenuStatus = false;
};

// Add click event listener to toggle menu button.
getBtnToggleMenu.addEventListener("click", toggleMenu);

// Add click event listeners to button elements.
getBtnColors.forEach(function(btn) {
    btn.addEventListener("click", colorChange);
});