import React, { useEffect, useState } from "react";
import Style from "../style/Timer.module.css";

const Timer = (props) => {
  const [time, settime] = useState(parseInt(props.time));
  const timer = () => settime(time - 1);
  useEffect(() => {
    if (time <= 0) {
      return;
    }

    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [time]);
  const progress = Math.min((time / props.time) * 100, 100);
  return (
    <div className={Style.outer}>
      {/* this logic need to be rectify */}
      <div className={Style.inner} style={{ width: `${progress}%` }}>
        {time}
      </div>
    </div>
  );
};

export default Timer;
