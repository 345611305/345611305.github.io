/*
<div class="clock" id="clock">00:00:00</div>
<div id="note"></div>
<tag onclick="setT(5)">5</tag>
<tag onclick="setT(10)">10</tag>
<tag onclick="setT(15)">15</tag>
<!-- more... -->

*/

function setT(m) { 
    hours = 0; 
    seconds = 1; 
    minutes = m; 
    timer(); 
}

let appState = JSON.parse(localStorage.getItem("sys-state")) || { version: "clock" };
let version = appState.version;
const all = document.getElementsByClassName("clock")
const all1 = document.getElementsByClassName("top-bar")
const all2 = document.getElementsByClassName("bottom-bar")
let del = "f"
cl.onclick = () => {
    pause = "f"
    fullTimer()
}
function fullTimer() {
    if (version == "timer") {
        del = "t"
        Array.from(all).forEach(el => {
            el.style.display = "none"
        });
        Array.from(all1).forEach(el => {
            el.style.display = "none"
        });
        Array.from(all2).forEach(el => {
            el.style.display = "none"
        });

        document.getElementById("clock").style.fontSize = "350px"
        document.getElementById("default").style.padding = "0px"
        document.getElementById("note").innerText = 
        `Click the timer to return home.`
        seconds += 1
        timer()
    }
}
function clean1() {
    if (del == "f") {
        document.getElementById("note").innerText = 
        null;
    }
}
window.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        unfulltimer()
    }
})
clock.onclick = () => {
    unfulltimer()
}

function unfulltimer() {
    if (del == "t") {
        del = "f"
        document.getElementById("clock").style.fontSize = "90px"
        document.getElementById("default").style.padding = "50px"
        Array.from(all).forEach(el => {
            el.style.display = "block"
        });
        Array.from(all1).forEach(el => {
            el.style.display = "block"
        });
        Array.from(all2).forEach(el => {
            el.style.display = "block"
        });
        document.getElementById("note").innerText = 
        ``
        seconds += 1
        timer()
        clean1()
    }
    else {
        fullTimer()
    }
}

window.onload = () => {
    if (version === "timer") {
        document.getElementById("options").style.display = "block";
        document.getElementById("options2").style.display = "block";
        timer();
    } else {
        document.getElementById("options").style.display = "none";
        document.getElementById("options2").style.display = "none";
        updateClock();
        updateDate();
    }
};

function specific() {
    let p = prompt("Choose how many minutes you want the timer running for:", "10")
    if (p){
        if (p > 1441) {
            p = 1441
        }
        hours = 0
        //minutes = Number(p);
        minutes = parseInt(p, 10);
        seconds = 2
    }
}

document.getElementById("options").style.display = "none";
document.getElementById("options2").style.display = "none";

notClock.onclick = () => {
    if (version == "clock") {
        version = "timer";
        localStorage.setItem("sys-state", JSON.stringify({ version: version }));
        document.getElementById("options").style.display = "block";
        document.getElementById("options2").style.display = "block";
        timer();
    } else {
        version = "clock";
        localStorage.setItem("sys-state", JSON.stringify({ version: version }));
        document.getElementById("options").style.display = "none";
        document.getElementById("options2").style.display = "none";
        updateClock();
        updateDate();
    }
};

function resetTimer() {
    if (pause == "f") {
        pause = "t";
        document.getElementById('clock').innerText = 
        `Paused`;
        document.getElementById("date").innerHTML = "<reset type='button' onclick='resetTimer()'>Resume timer</reset>";
    }
    else {
        pause = "f";
        seconds += 1;
        timer()
    }
}

let seconds = 1;
let minutes = 45;
let hours = 0;

function format1() {
        if (seconds <= 0) {
            minutes -= 1;
            seconds = 60;
        }
        if (minutes == 0 && hours >= 1) {
            hours -= 1;
            minutes = 60;
        }
        if (minutes > 60) {
            minutes -= 60;
            hours += 1;
        }
}
function format() {
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
    format1()
}
let pause = "f"



function timer() {
    if (seconds == 0 && minutes == 0 && hours == 0) {
        document.getElementById("clock").innerText = `DONE!`;
        document.getElementById("note").innerText = 
        `Click "Done!" to set another timer.`
        clean1()
    } 
    else {
        if (pause == "f") {
            format()
            seconds--;
            if (version == "timer") {
                let formattedMinutes = String(minutes).padStart(2, '0');
                let formattedSeconds = String(seconds).padStart(2, '0');
                let formattedHours = String(hours).padStart(2, '0');
                if (del == "f") {
                    if (hours > 0) {
                        document.getElementById("clock").innerText = `Timer: ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
                    }
                    else {
                        document.getElementById("clock").innerText = `Timer: ${formattedMinutes}:${formattedSeconds}`;
                    }
                }
                else {
                    if (hours > 0) {
                        let formattedHours = String(hours).padStart(2, '0');
                        document.getElementById("clock").innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
                    }
                    else {
                        document.getElementById("clock").innerText = `${formattedMinutes}:${formattedSeconds}`;
                    }
                }
                if (document.hidden) {
                    // Tab is now inactive
                    document.title = `Timer: ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
                    //document.title = `Bloxd.io - Play Free Online Games!`;
                } 

                //document.getElementById("clock").innerText = `Timer: ${formattedMinutes}:${formattedSeconds}`;
                document.getElementById("date").innerHTML = "<reset type='button' onclick='resetTimer()'>Pause timer</reset>";
            }
        }
    }
}
setInterval(timer, 1000);
