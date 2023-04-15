import { useEffect, useState } from "react";
import Style from "../style/Timer.module.css";
import { UseTimer } from "./Contex/contex";

const Timer = (props) => {
  const { Final, SetTim } = UseTimer();
  SetTim(props.time);
  return (
    <div className={Style.outer}>
      {/* this logic need to be rectify */}
      <div className={Style.inner} style={{ width: `${Final}%` }}>
        {Math.floor(Final)}
      </div>
    </div>
  );
};

export default Timer;
