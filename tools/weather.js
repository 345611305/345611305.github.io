/* 
HTML & CSS Setup:
<style>
  #weather { font-size: 40px; cursor: pointer; }
</style>
<div id="weather">Weather: Loading...</div>
*/

document.getElementById("weather").onclick = () => {
    window.open('theweathernetwork.com', 'newwindow', 'width=1518px,height=853px'); 
    return false;
};

function temp() {
    fetch("open-meteo.com")
    .then(r => r.json())
    .then(data => {
        if (data.current_weather) {
            document.getElementById("weather").innerText =
                "Temperature: " + data.current_weather.temperature + "°C";
        }
    })
    .catch(() => {
        document.getElementById("weather").innerText = "Weather Unavailable";
    });
}

setInterval(temp, 900000);
temp();
