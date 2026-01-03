let seconds = 0;
let timer = setInterval(updateTimer, 1000);

function updateTimer() {
    seconds++;
    let hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    let secs = String(seconds % 60).padStart(2, '0');
    document.getElementById("time").innerText = `Time elapsed: ${hrs}:${mins}:${secs}`;
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    seconds = 0;
    document.getElementById("time").innerText = "Time elapsed: 00:00:00";
}
function toggleMap1() {
    const map = document.getElementById("map1");

    if (map.style.display === "none") {
        map.style.display = "block";
    } else {
        map.style.display = "none";
    }
}
