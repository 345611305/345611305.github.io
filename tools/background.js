/* 
HTML Placement:
<div id="bg1" class="bg"></div>
<div id="bg2" class="bg"></div>
*/

const gradients = [
    "linear-gradient(315deg,#ff0000,#ff8800)",
    "linear-gradient(315deg,#ff4400,#ffff00)",
    "linear-gradient(315deg,#ffff00,#ffff00,#00cc00)",
    "linear-gradient(315deg,#00cc00,#00cc00,#4a86e8)",
    "linear-gradient(315deg,#4a86e8,#4a86e8,#ff00ff)",
    "linear-gradient(315deg,#ff00ff,#ff0000)"
];

let index = 0;
const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");

// Set up the initial visual layer states
bg1.style.background = gradients[0];
bg1.style.opacity = 1;
bg2.style.opacity = 0;

function switchBackground() {
    const next = (index + 1) % gradients.length;
    const topLayer = index % 2 === 0 ? bg2 : bg1;
    const bottomLayer = index % 2 === 0 ? bg1 : bg2;

    topLayer.style.background = gradients[next];
    topLayer.style.opacity = 1;
    bottomLayer.style.opacity = 0;

    index++;
}

// Trigger smooth opacity switch transitions every 4 seconds
setInterval(switchBackground, 4000);
