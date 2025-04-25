import { useState, useEffect } from "react";
import styles from "./Time.module.css";

function Time() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours: string = now.getHours().toString().padStart(2, "0");
  const minutes: string = now.getMinutes().toString().padStart(2, "0");
  const day: string = now.getDate().toString().padStart(2, "0");
  const month: string = (now.getMonth() + 1).toString().padStart(2, "0");
  const year: number = now.getFullYear();

  return (
    <div className={styles.time}>
      <p>
        {hours}:{minutes} {day}/{month}/{year}
      </p>
    </div>
  );
}

export default Time;
