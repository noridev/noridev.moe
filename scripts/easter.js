// Building a keymap
const keys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b',
    69: 'e',
    71: 'g',
    72: 'h',
    73: 'i',
    83: 's'
};

// Registering our keyconst
const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
const geshiiCode = ['g', 'e', 's', 'h', 'i', 'i'];

let konamiCodePosition = 0;
let geshiiCodePosition = 0;

document.addEventListener('keydown', (e) => {
    let key = keys[e.keyCode];
    if(!key) {
        konamiCodePosition = 0;
        geshiiCodePosition = 0;
        return;
    }

    console.log(key);

    if(key === konamiCode[konamiCodePosition]) {
        konamiCodePosition++;
        if(konamiCodePosition === konamiCode.length) {
            console.log("(!) Konami code detected ! o/");
            document.location = 'konami/';
            konamiCodePosition = 0;
        }
    }

    if(key === geshiiCode[geshiiCodePosition]) {
        geshiiCodePosition++;
        if(geshiiCodePosition === geshiiCode.length) {
            console.log("(!) Geshii code detected ! o/");
            document.location = 'remix/';
            geshiiCodePosition = 0;
        }
    }
});