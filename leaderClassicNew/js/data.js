export const dateTimer = () => {
  const target = new Date("2026-07-20T23:59:59").getTime();
  const daysTimer = document.querySelector("#days");
  const hoursTimer = document.querySelector("#hours");
  const minutesTimer = document.querySelector("#minutes");
  const secondsTimer = document.querySelector("#seconds");

  function updateTimer() {
    const now = new Date().getTime();
    const diff = target - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    daysTimer.textContent = days;
    hoursTimer.textContent = hours;
    minutesTimer.textContent = mins;
    secondsTimer.textContent = secs;
  }

  updateTimer();

  const interval = setInterval(updateTimer, 1000);
};
