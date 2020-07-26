window.addEventListener("DOMContentLoaded", () => {

    let i       = ("root@geshii.moe:/# ").length,
        element = document.getElementById("terminal"),
        target  = "root@geshii.moe:/# init ./kawaii_power/index.html",
        wait    = 100,
        s       = "";

    if(new URLSearchParams(window.location.search).get("loader") == "false" || ((window.innerWidth > 0) ? window.innerWidth : screen.width) < 911) {
        element.innerHTML = target.replace(" ", "&nbsp;");
        return window.dispatchEvent(new Event('ready'));
    }

    element.innerHTML = "root@geshii.moe:/# ".replace(" ", "&nbsp;");

    function doIt() {
        if(i < target.length) {
            element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length - 1) + target.charAt(i).replace(" ", "&nbsp;") + "_";
            i++;
            setTimeout(doIt, wait+Math.floor(Math.random()*11));
            return;
        }
        element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length - 1) + "<br />_";
        setTimeout(() => {
            element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length - 1) + "&nbsp;";
            setTimeout(() => {
                element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length - 1) + "_";
                setTimeout(() => {
                    element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length - 1) + "&nbsp;";
                    window.dispatchEvent(new Event('ready'));
                }, 500)
            }, 500)
        }, 500)
    }

    setTimeout(doIt, wait+Math.floor(Math.random()*11))
});