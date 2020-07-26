window.addEventListener("DOMContentLoaded", () => {
    console.log("(!) DOM content fully loaded.");
});

window.addEventListener("ready", () => {
    console.log("(げしい) Initializing kawaii vibes...")
    console.log("(げしい) Chill music loaded !")
    console.log("(!) Loader finished its work, time to show the page! Remember, don't use the Konami Code! o/");
    console.log("%c+","font-size: 1px; padding: 180px 320px; line-height: 360px; background: url(https://media.giphy.com/media/KzncWuMQUrDPwDwBqW/giphy.gif); background-size: 640px 360px; color: transparent;");
    document.querySelector("body").removeAttribute("class");
    try {
        document.querySelector(".terminal").remove();
        document.querySelectorAll(".page").forEach(s=>s.removeAttribute("hidden"));
        document.querySelectorAll(".background").forEach(s=>s.removeAttribute("hidden"));
    } catch(ex) {}
});

function redir(url) {
    window.open(url,'_blank').focus();
}