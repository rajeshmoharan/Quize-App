/* eslint-disable react/prop-types */
import { useEffect } from "react";

function Timer({ dispatch,timerObject }) {
    const min = Math.floor(timerObject/60);
    const extraTime = timerObject % 60

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "timer" });
    }, 1000);
    return  () => clearInterval(id)
  }, [dispatch]);

  return (
    <div className="ml-20 bg-gray-500 inline p-4 rounded-full text-white font-mono">
      {min < 10 ? "0": ""}{min}:{extraTime < 10 ? "0" : ""}{extraTime}
    </div>
  );
}
export default Timer;
