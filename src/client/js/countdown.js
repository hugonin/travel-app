
function countdownTimer() {
  let dateInput = document.getElementById("departure").value;
  let currentDate =  new Date(); 
  let departureDate = new Date(dateInput); 
  const difference =  +departureDate - +currentDate // difference is cast as an integer and calculated in milliseconds
  let remaining = "Time's up!"

  if (difference > 0) {
    const parts = {
       days : Math.floor(difference / (1000 * 60 * 60 * 24)),
       hours : Math.floor((difference / (1000 * 60 * 60)) % 24),
       minutes : Math.floor((difference / 1000 / 60) % 60),
       seconds : Math.floor((difference / 1000) % 60),
    };
    // The object is formatted into a string then the .map() method will iterate over each item
    remaining = Object.keys(parts).map(part => {
      //if there is no corresponding number, move on to the next unit of time and check again
      if (!parts[part]) return;
      return `${parts[part]} ${part}`;
    }) .join(" ");
  }

  document.getElementById("countdown").innerHTML = remaining;
}

countdownTimer();
setInterval(countdownTimer, 1000);

export { countdownTimer }

