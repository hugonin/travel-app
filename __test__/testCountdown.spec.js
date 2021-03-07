import { countdownTimer } from '../src/client/js/countdown'

jest.useFakeTimers();


describe("testing the countdown timer", () => {
    test("Should call the done callback when the timer has finished counting", function() {
        const progressCallbackSpy = jest.fn();
        const doneCallbackSpy = jest.fn();
        countdownTimer(1, progressCallbackSpy, doneCallbackSpy)

        jest.runTimersToTime(1000);
          
        expect(progressCallbackSpy.mock.calls.length).toBe(1);
        const firstCall = progressCallbackSpy.mock.calls[0];
        const firstCallArg = firstCall[0];
        expect(firstCallArg).toBe(1);            
    });
    
});