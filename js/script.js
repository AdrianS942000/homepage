{
    const welcome = () => {
        console.log("Cześć!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body-js")
        const themeName = document.querySelector(".themeName")

        body.classList.toggle("dark")
        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny"
    };

    const init = () => {
        const button = document.querySelector(".button-js")

        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}