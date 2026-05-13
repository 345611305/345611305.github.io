/* 
HTML & CSS Setup: 
<style>
  .clock { font-size: 90px; font-weight: 600; text-align: center; }
</style>
<div id="clock" class="clock">00:00:00</div>
<div id="date" class="clock">Date</div>
*/

function updateClock() {
    document.getElementById("clock").innerText =
        new Date().toLocaleTimeString('en-US', { hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true });
}

function updateDate() {
    document.getElementById("date").innerText = new Date().toLocaleDateString();
}

setInterval(updateClock, 1000);
setInterval(updateDate, 1000);
updateClock();
updateDate();
