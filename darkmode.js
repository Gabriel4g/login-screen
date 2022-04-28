const buttonprimary = window.document.getElementById("#button-primary");

const buttonsecondary = window.document.getElementById("#button-secondary");

let bodybackground = window.document.getElementById("body");

let buttonlightmode = window.document.getElementById("lightmode");

let buttondarkmode = window.document.getElementById("darkmode");

const side = document.getElementById("side");


function rotatedark () {
    buttondarkmode.style.animation = "rotate 1s";
    setTimeout(() => {
        buttondarkmode.style.animation = "";
    }, 1000)
}


function rotatelight () {
    buttonlightmode.style.animation = "rotate 1s";

    setTimeout(() => {
        buttonlightmode.style.animation = ""
    }, 1000)
}

darkmode.addEventListener('click', (e) => {
    e.preventDefault();

    rotatedark();
    bodybackground.style.backgroundColor = "#1A202C";
    bodybackground.style.color = "#ffff";
    buttondarkmode.style.border = "2px solid #ffff";
    buttonlightmode.style.background = "#ffff";
    buttondarkmode.style.background = "#74b6f0";
    side.style.background = "#252c3a";
    bodybackground.style.transition = "700ms ease";
    side.style.transition = "500ms ease";
    /* if (darkmode.innerHTML == "Light mode") {
        location.reload()
    } */
})

function light () {
    bodybackground.style.background = "#ffff";
    bodybackground.style.color = "#1A202C";
    buttondarkmode.style.border = "2px solid #1A202C";
    buttonlightmode.style.border = "2px solid #1A202C";
    buttonlightmode.style.background = "#ffff00";
    buttondarkmode.style.background = "#ffff";
    side.style.background = "#F7FAFC";
    rotatelight()
}

lightmode.addEventListener('click', (e) => {
    e.preventDefault()

    light()
})

