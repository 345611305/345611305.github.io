/* 
HTML Placement:
<div id="weather">Weather: Loading...</div>
*/

// Set up the click navigation handler
document.getElementById("weather").onclick = () => {
    window.open('theweathernetwork.com', 'newwindow', 'width=1518px,height=853px'); 
    return false;
};

// Handle external API fetching and UI text replacement
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

// Fetch every 15 minutes to save resources and run once immediately
setInterval(temp, 900000);
temp();
