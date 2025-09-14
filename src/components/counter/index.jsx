'use client'

import { useEffect, useState } from "react";

function Counter({ target, duration = 2000, decimals = 0 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newValue = start + (target - start) * progress;
      setValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{value.toFixed(decimals)}</span>;
}

export default Counter