const time = document.getElementById("time");

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    let amPm = "PM";

    hours = hours > 12? hours % 12 : hours;
    hours = hours ? hours : 12;

    if (hours === 12) {
        if (amPm === "PM") {
            amPm = "AM";
        } else {
            amPm = "PM";
        }
    }

    time.innerHTML = `<button id="time-button">${hours}:${minutes} ${amPm}</button>`
}
updateTime();
setInterval(() => {
    updateTime();JSON;
}, 1000);


