import React, { useState, useEffect } from "react";

const Timer = () => {
    const [minutes, setMinutes] = useState(9);
  const [seconds, setSeconds] = useState(60);

   useEffect(() => {
     const timer = minutes > 0 && setTimeout(() => setMinutes(minutes - 1), 60000);
     return () => {
       clearTimeout(timer);
     };
   }, [minutes]);
  useEffect(() => {
    const timerId = seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
  return () => {
    clearTimeout(timerId);
  };
  }, [minutes,seconds]);
  return <React.Fragment>{minutes}:{seconds}</React.Fragment>;
};

export default Timer;
