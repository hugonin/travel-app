const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;



function countdownTimer() {
  let dateInput = document.getElementById("date-picker").value;
  let currentDate =  new Date(); 
  let departureDate = new Date(dateInput); 

    const difference = +departureDate - +currentDate;
    let remaining = "";

    if (difference > 0) {
        const parts = {
            days : Math.floor(difference / day),
            hours : Math.floor((difference / hour) % 24),
            minutes : Math.floor((difference / minute) % 60),
            //seconds : Math.floor((difference / second) % 60),
        };
        remaining = Object.keys(parts).map(part => {
            return `${parts[part]} ${part}`;
         }).join(" ");
    }

  document.getElementById("countdown").innerHTML = ` ${remaining}`;

}
  
countdownTimer();
setInterval(countdownTimer, 1000);


export { countdownTimer }