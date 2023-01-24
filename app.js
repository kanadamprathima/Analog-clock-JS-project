const secondshand = document.getElementById("seconds-hand");
const minutesHand = document.getElementById("minutes-hand");
const hoursHand = document.getElementById("hours-hand");
const getTime = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  console.log(now);
  console.log(minutes);
  const timeInterval = 6;
  // var secondsDegrees = (seconds / 60) * 360 + 90;
  // var minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  // var hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  // secondshand.style.transform = "rotate(" + (seconds / 60) * 360 + 90 + "deg)";
  // minutesHand.style.transform = "rotate(" + minutesDegrees + "deg)";
  // hoursHand.style.transform = "rotate(" + hoursDegrees + "deg)";
  secondshand.style.transform = "rotate(" + seconds * timeInterval + "deg)";
  minutesHand.style.transform =
    "rotate(" + minutes * timeInterval + seconds / 10 + "deg)";
  hoursHand.style.transform = "rotate(" + hours * 30 + minutes / 2 + "deg)";
};
setInterval(getTime, 100);
getTime();
