let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
    seconds++;
    if (seconds >= 60) {
        minutes++;
        seconds = 0;

        if (minutes >= 60) {
            hours++;
            minutes = 0;
        }
    }

    displayTime.innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function startwatch() {
    if (timer === null) {
        timer = setInterval(stopwatch, 1000);
    }
}

function stopWatch() {
    clearInterval(timer);
    timer = null;
}

function resetWatch() {
    stopWatch();
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime.innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
