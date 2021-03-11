
'use strict';

jest.useFakeTimers();

describe('Testing the countdownTimer', () => {
  test('schedules a 10-second timer after 1 second', () => {
    const countdownTimer = require('../src/client/js/fakeCountdown');
    const callback = jest.fn();

    countdownTimer(callback);

    // At this point in time, there should have been a single call to
    // setInterval to schedule the end of the trip planification in 1 second.
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);

    // Fast forward and exhaust only currently pending timers
    // (but not any new timers that get created during that process)
    jest.runOnlyPendingTimers();

    // At this point, our 1-second timer should have fired it's callback
    expect(callback).toBeCalled();

    // And it should have created a new timer to start the trip planification over in
    // 10 seconds
    expect(setInterval).toHaveBeenCalledTimes(2);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 10000);
  });
});