import { useState, useEffect } from "react";

const MatchTimer = ({ date, status }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const matchTime = new Date(date);

    const interval = setInterval(() => {
      const now = new Date();
      const elapsed = Math.floor((now - matchTime) / 1000);

      if (status === "Second Half") {
        const newElapsed = elapsed - 15 * 60;
        setElapsedTime(newElapsed);
      } else {
        setElapsedTime(elapsed);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [date, status]);

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  const timeString = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return <div>{timeString}</div>;
};

export default MatchTimer;
