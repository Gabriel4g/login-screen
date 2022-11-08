const buttonprimary = window.document.getElementById("button-primary");
const buttonsecondary = window.document.getElementById("button-secondary");
let buttonlightmode = window.document.getElementById("lightmode");
let buttondarkmode = window.document.getElementById("darkmode");

const side = document.getElementById("side");
let email = document.getElementById("email-input")
let senha = document.getElementById("password");

function rotatedark() {
    buttondarkmode.style.animation = "rotate 1s";
    setTimeout(() => {
        buttondarkmode.style.animation = "";
    }, 1000)
}

function rotatelight() {
    buttonlightmode.style.animation = "rotate 1s";

    setTimeout(() => {
        buttonlightmode.style.animation = ""
    }, 1000)
}

darkmode.addEventListener('click', (e) => {
    e.preventDefault();

    rotatedark();
    document.body.style.backgroundColor = "#1A202C";
    document.body.style.color = "#ffff";
    buttondarkmode.style.border = "2px solid #ffff";
    buttonlightmode.style.background = "#ffff";
    buttondarkmode.style.background = "#74b6f0";
    side.style.background = "#252c3a";
    document.body.style.transition = "700ms ease";
    side.style.transition = "500ms ease";
    /* if (darkmode.innerHTML == "Light mode") {
        location.reload()
    } */
})

function light() {
    document.body.style.background = "#ffff";
    document.body.style.color = "#1A202C";
    buttondarkmode.style.border = "2px solid #1A202C";
    buttonlightmode.style.border = "2px solid #1A202C";
    buttonlightmode.style.background = "#ffff00";
    buttondarkmode.style.background = "#ffff";
    side.style.background = "#F7FAFC";
    rotatelight()
}

lightmode.addEventListener('click', (e) => {
    e.preventDefault()

    light();
})

buttonprimary.addEventListener('click', (e) => {
    e.preventDefault();

    let saveemail = localStorage.setItem("email", email.value);

    let savepass = localStorage.setItem("password", senha.value);

    { email.value === "" || senha.value === "" ? localStorage.clear() : console.log("certo") };
})

const btnSenha = document.querySelector("#btn-senha")
const userPassword = document.querySelector("#password-value");

function showPassword() {
    if(senha.getAttribute("type") === "password") {
        senha.setAttribute("type", "text");
        btnSenha.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-check" width="25" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="12" cy="12" r="2" />
        <path d="M12 19c-4 0 -7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7c-.42 .736 -.858 1.414 -1.311 2.033" />
        <path d="M15 19l2 2l4 -4" />
      </svg>
        `
    }

    else {
        senha.setAttribute("type", "password");
        btnSenha.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="25" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="3" y1="3" x2="21" y2="21" />
        <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
        <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
      </svg>
        `
    }
}

btnSenha.addEventListener('click', (e) => {
    e.preventDefault();
    
    showPassword()
})

