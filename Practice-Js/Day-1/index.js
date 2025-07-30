document
  .getElementById("start-btn")
  .addEventListener("click", getTimeInSeconds);

document.getElementById("reset-btn").addEventListener("click", resetTime);

const displayField = document.querySelector(".display");

function getTimeInSeconds() {
  const timeInseconds = document.getElementsByClassName("input-field")[0].value;
  let minutes = Math.floor(timeInseconds / 60);
  let seconds = Math.floor(timeInseconds % 60).toFixed(2);

  setInterval(() => {
    if (timeInseconds === 0) {
      return;
    }
    if (seconds > 0 && seconds < 60) {
      seconds--;
    }
    if (seconds === 0 && minutes > 0) {
      minutes--;
    }
    displayField.innerHTML = `${minutes} minutes ${seconds} seconds`;
    console.log(`Time in minutes: ${minutes} minutes`);
    console.log(`Time in seconds: ${seconds} seconds`);
  }, 1000);
}

function resetTime() {
  document.getElementsByClassName("input-field")[0].value = "";
  displayField.innerHTML = "Time reset to 0 seconds";
}
