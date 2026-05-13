/* 
HTML Placement:
<div id="clock">00:00:00</div>
<div id="date">Date</div>
*/

function updateClock() {
    document.getElementById("clock").innerText =
        new Date().toLocaleTimeString('en-US', { hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true });
}

function updateDate() {
    document.getElementById("date").innerText = new Date().toLocaleDateString();
}

// Set up independent 1-second interval cycles
setInterval(updateClock, 1000);
setInterval(updateDate, 1000);

// Run immediately on page load
updateClock();
updateDate();
