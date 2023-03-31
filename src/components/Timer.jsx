import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
const Timer = ({time,setTime}) => {

  useEffect(() => {
    const interval = setInterval(() => time !== 0 ? setTime(time - 1) : setTime(0), 1000);
    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    time === 10 && toast.error("You have less than 10 seconds left..");
  },[time])
  

  return (
    <div>
      <h3 className="font-semibold text-sm">Time left: {time} secs</h3>
    </div>
  );
};

export default Timer;
