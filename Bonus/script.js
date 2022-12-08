// Global variables.
let toggleMenuStatus = false;
const getBodyElement = document.body;
const getToggleMenu = document.getElementById("toggle-menu");
const getBtnColors = document.querySelectorAll("#toggle-menu ul li");
const getBtnToggleMenu = document.getElementById("btn-toggle-menu");
const getTextColorName = document.querySelector("#container h1");

// Dropdown mouseover menu.
const menuDown = function() {
    getToggleMenu.style.top = "60px";
    toggleMenuStatus = true;
    getToggleMenu.addEventListener("mouseleave", function(){
        getToggleMenu.style.top = "-116px";
        toggleMenuStatus = false;
    });
};

// Change background color radio & buttons.
const colorChange = function(e) {
    const getBtnColor = e.target;
    const getRadioButtons = document.querySelectorAll("#toggle-menu ul li input");

    if (getBtnColor == getBtnColors[0] || getRadioButtons[0].checked == true) {
        getBodyElement.style.backgroundColor = "#808080";
        document.getElementById("grey").checked = true;
        getTextColorName.innerHTML = "Grey";
    }
    if (getBtnColor == getBtnColors[1] || getRadioButtons[1].checked == true) {
        getBodyElement.style.backgroundColor = "#6495ed";
        document.getElementById("blue").checked = true;
        getTextColorName.innerHTML = "Blue";
    }
    if (getBtnColor == getBtnColors[2] || getRadioButtons[2].checked == true) {
        getBodyElement.style.backgroundColor = "#6b8e23";
        document.getElementById("green").checked = true;
        getTextColorName.innerHTML = "Green";
    }
    if (getBtnColor == getBtnColors[3] || getRadioButtons[3].checked == true) {
        getBodyElement.style.backgroundColor = "#800000";
        document.getElementById("red").checked = true;
        getTextColorName.innerHTML = "Red";
    }
    if (getBtnColor == getBtnColors[4] || getRadioButtons[4].checked == true) {
        getBodyElement.style.backgroundColor = "#f0e68c";
        document.getElementById("yellow").checked = true;
        getTextColorName.innerHTML = "Yellow";
    }

    getToggleMenu.style.top = "-112px";
    toggleMenuStatus = false;
};

// Change background color keys.
const numberPress = function(e) {
    if (e.key === "1") {
        getBodyElement.style.backgroundColor = "#808080";
        document.getElementById("grey").checked = true;
        getTextColorName.innerHTML = "Grey";        
    } 
    if (e.key === "2") {
        getBodyElement.style.backgroundColor = "#6495ed";
        document.getElementById("blue").checked = true;
        getTextColorName.innerHTML = "Blue";
    } 
    if (e.key === "3") {
        getBodyElement.style.backgroundColor = "#6b8e23";
        document.getElementById("green").checked = true;
        getTextColorName.innerHTML = "Green";
    } 
    if (e.key === "4") {
        getBodyElement.style.backgroundColor = "#800000";
        document.getElementById("red").checked = true;
        getTextColorName.innerHTML = "Red";
    } 
    if (e.key === "5") {
        getBodyElement.style.backgroundColor = "#808080";
        getBodyElement.style.backgroundColor = "#f0e68c";
        document.getElementById("yellow").checked = true;
        getTextColorName.innerHTML = "Yellow";
    } 
};

//Event listeners.
document.getElementById("grey").checked = true;

getBtnToggleMenu.addEventListener("mouseover", menuDown);

getBtnColors.forEach(function(btn) {
    btn.addEventListener("click", colorChange);
});

getBodyElement.addEventListener("keypress", numberPress);