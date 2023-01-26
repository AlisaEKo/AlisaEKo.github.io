const dark_mode = document.createElement("button");

dark_mode.setAttribute("id", "dark_mode");
dark_mode.textContent = "Dark Mode 🌑";

dark_mode.addEventListener("click", () => {
    $("body").each(function (i) {
        if (this.style.color !== "white" && this.style.background !== "black") {
            this.style.color = "white", this.style.background = "black";
            $("#dark_mode").text("Light Mode 🌕");
        } else {
            this.style.color = "", this.style.background = "";
            $("#dark_mode").text("Dark Mode 🌑");
        }

    });
});


export { dark_mode }