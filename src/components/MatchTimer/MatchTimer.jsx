import { useState, useEffect } from "react";

const MatchTimer = ({ date }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const matchTime = new Date(date);
    console.log(matchTime);

    const interval = setInterval(() => {
      const now = new Date();
      console.log(now);
      const elapsed = Math.floor((now - matchTime) / 1000);
      console.log("elapsed", elapsed);
      setElapsedTime(elapsed);
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  return (
    <div>{`${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`}</div>
  );
};

export default MatchTimer;
