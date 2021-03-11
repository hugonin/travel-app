// This is a fake function to illustrate the passage of time in a testing environment
// In this case the countdownTimer is recursive, it sets a new timer in its own callback
 

'use strict';

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;



function countdownTimer(callback) {
    let currentDate =  new Date(); 
    let departureDate = new Date("Mar 11, 2022 15:37:25"); 
  
      const difference = +departureDate - +currentDate;
      let remaining = "";
  
      if (difference > 0) {
          const parts = {
              days : Math.floor(difference / day),
              hours : Math.floor((difference / hour) % 24),
              minutes : Math.floor((difference / minute) % 60),
              seconds : Math.floor((difference / second) % 60),
          };
          remaining = Object.keys(parts).map(part => {
              return `${parts[part]} ${part}`;
           }).join(" ");
      }
   
  setInterval(() => {
    console.log("Time's up! 10 seconds before the next timer starts...");
    callback && callback();

    // Schedule the next timer in 10 seconds
    setInterval(() => {
      countdownTimer(callback);
    }, 10000);
  }, 1000);
  
}

  
module.exports = countdownTimer;
 
