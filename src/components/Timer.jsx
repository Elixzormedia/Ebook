import { useState } from "react";
import { useEffect } from "react";

export default function Timer({ targetTime }) {
  // Calculate the target time by adding 2 hours (2 * 60 * 60 * 1000 milliseconds) to the current time

  // Initialize the remaining time state
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  // Calculate the remaining time
  function calculateRemainingTime() {
    const now = new Date().getTime();
    const timeRemaining = targetTime - now;

    if (timeRemaining <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }

  // Update the remaining time every second
  useEffect(() => {
    const timerInterval = setInterval(() => {
      const newRemainingTime = calculateRemainingTime();
      setRemainingTime(newRemainingTime);

      if (
        newRemainingTime.hours === 0 &&
        newRemainingTime.minutes === 0 &&
        newRemainingTime.seconds === 0
      ) {
        clearInterval(timerInterval);
        // Timer has ended, you can add your logic here
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []);

  // Render the countdown timer
  return (
    <span className="ml-2 text-red-500">
      {remainingTime.hours}h {remainingTime.minutes}m {remainingTime.seconds}s
    </span>
  );
}
