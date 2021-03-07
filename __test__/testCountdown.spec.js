// To run properly the test of the countdown timer we have to give a value to the dateInput variable in countdown.js file also to comment the line 29

jest.useFakeTimers();


describe("testing the countdown timer", () => {
    test('waits 1 second before ending the request', () => {
        const countdownTimer = require('../src/client/js/countdown');
      
        countdownTimer();
      
        expect(setInterval).toHaveBeenCalledTimes(1);
        expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
      });


    
});
