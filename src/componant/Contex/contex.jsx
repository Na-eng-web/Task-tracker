import { createContext, useContext, useEffect, useState } from "react";

const TimerContex = createContext({});

export const UseTimer = () => useContext(TimerContex);

const Wrapper = ({ children }) => {
  // const progress = Math.min((time / T) * 100, 100);
  const [Tim, SetTim] = useState();
  SetTim(50);
  const [T, setT] = useState(parseInt(Tim));
  useEffect(() => {
    setInterval(() => {
      setT((T) => T + 1);
    }, 1000);
  }, []);
  let Final = Math.min((Tim / T) * 100, 100);
  return (
    <TimerContex.Provider value={{ Final, SetTim }}>
      {children}
    </TimerContex.Provider>
  );
};
export default Wrapper;
