console.log("Cześć, witam w BEM-4!");

let button = document.querySelector(".button-js")
let body = document.querySelector(".body-js")
let themeName = document.querySelector(".themeName")

button.addEventListener("click", () => {
    body.classList.toggle("dark")

    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny"
})