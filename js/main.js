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

function appearButton() {
    setInterval(() => {
        if (senha.value) {
            return btnSenha.style.opacity = 1
        }

        return btnSenha.style.opacity = 0
    }, 100);
}

appearButton()

function showPassword() {
    const clone_password = userPassword.classList.toggle("opacity");

    if (clone_password) {
        btnSenha.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock-open" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <circle cx="12" cy="16" r="1" />
        <path d="M8 11v-5a4 4 0 0 1 8 0" />
      </svg>
        `
    }

    else {
        btnSenha.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <circle cx="12" cy="16" r="1" />
        <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
      </svg>
        `
    }

    setInterval(() => {
        userPassword.innerHTML = senha.value
    }, 100)
}

btnSenha.addEventListener('click', (e) => {
    e.preventDefault();

    showPassword()
})

