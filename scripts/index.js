window.addEventListener("ready", () => {
    
    let obj      = document.getElementById("adjectives"),
        i        = 0,
        arr      = ['writes code.',
                    'likes animes.',
                    'does kawaii stuff.',
                    'listens to music.',
                    'runs projects.',
                    'does quick maths.'],
        text     = "",
        deleting = true;

    function a() {

        if(deleting) {
            text = text.substring(0, text.length - 1);
        } else {
            text += arr[i].charAt(text.length);
        }

        obj.innerText = text;

        let del = deleting?50:100;

        if((deleting && text === '') || (!deleting && text === arr[i])) {
            deleting = !deleting;
            del = 500;
            i++;
            if(i>=arr.length) i = 0;
        }

        setTimeout(()=>{a()}, del);
    }

    setTimeout(a, 500);
});