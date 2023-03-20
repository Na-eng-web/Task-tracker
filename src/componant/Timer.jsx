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

  return (
    <div className={Style.outer}>
      <div className={Style.inner} style={{ width: `${time}%` }}>
        {time}
      </div>
    </div>
  );
};

export default Timer;
